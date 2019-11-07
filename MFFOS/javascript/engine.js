class Engine {
  constructor($canvas) {
    this.canvas = $canvas;
    this.ctx = $canvas.getContext('2d');
    this.squares = [];
    this.background = new Background(this);
    this.cursor = new Cursor(this);
    this.counter = new Chronometer(this);
    this.scoreboard = new Scoreboard(this);
    this.height = $canvas.height;
    this.width = $canvas.width;
    this.pointerX = undefined;
    this.pointerY = undefined;
    this.storageTrue = window.localStorage;
    this.highestScore = this.counter.finalTime;
    this.scoreHTML = document.getElementById('scoreboard');
    this.scoreSpan = this.scoreHTML;
    this.explosions = [];
    this.bonus = [];
    this.timestamp = undefined;
    this.bonusTime = 5000;
    this.bonusInterval = 3000;
    this.cometInterval = 1000;
    this.cometTime = 1;
  }

  spawnNewObstacle() {
    this.squares.unshift(new Square(this));
  }

  drawEverything() {
    if (loseALife === true) {
      if (this.cursor.lives > 1) {
        kittyHurt.cloneNode().play();
      }
      this.cursor.lives--;
      loseALife = false;
    }
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.background.drawGalaxy();
    this.cursor.drawTail();
    this.cursor.kittyRoar();
    this.drawBulk();
    this.addBonus();
    this.background.drawBorders();
    this.checkExplosion();
    console.log(this.cursor.x, this.cursor.tailX);
    // console.log(this.squares);
    // this.removeComet();
    this.addRandomComet();
    this.counter.printHUD();
  }
  // this was in the beneath if this.squares.length !== 0 &&
  drawBulk() {
    if (immune === false) {
      for (let i = 0; i < this.squares.length; i++) {
        this.cursor.drawCursor();
        this.squares[i].checkCollision();
        this.squares[i].draw();
        this.squares[i].update();
      }
    } else if (immune === true) {
      for (let i = 0; i < this.squares.length; i++) {
        this.squares[i].draw();
        this.squares[i].update();
        this.cursor.twoSecondImmunity();

        immuneCount++;
        if (immuneCount >= 600) {
          immune = false;
          immuneCount = 0;
        }
      }
    }
    for (let i = 0; i < this.bonus.length; i++) {
      this.bonus[i].update();
      this.bonus[i].draw();
      if (this.bonus[i].checkCollision() === 'life') {
        bonusSound.cloneNode().play();
        this.bonus.splice(i, 1);
        this.cursor.getLife = true;
      } else if (this.bonus[i].checkCollision() === 'power') {
        bonusSound.cloneNode().play();
        this.bonus.splice(i, 1);
        this.cursor.getPower = true;
      }
    }
  }

  addRandomComet() {
    if (this.cometInterval < this.timestamp - this.cometTime) {
      this.squares.unshift(new Square(this));
      this.squares[0].spawnSpeedCheck();
      this.cometTime = this.timestamp;
    }
  }

  checkExplosion() {
    if (this.explosions.length !== 0) {
      for (let i = 0; i < this.explosions.length; i++) {
        this.explosions[i].update();
        this.explosions[i].draw();
      }
    }
    if (this.explosions.length >= 5) {
      this.explosions.pop();
    }
  }
  animate(timestamp) {
    if (lose === false) {
      if (this.cursor.lives <= 0) {
        lose = true;
      }
      this.drawEverything();
      frameRequest = window.requestAnimationFrame(timestamp =>
        this.animate(timestamp)
      );
      this.timestamp = timestamp;
    } else {
      cancelAnimationFrame(frameRequest);
      // this.counter.printHUD();
      // this.counter.printScore();
      this.loseGame();
      this.scoreboard.addToStorage();
      // prompt('whats ya name boi?');
      this.canvas.classList.remove('nocursor');
      lose = true;
    }
  }

  loseGame() {
    bgMusic.pause();
    kittyCry.play();
    // this.showHighest();
    this.ctx.drawImage(gameover, 0, 0);
    this.ctx.font = '32px Arial';
    this.ctx.fillStyle = 'White';
    this.ctx.fillText(parseInt(this.cursor.score), 310, 480);
    if (
      parseInt(this.cursor.score) > parseInt(myStorage.Score) ||
      myStorage.Score === undefined
    ) {
      this.ctx.fillText(parseInt(this.cursor.score), 310, 530);
    } else this.ctx.fillText(myStorage.Score, 310, 530);
  }

  addBonus() {
    if (this.bonusInterval < this.timestamp - this.bonusTime) {
      this.bonus.unshift(new Bonus(this));
      this.bonus[0].spawnSpeedCheck();
      this.bonusTime = this.timestamp;
      console.log(
        'bonus added ' +
          this.bonus[0].x +
          '  ' +
          this.bonus[0].y +
          ' x speed' +
          this.bonus[0].speedX +
          ' y speed ' +
          this.bonus[0].speedY +
          this.bonus[0].class +
          this.timestamp
      );
    }
  }

  spawnFirstFive() {
    for (let i = 0; i < 5; i++) {
      this.squares.unshift(new Square(this));
      this.squares[0].spawnSpeedCheck();
    }
  }

  collisionInitialLoop() {
    for (let i = 0; i < this.squares.length; i++) {
      if (this.squares[i].checkCollisionSpawn() === true) {
        this.squares = [];
        this.spawnFirstFive();
        this.collisionInitialLoop();
      }
    }
  }

  reset() {
    this.canvas.classList.add('nocursor');
    // this.showHighest();
    bgMusic.play();
    this.squares = [];
    this.counter.intervalId = 0;
    this.counter.currentTime = 0;
    this.counter.startTimer();
    this.cursor.lives = 5;
    this.cursor.power = 5;
    lose = false;
    this.spawnFirstFive();
    this.cursor.score = 0;
    this.animate();
  }
}

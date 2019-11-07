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
  }

  start() {
    while (this.squares.length <= 6) {
      this.squares.unshift(new Square(this));
    }

    this.animate();
  }

  spawnNewObstacle() {
    this.squares.unshift(new Square(this));
  }

  drawEverything() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.cursor.drawCursor();
    this.background.drawBorders();
    if (this.squares.length !== 0) {
      for (let i = 0; i < this.squares.length; i++) {
        this.squares[i].checkCollision();
        this.squares[i].draw();
        this.squares[i].update();
        // console.log(myStorage);
        // console.dir(this.scoreHTML);
        // if (this.squares[i].x > 600) {
        //   this.squares.pop(); //obsolete
        // }
        this.counter.printTime();
      }
    }
  }

  animate(timestamp) {
    if (lose === false) {
      this.drawEverything();
      frameRequest = window.requestAnimationFrame(timestamp =>
        this.animate(timestamp)
      );
    } else {
      cancelAnimationFrame(frameRequest);
      this.counter.printTime();
      this.counter.printScore();
      this.loseGame();
      // prompt('whats ya name boi?');
      lose = true;
      // this.scoreboard.addToStorage();
    }
  }

  stopAnimation() {
    cancelAnimationFrame(frameRequest);
  }

  loseGame() {
    this.showHighest();
    this.ctx.font = '70px Arial';
    this.ctx.fillStyle = 'red';
    this.ctx.fillText('You LOSe m8', 200, 400);
    // console.log(this.counter.finalTime);
    ctx.fillStyle = 'black';
    ctx.font = ' 32px Arial';
    ctx.fillText('click to restaRt', 450, 650);
  }

  spawnFirstFive() {
    while (this.squares.length <= 4) {
      this.squares.unshift(new Square(this));
    }
  }

  collisionInitialLoop() {
    for (let i = 0; i < this.squares.length; i++) {
      if (this.squares[i].checkCollisionSpawn() === true) {
        // console.log('collisionInitialLoop returned true');
        this.squares = [];
        this.spawnFirstFive();
        this.collisionInitialLoop();
        // this.reset(); - this will create multiple requestAnimationFrame
      }
    }
  }

  reset() {
    this.showHighest();
    this.squares = [];
    this.counter.intervalId = 0;
    this.counter.currentTime = 0;
    this.counter.startTimer();
    lose = false;
    this.spawnFirstFive();
    this.collisionInitialLoop();
    this.animate();
  }

  showHighest() {
    // this.scoreHTML.childNodes[1].innerHTML = myStorage.Time;
  }
}

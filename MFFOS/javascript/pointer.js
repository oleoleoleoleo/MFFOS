class Cursor {
  constructor($canvas) {
    this.ctx = $canvas.ctx;
    this.game = $canvas;
    this.x = undefined;
    this.y = undefined;
    this.w = this.x + 10;
    this.h = this.y + 10;
    this.lives = 5;
    this.level = 0;
    this.power = 5;
    this.getLife = false;
    this.getPower = false;
    this.score = 0;
    this.tailX = undefined;
    this.tailY = undefined;
    this.tailX2 = undefined;
    this.tailY2 = undefined;
    this.tailX3 = undefined;
    this.tailY3 = undefined;
    this.tailX4 = undefined;
    this.tailY4 = undefined;
    this.tailXa = undefined;
    this.tailYa = undefined;
    this.tailX2a = undefined;
    this.tailY2a = undefined;
    this.tailX3a = undefined;
    this.tailY3a = undefined;
    this.tailX4a = undefined;
    this.tailY4a = undefined;
    this.blastArray = [
      [0, 0],
      [201, 0],
      [402, 0],
      [603, 0],
      [804, 0],
      [0, 201],
      [201, 201],
      [402, 201],
      [603, 201],
      [804, 201]
    ];
    this.flicker = false;
    this.blastCount = -1;
    this.blastSprite = new Image();
    this.blastSprite.src = './images/air-blast.png';
    this.roar = false;
    this.tail1 = new Image();
    this.tail1.src = './images/rainbow_trail.png';
    this.tail2 = new Image();
    this.tail2.src = './images/rainbow_trail2.png';
    this.tail3 = new Image();
    this.tail3.src = './images/rainbow_trail3.png';
    this.tail4 = new Image();
    this.tail4.src = './images/rainbow_trail4.png';
  }

  drawCursor() {
    this.ctx.drawImage(kitty, this.x, this.y, 70, 50);
    if (this.getLife === true) {
      this.getLife = false;
      this.lives++;
    }
    if (this.getPower === true) {
      this.getPower = false;
      this.power++;
    }
  }

  twoSecondImmunity() {
    this.ctx.drawImage(kittyImmune, this.x, this.y, 70, 50);
  }

  roarTrigger() {
    if (this.power > 0) {
      this.power--;
      this.roar = true;
      lionRoar.cloneNode().play();
    } else {
      this.ctx.fillText(' NO WAY JO SE', 400, 400);
    }
  }

  kittyRoar() {
    if (this.blastCount < 9 && this.roar === true) {
      this.blastCount++;
      this.ctx.drawImage(
        this.blastSprite,
        this.blastArray[this.blastCount][0],
        this.blastArray[this.blastCount][1],
        200,
        200,
        this.x - 60,
        this.y - 80,
        200,
        200
      );
      for (let i = 0; i < this.game.squares.length; i++) {
        if (
          this.game.squares[i].x + this.game.squares[i].w < this.x + 200 &&
          this.game.squares[i].x + this.game.squares[i].w > this.x - 150 &&
          (this.game.squares[i].y + this.game.squares[i].h < this.y + 200 &&
            this.game.squares[i].y + this.game.squares[i].h > this.y - 150) // commented for testing
        ) {
          this.game.explosions.unshift(
            new Explode(
              this,
              this.game.squares[i].x,
              this.game.squares[i].y,
              this.game.squares[i].w,
              this.game.squares[i].h
            )
          );
          this.game.cursor.score += 150;
          this.game.squares.splice(i, 1);
        }
      }
    } else {
      this.roar = false;
      this.blastCount = -1;
    }
  }

  drawTail() {
    this.ctx.drawImage(this.tail4, this.tailX4a, this.tailY4a, 30, 40);
    this.ctx.drawImage(this.tail4, this.tailX4, this.tailY4, 30, 40);
    this.ctx.drawImage(this.tail3, this.tailX3a, this.tailY3a, 30, 40);
    this.ctx.drawImage(this.tail3, this.tailX3, this.tailY3, 30, 40);
    this.ctx.drawImage(this.tail2, this.tailX2a, this.tailY2a, 30, 40);
    this.ctx.drawImage(this.tail2, this.tailX2, this.tailY2, 30, 40);
    this.ctx.drawImage(this.tail1, this.tailXa, this.tailYa, 30, 40);
    this.ctx.drawImage(this.tail1, this.tailX + 10, this.tailY, 30, 40);
    this.tailX4 = this.tailX3;
    this.tailY4 = this.tailY3;
    this.tailX3 = this.tailX2;
    this.tailY3 = this.tailY2;
    this.tailX2 = this.tailX;
    this.tailY2 = this.tailY;
  }
}

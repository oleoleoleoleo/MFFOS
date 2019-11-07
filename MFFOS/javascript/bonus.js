class Bonus {
  constructor($canvas) {
    this.game = $canvas;
    this.ctx = $canvas.ctx;
    this.width = $canvas.width;
    this.height = $canvas.height;
    this.cursor = $canvas.cursor;
    this.x = randomBonusPos();
    this.y = randomBonusPos();
    this.w = 55;
    this.h = this.w;
    this.speedX = randomDirection();
    this.speedY = randomDirection();
    this.maxSpeedX = randomMaxSpeed(); //random 0 to 40
    this.maxSpeedY = 40 - this.maxSpeedX; // the max sum of y and x speeds won't exceed 40px/frame
    this.class = randomBonus();
    this.redCake = new Image();
    this.redCake.src = './images/cake.png';
    this.purpleCake = new Image();
    this.purpleCake.src = './images/redcake.png';
  }

  draw() {
    this.ctx.fillStyle = 'blue';
    if (this.class === 'life') {
      this.ctx.drawImage(this.redCake, this.x, this.y, this.w, this.w);
    } else if (this.class === 'power') {
      this.ctx.drawImage(this.purpleCake, this.x, this.y, this.w, this.w);
    }
  }

  update() {
    this.y += this.speedY;
    this.x += this.speedX;
  }

  checkCollision() {
    if (
      this.x < this.cursor.x + 70 &&
      this.x + this.w > this.cursor.x &&
      (this.y < this.cursor.y + 40 && this.y + this.h > this.cursor.y) // commented for testing
    ) {
      if (this.class === 'life') {
        return 'life';
      } else if (this.class === 'power') return 'power';
    }
  }

  spawnSpeedCheck() {
    if ((this.x < 0 && this.speedX < 0) || (this.x > 800 && this.speedX > 0)) {
      this.speedX = -this.speedX;
    }
    if ((this.y > 800 && this.speedY > 0) || (this.y < 0 && this.speedY < 0)) {
      this.speedY = -this.speedY;
    }
  }
}

class Square {
  constructor($canvas) {
    this.game = $canvas;
    this.ctx = $canvas.ctx;
    this.width = $canvas.width;
    this.heigth = $canvas.heigth;
    this.cursor = $canvas.cursor;
    this.x = randomXFromOutside();
    this.img = randomComet();
    this.y = randomYFromOutside();
    this.w = randomSize();
    this.h = randomSize();
    this.speedX = randomDirection();
    this.speedY = randomDirection();
    this.maxSpeedX = randomMaxSpeed(); //random 0 to 40
    this.maxSpeedY = 40 - this.maxSpeedX; // the max sum of y and x speeds won't exceed 40px/frame
    this.arrOfImg = [comet1, comet2, comet3, comet4];
    this.bounces = 0;
    this.explodeCount = 0;
    this.spawnImmunity = true;
    this.rotation = randomRotation();
    this.rotationDirection = randomRotation();
  }

  // setSpeed() {
  //   let newX = randomSpeed();
  //   let newY = 4 - newX;             //this was fail
  //   this.speedX = newX - 2;
  //   this.speedY = newY - 2;
  // }

  spawnSpeedCheck() {
    if ((this.x < 0 && this.speedX < 0) || (this.x > 800 && this.speedX > 0)) {
      this.speedX = -this.speedX;
      // console.log('speedcheck called');
    }
    if ((this.y > 800 && this.speedY > 0) || (this.y < 0 && this.speedY < 0)) {
      this.speedY = -this.speedY;
      // console.log('speedcheck called');
    }
  }
  draw() {
    this.spawnSpeedCheck();
    this.ctx.save();
    this.ctx.translate(this.x + this.w / 2, this.y + this.h / 2);
    if (this.rotationDirection > 0) {
      this.ctx.rotate((this.rotation * Math.PI) / 180);
    } else this.ctx.rotate(-((this.rotation * Math.PI) / 180));
    this.ctx.translate(-this.x - this.w / 2, -this.y - this.h / 2);
    this.ctx.drawImage(this.arrOfImg[this.img], this.x, this.y, this.w, this.h);
    this.ctx.restore();
    // if (this.rotation < 0.5) {
    this.rotation++;
    // } else this.rotation++;
  }

  // update() {
  //   this.x += this.direction;
  //   this.y += this.direction;
  // }

  // update() {
  //   this.speedX > 0 ? (this.x += this.speedX) : (this.x -= this.speedX); //if this.x is positive this.x + 1 / if negative this.x -1
  //   this.speedY > 0 ? (this.y += this.speedY) : (this.y -= this.speedY);
  // }

  update() {
    if (this.spawnImmunity === false) {
      if (this.speedX <= this.maxSpeedX && this.speedX >= -this.maxSpeedX) {
        this.speedX *= 1.001;
      }
      if (this.speedY <= this.maxSpeedY && this.speedY >= -this.maxSpeedY) {
        this.speedY *= 1.001;
      }
      this.y += this.speedY;
      this.x += this.speedX;
      this.rotation += 1;
      if (this.x <= 30 || this.x + this.w >= $canvas.width - 30) {
        this.speedX = -this.speedX;
        // this.bounces++;
      }
      // } else this.x += this.speedX;
      if (this.y <= 100 || this.y + this.h >= $canvas.height - 100) {
        this.speedY = -this.speedY;
        // this.bounces++;
        // } else this.y += this.speedY;
      }
    } else if (
      100 < this.x &&
      this.x + this.w < 650 &&
      103 < this.y &&
      this.y < 550
    ) {
      this.spawnImmunity = false;
    }
    // IF IMMUNITY IS TRUE
    else if (this.spawnImmunity === true) {
      this.y += this.speedY;
      this.x += this.speedX;
      if (this.x <= -300 || this.x + this.w >= 1100) {
        this.speedX = -this.speedX;
        // this.bounces++;
      }
      if (this.y <= -300 || this.y + this.h >= 1100) {
        this.speedY = -this.speedY;
        // this.bounces++;
        // } else this.y += this.speedY;
      }
    }
  }

  checkCollision() {
    if (
      this.x + this.w / 3 < this.cursor.x + 60 &&
      this.x + this.w / 2 > this.cursor.x &&
      (this.y + this.h / 3 < this.cursor.y + 50 &&
        this.y + this.h / 2 > this.cursor.y) // commented for testing
    ) {
      immune = true;
      loseALife = true;
    } else if (
      this.cursor.x <= 30 ||
      this.cursor.x + 70 >= 770 ||
      this.cursor.y <= 100 ||
      this.cursor.y + 50 >= 700
    ) {
      immune = true;
      loseALife = true;
    }
  }

  checkCollisionSpawn() {
    this.spawnSpeedCheck();
    this.spawnSpeedCheck();
  }
}

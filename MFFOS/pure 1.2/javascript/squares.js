class Square {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.ctx = $canvas.ctx;
    this.width = $canvas.width;
    this.height = $canvas.height;
    this.cursor = $canvas.cursor;
    this.x = randomX();
    this.y = randomY();
    this.w = randomSize() + 20;
    this.h = 170 - this.w;
    this.speedX = randomDirection();
    this.speedY = randomDirection();
    this.maxSpeedX = randomMaxSpeed(); //random 0 to 40
    this.maxSpeedY = 40 - this.maxSpeedX; // the max sum of y and x speeds won't exceed 40px/frame
  }

  // setSpeed() {
  //   let newX = randomSpeed();
  //   let newY = 4 - newX;             //this was fail
  //   this.speedX = newX - 2;
  //   this.speedY = newY - 2;
  // }
  draw() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
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
    if (this.speedX <= this.maxSpeedX && this.speedX >= -this.maxSpeedX) {
      this.speedX *= 1.0025;
    }
    if (this.speedY <= this.maxSpeedY && this.speedY >= -this.maxSpeedY) {
      this.speedY *= 1.0025;
    }
    this.y += this.speedY;
    this.x += this.speedX;
    if (this.x <= 100 || this.x + this.w >= $canvas.width - 100) {
      this.speedX = -this.speedX;
    }
    // } else this.x += this.speedX;
    if (this.y <= 100 || this.y + this.h >= $canvas.height - 100) {
      this.speedY = -this.speedY;
      // } else this.y += this.speedY;
    }
  }

  checkCollision() {
    if (
      this.x < this.cursor.x + 10 &&
      this.x + this.w > this.cursor.x &&
      (this.y < this.cursor.y + 10 && this.y + this.h > this.cursor.y) // commented for testing
    ) {
      lose = true;
    } else if (
      this.cursor.x <= 100 ||
      this.cursor.x + 10 >= 700 ||
      this.cursor.y <= 100 ||
      this.cursor.y + 10 >= 700
    ) {
      lose = true;
    }
  }

  checkCollisionSpawn() {
    if (
      this.x < this.cursor.x + 10 &&
      this.x + this.w > this.cursor.x &&
      (this.y < this.cursor.y + 10 && this.y + this.h > this.cursor.y) // commented for testing
    ) {
      return true;
    } else if (
      this.x <= 100 ||
      this.x + this.w >= 690 ||
      this.y <= 100 ||
      this.y + this.h >= 690
    ) {
      return true;
    }
  }

  // trying to adjust offset here

  // checkCollision() {
  //   if (
  //     this.x < this.cursor.x - 190 &&
  //     this.x + this.w > this.cursor.x - 190 &&
  //     (this.y < this.cursor.y - 190 && this.y + this.h > this.cursor.y - 190)
  //   ) {
  //     lose = true;
  //   } else if (
  //     this.cursor.x <= 0 ||
  //     this.cursor.x - 190 >= this.width ||
  //     this.cursor.y <= 0 ||
  //     this.cursor.y - 190 >= this.height
  //   ) {
  //     lose = true;
  //   }
  // }
}

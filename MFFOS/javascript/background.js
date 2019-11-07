class Background {
  constructor($canvas) {
    this.width = $canvas.width;
    this.height = $canvas.height;
    this.ctx = $canvas.ctx;
    this.game = $canvas;
    this.logo = new Image();
    this.logo.src = './images/dodgebloxlogo.png';
    this.bottom = new Image();
    this.bottom.src = './images/bottom.png';
    this.logo.onload;
    this.bottom.onload;
    this.bgImg = new Image(); //Inside NGC 352, or the Bubble Galaxy (Image Credit: ESA/Hubble & NASA and S. Smartt (Queen’s University Belfast) [Acknowledgement: Robert Gendler])
    this.bgImg.src = './images/bubbleUniverse.png';
    this.bgImg.onload;
    this.bgSpeed = 1;
    this.bgUpdate = -200 + this.bgSpeed;
    // this.logo = logo;
    // this.bottom = bottom;
  }

  drawGalaxy() {
    this.ctx.drawImage(
      this.bgImg,
      -100 - this.game.cursor.x / 4,
      0 - this.game.cursor.y / 4,
      1200,
      1200
    );

    if (this.game.counter.currentTime % 300 === 0) this.bgUpdate++;
  }

  drawBorders() {
    this.ctx.strokeStyle = 'Black';

    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, 800, 100);
    this.ctx.fillRect(770, 0, 100, 800);
    this.ctx.fillRect(0, 700, 800, 100);
    this.ctx.fillRect(0, 0, 30, 800);
    this.ctx.drawImage(this.logo, 1, 1);
    this.ctx.drawImage(this.bottom, 1, 700);
  }
}

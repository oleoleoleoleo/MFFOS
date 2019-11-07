class Background {
  constructor($canvas) {
    this.width = $canvas.width;
    this.height = $canvas.height;
    this.ctx = $canvas.ctx;
    this.logo = new Image();
    this.logo.src = './images/dodgebloxlogo.png';
    this.bottom = new Image();
    this.bottom.src = './images/bottom.png';
    this.logo.onload;
    this.bottom.onload;
    // this.logo = logo;
    // this.bottom = bottom;
  }

  drawBorders() {
    this.ctx.strokeStyle = 'Black';
    // this.ctx.lineWidth = 4000;
    // this.ctx.beginPath();
    // this.ctx.moveTo(0, 0);
    // this.ctx.lineTo(this.width, 0);
    // this.ctx.lineTo(this.width, this.height);
    // this.ctx.lineTo(0, this.height);  // cant use this width/height as argument !?!?!
    // this.ctx.closePath();
    // this.ctx.stroke();
    // this.ctx.stroke();
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, 800, 100);
    this.ctx.fillRect(700, 0, 100, 800);
    this.ctx.fillRect(0, 700, 800, 100);
    this.ctx.fillRect(0, 0, 100, 800);
    this.ctx.drawImage(this.logo, 1, 1);
    this.ctx.drawImage(this.bottom, 1, 700);
  }
}

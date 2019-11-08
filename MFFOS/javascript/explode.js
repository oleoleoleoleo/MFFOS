class Explode {
  constructor($canvas, x, y, w, d) {
    this.ctx = $canvas.ctx;
    this.game = $canvas;
    this.x = x;
    this.y = y;
    this.w = w;
    this.d = d;
    this.count = -1;
    // this.i = 0;
    this.explosion = new Image();
    this.explosion.src = './images/explosion.png';
    this.explosion.onload;
    this.explodeArray = [
      [192, 192],
      [128, 192],
      [64, 192],
      [0, 192],
      [192, 128],
      [128, 128],
      [64, 128],
      [0, 128],
      [192, 64],
      [128, 64],
      [64, 64],
      [0, 64],
      [192, 0],
      [128, 0],
      [64, 0],
      [0, 0]
    ];
  }

  update() {
    this.count++;
  }
  draw() {
    if (this.count < 16) {
      this.ctx.drawImage(
        this.explosion,
        this.explodeArray[this.count][0],
        this.explodeArray[this.count][1],
        64,
        64,
        this.x + 10,
        this.y + 10,
        this.w + 20,
        this.w + 20
      );
    }
  }
}

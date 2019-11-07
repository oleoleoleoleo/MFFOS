class Cursor {
  constructor($canvas) {
    this.ctx = $canvas.ctx;
    this.x = undefined;
    this.y = undefined;
    this.w = this.x + 10;
    this.h = this.y + 10;
  }

  drawCursor() {
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.x, this.y, 10, 10);
  }
}

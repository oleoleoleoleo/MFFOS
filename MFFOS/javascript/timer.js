class Chronometer {
  constructor($canvas) {
    this.currentTime = 0;
    this.intervalId = 0;
    this.ctx = $canvas.ctx;
    this.span = document.querySelector('span');
    this.finalTime = 0;
    this.finalScore = myStorage.score;
    this.game = $canvas;
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      this.game.cursor.score += 1 / 4;
    }, 10);
  }

  getMinutes() {
    return parseInt(this.currentTime / 6000);
  }

  getSeconds() {
    return parseInt(this.currentTime / 100) % 60;
  }

  getMillis() {
    let arrayOfDigits = Array.from(String(this.currentTime), Number);
    return arrayOfDigits
      .slice(arrayOfDigits.length - 2, arrayOfDigits.length)
      .join('');
  }

  twoDigitsNumber(x) {
    if (x < 10) {
      let a = '0';
      let c = a + x;
      return c;
    } else {
      return x.toString();
    }
  }

  resetTimer() {
    this.currentTime = 0; // called in game.reset
  }

  printHUD() {
    let seconds = this.twoDigitsNumber(this.getSeconds());
    let millis = this.getMillis();
    let mins = this.twoDigitsNumber(this.getMinutes());
    let currentTime = `${mins} : ${seconds} : ${millis}`;
    this.ctx.fillStyle = 'white';
    this.ctx.font = '30px Arial';
    this.ctx.fillText(`${this.game.cursor.lives}`, 160, 740);
    this.ctx.fillText(`${this.game.cursor.power}`, 420, 740);
    this.ctx.fillText(`${parseInt(this.game.cursor.score)}`, 160, 785);
    if (myStorage.Score !== undefined) {
      this.ctx.fillText(`${myStorage.Score}`, 610, 785);
    } else {
      this.ctx.fillStyle = 'Red';
      this.ctx.fillText(`not yet set`, 540, 785);
    }
  }

  printScore() {
    //end game
    let seconds = this.twoDigitsNumber(this.getSeconds());
    let millis = this.getMillis() - 1;
    let mins = this.twoDigitsNumber(this.getMinutes());
    this.finalTime = `${mins} : ${seconds} : ${millis}`;
    clearInterval(this.intervalId);
    this.ctx.fillStyle = 'red';
    this.ctx.font = '20px Arial';
    this.ctx.fillText(`you've survived ${this.finalTime}`, 150, 680);
  }
}

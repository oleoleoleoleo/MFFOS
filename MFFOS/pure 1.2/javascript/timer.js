class Chronometer {
  constructor($canvas) {
    this.currentTime = 0;
    this.intervalId = 0;
    this.ctx = $canvas.ctx;
    this.span = document.querySelector('span');
    this.finalTime = 0;
    this.finalScore = myStorage.Time;
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
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

  //   timerFinalScore() {
  //     clearInterval(this.intervalId); // dont know where this is called
  //   } //clearInterval called in this printScore

  resetTimer() {
    this.currentTime = 0; // called in game.reset
  }

  //   updateScore() {
  //     let splits = document.getElementById('splits');

  //     let seconds = this.twoDigitsNumber(this.getSeconds());
  //     let minute = this.twoDigitsNumber(this.getMinutes());
  //     // let miliPP = chronometer.twoDigitsNumber(miliUnits).toString();
  //     // mili1 = miliPP[miliPP.length - 2]; //this cheating
  //     // mili2 = miliPP[miliPP.length - 1];

  //     let childToAppend = document.createElement('li');
  //     childToAppend.innerText = `${minute}:${seconds}`;
  //     splits.appendChild(childToAppend);
  //   }

  //   getTimeFormat() {
  //     let seconds = this.twoDigitsNumber(this.getSeconds());
  //     let millis = this.getMillis();
  //     let mins = this.twoDigitsNumber(this.getMinutes());
  //   }
  printTime() {
    let seconds = this.twoDigitsNumber(this.getSeconds());
    let millis = this.getMillis();
    let mins = this.twoDigitsNumber(this.getMinutes());
    let currentTime = `${mins} : ${seconds} : ${millis}`;
    this.ctx.fillStyle = 'white';
    this.ctx.font = "30px 'Londrina Shadow'";
    this.ctx.fillText(`${currentTime}`, 150, 750);
    this.ctx.fillText(`N\A`, 590, 750);
    this.span.innerText = currentTime;
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

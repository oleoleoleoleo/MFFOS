class Scoreboard {
  constructor($canvas) {
    this.storage = myStorage;
    this.ctx = $canvas.ctx;
    this.game = $canvas;
    this.counter = $canvas.counter;
    this.name = undefined;
  }

  addToStorage() {
    // this.storage.setItem(JSON.stringify(this.name), JSON.stringify(this.score));
    // this.storage.setItem('123', '456');
    // this.promptName();
    // let nameToPush = this.name;
    // let timeToPush = JSON.stringify(this.counter.finalTime);
    // let scoreToPush = ` ${timeToPush} - ${nameToPush}`;
    // let arrayToPush = [1, 2, 3, 4, 5, 6, 7];
    // if (
    //   JSON.stringify(this.counter.finalTime) > this.storage.Time ||
    //   this.storage.length === 0
    // ) {
    //   this.storage.setItem('Time', JSON.stringify(this.counter.finalTime));
    // } //this works but replaces the item
  }

  promptName() {
    // this.name = setTimeout(() => prompt('whats ya name boy?'), 100);
  }

  sortHighScoreArray() {
    let newHighs = [...highScoresArray];
    newHighs.push(` ${this.counter.finalTime} this.name:`);
  }
}

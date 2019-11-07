class Scoreboard {
  constructor($canvas) {
    this.storage = myStorage;
    this.ctx = $canvas.ctx;
    this.game = $canvas;
    this.counter = $canvas.counter;
    this.name = undefined;
  }

  addToStorage() {
    if (
      this.game.cursor.score > parseInt(this.storage.Score) ||
      this.storage.length === 0
    ) {
      this.storage.setItem(
        'Score',
        JSON.stringify(parseInt(this.game.cursor.score))
      );
    }
  }

  promptName() {}

  sortHighScoreArray() {
    let newHighs = [...highScoresArray];
    newHighs.push(` ${this.game.cursor.score} this.name:`);
  }
}

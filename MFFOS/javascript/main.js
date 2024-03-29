let $canvas = document.querySelector('canvas');
let ctx = $canvas.getContext('2d');
let cvWidth = $canvas.width;
let cvHeight = $canvas.height;
let myStorage = window.localStorage;
let frameRequest;
let lose = true;
let undefinedTimeout;
const game = new Engine($canvas);
let comet1 = new Image();
comet1.src = './images/comet1.png';
let comet2 = new Image();
comet2.src = './images/comet2.png';
let comet3 = new Image();
comet3.src = './images/comet3.png';
let comet4 = new Image();
comet4.src = './images/comet4.png';
let kitty = new Image();
kitty.src = './images/rainbow_cat.png';
let immuneCount = 0;
let kittyImmune = new Image();
kittyImmune.src = './images/cat_immune.png';
let landing = new Image();
landing.src = './images/landing.png';
let gameover = new Image();
gameover.src = './images/gameover.png';
let immune = false;
let loseALife = false;
let bgMusic = new Audio('./audio/nyan.mp3');
bgMusic.volume = 0.2;
bgMusic.loop = true;
let gameOverSound = new Audio('./audio/GameOver.ogg');
let lionRoar = new Audio('./audio/lion.mp3');
let kittyCry = new Audio('./audio/kittyroar.mp3');
let kittyHurt = new Audio('./audio/Meow.ogg');
let bonusSound = new Audio('./audio/FX326.wav');
let explosion = new Image();
explosion.src = './images/explosion.png';
explosion.onload;
comet1.onload;
comet2.onload;
comet3.onload;
comet4.onload;
kitty.onload;
kittyImmune.onload;
landing.onload;
gameover.onload;
// myStorage.clear();
startScreen();
$canvas.addEventListener('click', () => {
  if (lose === false) {
    game.cursor.roarTrigger();
  } else if (lose === true) {
    if (
      game.cursor.x > 510 &&
      game.cursor.x < 770 &&
      game.cursor.y > 565 &&
      game.cursor.y < 725
    )
      game.reset();
  }
});
$canvas.addEventListener('contextmenu', event => event.preventDefault());
window.addEventListener('mousemove', e => {
  setTimeout(function() {
    game.cursor.tailX = e.pageX - bounds.left - scrollX;
    game.cursor.tailY = e.pageY - bounds.top + 3 - scrollY;
  }, 40);
  setTimeout(function() {
    game.cursor.tailXa = e.pageX - bounds.left - scrollX;
    game.cursor.tailYa = e.pageY - bounds.top + 3 - scrollY;
  }, 70);
  setTimeout(function() {
    game.cursor.tailX2 = e.pageX - bounds.left - scrollX;
    game.cursor.tailY2 = e.pageY - bounds.top + 3 - scrollY;
  }, 100);
  setTimeout(function() {
    game.cursor.tailX2a = e.pageX - bounds.left - scrollX;
    game.cursor.tailY2a = e.pageY - bounds.top + 3 - scrollY;
  }, 125);
  setTimeout(function() {
    game.cursor.tailX3 = e.pageX - bounds.left - scrollX;
    game.cursor.tailY3 = e.pageY - bounds.top + 3 - scrollY;
  }, 150);
  setTimeout(function() {
    game.cursor.tailX3a = e.pageX - bounds.left - scrollX;
    game.cursor.tailY3a = e.pageY - bounds.top + 3 - scrollY;
  }, 175);
  setTimeout(function() {
    game.cursor.tailX4 = e.pageX - bounds.left - scrollX;
    game.cursor.tailY4 = e.pageY - bounds.top + 3 - scrollY;
  }, 200);
  setTimeout(function() {
    game.cursor.tailX4a = e.pageX - bounds.left - scrollX;
    game.cursor.tailY4a = e.pageY - bounds.top + 3 - scrollY;
  }, 225);
  setTimeout(function() {
    game.cursor.tailX4b = e.pageX - bounds.left - scrollX;
    game.cursor.tailY4b = e.pageY - bounds.top + 3 - scrollY;
  }, 250);
  setTimeout(function() {
    game.cursor.tailX4c = e.pageX - bounds.left - scrollX;
    game.cursor.tailY4c = e.pageY - bounds.top + 3 - scrollY;
  }, 275);
  setTimeout(function() {
    game.cursor.tailX4d = e.pageX - bounds.left - scrollX;
    game.cursor.tailY4d = e.pageY - bounds.top + 3 - scrollY;
  }, 300);
  setTimeout(function() {
    game.cursor.tailX4e = e.pageX - bounds.left - scrollX;
    game.cursor.tailY4e = e.pageY - bounds.top + 3 - scrollY;
  }, 325);
  let bounds = e.target.getBoundingClientRect();
  game.cursor.x = e.pageX - bounds.left - scrollX; // is window.scrollX same for Y
  game.cursor.y = e.pageY - bounds.top - scrollY;
});

function startScreen() {
  window.addEventListener('load', () => {
    ctx.drawImage(landing, 0, 0);
    ctx.fillStyle = 'white';
  });
}

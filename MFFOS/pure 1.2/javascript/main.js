//ALL TRIMMED SO LOCAL STORAGE WONT CONFLICT

let $canvas = document.querySelector('canvas');
let ctx = $canvas.getContext('2d');
let cvWidth = $canvas.width;
let cvHeight = $canvas.height;
let myStorage = window.localStorage;
let frameRequest;
let lose = true;
const game = new Engine($canvas);

ctx.fillStyle = 'red';
ctx.font = '32px Arial';
ctx.fillText('CLick to STArT', 300, 400);
ctx.fillStyle = 'black'; //-- - -- - note rethink colors
ctx.font = ' 22px Arial';
ctx.fillText("(don't touch the blocks)", 400, 600);
ctx.fillText('(or the borders)', 450, 650);

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, 800, 100);
ctx.fillRect(700, 0, 100, 800);
ctx.fillRect(0, 700, 800, 100);
ctx.fillRect(0, 0, 100, 800);

$canvas.addEventListener('click', () => {
  if (lose === false) {
    console.log("leo you're so sexy");
  } else if (lose === true) {
    game.reset();
  }
});
// myStorage.clear();
$canvas.addEventListener('keydown', event => {
  switch (event.keyCode) {
    case 82:
      lose = true; // this is NOT WORKING
      break;
    case 32:
      game.reset();
      break;
  }
});

// window.addEventListener('load', () => {
//   let logo = new Image();
//   logo.src = 'images/dodgebloxlogo.png';
//   let bottom = new Image();
//   bottom.src = 'images/bottom.png';
// });

window.addEventListener('mousemove', e => {
  //use jquery to normalize offset
  // offsetX = e.offsetX;
  // offsetY = e.offsetY; // i think this would work but it updates every time
  // game.cursor.x = e.clientX
  // game.cursor.y = e.clientY
  let bounds = e.target.getBoundingClientRect();
  game.cursor.x = e.pageX - bounds.left - scrollX; // is window.scrollX same for Y
  game.cursor.y = e.pageY - bounds.top - scrollY;
  // game.cursor.x = e.clientX;
  // game.cursor.y = e.clientY;
});

function randomX() {
  return Math.floor(Math.random() * 600 + 200);
}

function randomY() {
  return Math.floor(Math.random() * 600 + 200);
}

function randomSize() {
  return Math.floor(Math.random() * 130);
}

// function randomSpeed() {
//   if ( Math.round(Math.random()) === 0 ) {
//     return -1 } else {return 1}
// }

// function randomSpeed() {
//   return Math.round(Math.random()) === 0 ? -1 : 1; // same as above -
// }

// function randomSpeed() {
// let xRandomto1 = Math.random()
// let yRandomto1 = (1 - x.randomTo1) // trying to get the y speed and x speed to add to 1 !!! ASK ABOUT THIS ONE
// return xRandomto1

// }

function randomSpeed() {
  //not being used
  return Math.random() * 4;
}

function randomDirection() {
  let s = Math.random() * 2 - 1;
  if (s > 0) {
    return s + 1;
  } else return s + -1;
}

function randomMaxSpeed() {
  return Math.random() * 40;
}

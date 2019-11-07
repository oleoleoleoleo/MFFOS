function randomX() {
  return Math.floor(Math.random() * 600 + 200);
}

function randomY() {
  return Math.floor(Math.random() * 600 + 200);
}

function randomSize() {
  return Math.floor(Math.random() * 100) + 50;
}

function randomComet() {
  return Math.round(Math.random() * 3);
}

function randomXFromOutside() {
  let x = Math.floor(Math.random() * 600);
  if (x < 300) {
    return x - 300;
  } else return x + 300;
}

function randomYFromOutside() {
  let y = Math.floor(Math.random() * 600);
  if (y < 300) {
    return y - 300;
  } else return y + 300;
}

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

function randomBonus() {
  let x = Math.round(Math.random());
  if (x === 0) {
    return 'life';
  } else return 'power';
}

function randomBonusPos() {
  let x = Math.round(Math.random() * 100);
  if (x > 50) {
    return x + 800;
  } else if (x < 50) return x - 800;
}

function randomRotation() {
  let x = Math.round(Math.random());
  if (x < 0.5) {
    return -1;
  } else return 1;
}

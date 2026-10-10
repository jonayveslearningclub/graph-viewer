function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop();
}

function draw() {
  background(255);

  let questionText = "1. Find the midpoint of segment AB where A = (2, 6) and B = (8, 2).";
  textSize(15);
  fill(0);
  textAlign(LEFT, TOP);
  text(questionText, 20, 15);

  let margin = 60;
  let topOffset = 60;
  let gridSize = min(windowWidth, windowHeight - topOffset) - margin * 2;
  let originX = margin + gridSize / 2;
  let originY = topOffset + margin + gridSize / 2;
  let step = gridSize / 20;

  stroke(220);
  strokeWeight(1);
  for (let i = -10; i <= 10; i++) {
    let x = originX + i * step;
    let y = originY + i * step;
    line(x, originY - 10 * step, x, originY + 10 * step);
    line(originX - 10 * step, y, originX + 10 * step, y);
  }

  stroke(0);
  strokeWeight(2);
  line(originX - 10 * step, originY, originX + 10 * step, originY);
  line(originX, originY - 10 * step, originX, originY + 10 * step);

  textSize(11);
  fill(0);
  noStroke();
  textAlign(CENTER, TOP);
  for (let i = -10; i <= 10; i++) {
    if (i === 0) continue;
    let x = originX + i * step;
    let labelY = originY + 5;
    text(i, x, labelY);
  }
  textAlign(RIGHT, CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i === 0) continue;
    let y = originY - i * step;
    text(i, originX - 5, y);
  }

  let ax = 2, ay = 6;
  let bx = 8, by = 2;

  let pAx = originX + ax * step;
  let pAy = originY - ay * step;
  let pBx = originX + bx * step;
  let pBy = originY - by * step;

  stroke(30, 100, 200);
  strokeWeight(2);
  line(pAx, pAy, pBx, pBy);

  fill(200, 50, 50);
  noStroke();
  ellipse(pAx, pAy, 10, 10);
  ellipse(pBx, pBy, 10, 10);

  textSize(13);
  fill(0);
  textAlign(LEFT, CENTER);
  text("A (2, 6)", pAx + 8, pAy);
  text("B (8, 2)", pBx + 8, pBy);

  textAlign(CENTER, TOP);
  textSize(13);
  fill(80);
  text("Find the midpoint M of AB.", originX, originY + 10 * step + 20);

  noLoop();
}
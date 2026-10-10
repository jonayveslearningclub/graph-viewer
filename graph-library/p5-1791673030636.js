function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop();
}

function draw() {
  background(255);

  let questionText = "3. Segment CD has endpoints C = (-6, 4) and D = (4, -2). Find the midpoint of CD.";
  textSize(15);
  fill(0);
  noStroke();
  textAlign(LEFT, TOP);
  text(questionText, 20, 12);

  let margin = 65;
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
    text(i, originX + i * step, originY + 5);
  }
  textAlign(RIGHT, CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i === 0) continue;
    text(i, originX - 5, originY - i * step);
  }

  let cx = -6, cy = 4;
  let dx = 4, dy = -2;

  let pCx = originX + cx * step;
  let pCy = originY - cy * step;
  let pDx = originX + dx * step;
  let pDy = originY - dy * step;

  stroke(50, 160, 80);
  strokeWeight(2);
  line(pCx, pCy, pDx, pDy);

  fill(200, 50, 50);
  noStroke();
  ellipse(pCx, pCy, 10, 10);
  ellipse(pDx, pDy, 10, 10);

  textSize(13);
  fill(0);
  textAlign(RIGHT, CENTER);
  text("C (-6, 4)", pCx - 8, pCy);
  textAlign(LEFT, CENTER);
  text("D (4, -2)", pDx + 8, pDy);

  textSize(13);
  fill(60, 60, 180);
  textAlign(CENTER, BOTTOM);
  text("Find the midpoint M of segment CD.", originX, originY + 10 * step + 20);

  noLoop();
}
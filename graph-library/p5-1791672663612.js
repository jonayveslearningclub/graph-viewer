function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop();
}

function draw() {
  background(255);

  let q = "3. Segment CD has endpoints C = (-6, 4) and D = (4, -2). Find the midpoint M of CD.";
  textSize(15);
  fill(0);
  noStroke();
  textAlign(LEFT);
  textWrap(WORD);
  text(q, 20, 28, windowWidth - 40, 50);

  let margin = 65;
  let topOffset = 75;
  let gridSize = min(windowWidth, windowHeight - topOffset) - margin * 2;
  let originX = margin + gridSize / 2;
  let originY = topOffset + margin + gridSize / 2;
  let step = gridSize / 20;

  stroke(220);
  strokeWeight(1);
  for (let i = -10; i <= 10; i++) {
    line(originX + i * step, originY - 10 * step, originX + i * step, originY + 10 * step);
    line(originX - 10 * step, originY + i * step, originX + 10 * step, originY + i * step);
  }

  stroke(0);
  strokeWeight(2);
  line(originX - 10 * step, originY, originX + 10 * step, originY);
  line(originX, originY - 10 * step, originX, originY + 10 * step);

  fill(0);
  noStroke();
  textSize(11);
  textAlign(CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i === 0) continue;
    text(i, originX + i * step, originY + 15);
    textAlign(RIGHT);
    text(i, originX - 6, originY - i * step + 4);
    textAlign(CENTER);
  }

  let cx = -6, cy = 4;
  let dx = 4, dy = -2;

  let pcx = originX + cx * step, pcy = originY - cy * step;
  let pdx = originX + dx * step, pdy = originY - dy * step;

  stroke(0, 150, 0);
  strokeWeight(2);
  line(pcx, pcy, pdx, pdy);

  fill(200, 0, 0);
  noStroke();
  ellipse(pcx, pcy, 10, 10);
  ellipse(pdx, pdy, 10, 10);

  fill(0);
  textSize(13);
  textAlign(RIGHT);
  text("C (-6, 4)", pcx - 8, pcy - 8);
  textAlign(LEFT);
  text("D (4, -2)", pdx + 8, pdy - 8);

  fill(80);
  textSize(12);
  textAlign(CENTER);
  text("Use the midpoint formula: M = ((x\u2081 + x\u2082) / 2 , (y\u2081 + y\u2082) / 2)", originX, originY + 10 * step + 28);

  noLoop();
}
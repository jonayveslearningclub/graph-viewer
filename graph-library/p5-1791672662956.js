function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop();
}

function draw() {
  background(255);

  let q = "2. Triangle PQR has vertices P = (1, 8), Q = (7, 8), R = (4, 2). Find the median from vertex R to side PQ.";
  textSize(14);
  fill(0);
  noStroke();
  textAlign(LEFT);
  textWrap(WORD);
  text(q, 20, 25, windowWidth - 40, 50);

  let margin = 65;
  let topOffset = 80;
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

  let px = 1, py = 8;
  let qx = 7, qy = 8;
  let rx = 4, ry = 2;

  let ppx = originX + px * step, ppy = originY - py * step;
  let pqx = originX + qx * step, pqy = originY - qy * step;
  let prx = originX + rx * step, pry = originY - ry * step;

  stroke(0, 100, 200);
  strokeWeight(2);
  line(ppx, ppy, pqx, pqy);
  line(pqx, pqy, prx, pry);
  line(prx, pry, ppx, ppy);

  fill(200, 0, 0);
  noStroke();
  ellipse(ppx, ppy, 10, 10);
  ellipse(pqx, pqy, 10, 10);
  ellipse(prx, pry, 10, 10);

  fill(0);
  textSize(13);
  textAlign(LEFT);
  text("P (1, 8)", ppx - 40, ppy - 10);
  text("Q (7, 8)", pqx + 6, pqy - 10);
  text("R (4, 2)", prx + 6, pry + 14);

  fill(80);
  textSize(12);
  textAlign(CENTER);
  text("Find the midpoint of PQ, then find the median from R to that midpoint.", originX, originY + 10 * step + 28);

  noLoop();
}
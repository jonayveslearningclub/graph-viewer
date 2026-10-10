function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop();
}

function draw() {
  background(255);

  let questionText = "2. Triangle PQR has vertices P = (1, 8), Q = (7, 8), and R = (4, 2). Find the median from vertex R to side PQ.";
  textSize(14);
  fill(0);
  noStroke();
  textAlign(LEFT, TOP);
  text(questionText, 20, 10);

  let margin = 65;
  let topOffset = 65;
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

  let px = 1, py = 8;
  let qx = 7, qy = 8;
  let rx = 4, ry = 2;

  let pPx = originX + px * step;
  let pPy = originY - py * step;
  let pQx = originX + qx * step;
  let pQy = originY - qy * step;
  let pRx = originX + rx * step;
  let pRy = originY - ry * step;

  stroke(30, 120, 200);
  strokeWeight(2);
  line(pPx, pPy, pQx, pQy);
  line(pQx, pQy, pRx, pRy);
  line(pRx, pRy, pPx, pPy);

  fill(200, 50, 50);
  noStroke();
  ellipse(pPx, pPy, 10, 10);
  ellipse(pQx, pQy, 10, 10);
  ellipse(pRx, pRy, 10, 10);

  textSize(13);
  fill(0);
  textAlign(RIGHT, CENTER);
  text("P (1, 8)", pPx - 8, pPy);
  textAlign(LEFT, CENTER);
  text("Q (7, 8)", pQx + 8, pQy);
  textAlign(CENTER, TOP);
  text("R (4, 2)", pRx, pRy + 8);

  textSize(13);
  fill(60, 60, 200);
  textAlign(CENTER, BOTTOM);
  text("Find the midpoint of PQ, then draw the median from R.", originX, originY + 10 * step + 20);

  noLoop();
}
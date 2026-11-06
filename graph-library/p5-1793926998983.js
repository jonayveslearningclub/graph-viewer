function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  drawScene();
}

function drawScene() {
  let margin = 60;
  let topOffset = 110;
  let gridSize = min(windowWidth, windowHeight) - topOffset - margin;
  let cols = 20;
  let step = gridSize / cols;
  let originX = margin + gridSize / 2;
  let originY = topOffset + gridSize / 2;

  textSize(15);
  textAlign(LEFT, TOP);
  fill(0);
  noStroke();
  text("Triangle PQR has vertices at P(-5, 2), Q(-1, 2), and R(-3, 6).", 10, 10);
  text("Translate the triangle 7 units right and 4 units down.", 10, 32);
  text("Plot triangle PQR and label the new vertices P', Q', R'.", 10, 54);
  text("What are the coordinates of P', Q', and R'?", 10, 76);

  stroke(220);
  strokeWeight(1);
  for (let i = 0; i <= cols; i++) {
    let x = margin + i * step;
    let y = topOffset + i * step;
    line(x, topOffset, x, topOffset + gridSize);
    line(margin, y, margin + gridSize, y);
  }

  stroke(0);
  strokeWeight(2);
  line(originX, topOffset, originX, topOffset + gridSize);
  line(margin, originY, margin + gridSize, originY);

  strokeWeight(1);
  textSize(11);
  fill(80);
  textAlign(CENTER, CENTER);
  for (let v = -10; v <= 10; v++) {
    let px = originX + v * step;
    let py = originY - v * step;
    if (v !== 0) {
      text(v, px, originY + 14);
      text(v, originX - 18, py);
    }
  }

  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(12);
  text("0", originX - 14, originY + 14);

  let px = originX + (-5) * step;
  let py = originY - 2 * step;
  let qx = originX + (-1) * step;
  let qy = originY - 2 * step;
  let rx = originX + (-3) * step;
  let ry = originY - 6 * step;

  stroke(60, 160, 60);
  strokeWeight(2);
  noFill();
  triangle(px, py, qx, qy, rx, ry);

  fill(60, 160, 60);
  noStroke();
  ellipse(px, py, 9, 9);
  ellipse(qx, qy, 9, 9);
  ellipse(rx, ry, 9, 9);

  textSize(13);
  fill(30, 130, 30);
  textAlign(RIGHT, CENTER);
  text("P(-5,2)", px - 5, py);
  textAlign(LEFT, CENTER);
  text("Q(-1,2)", qx + 5, qy);
  textAlign(CENTER, TOP);
  text("R(-3,6)", rx, ry - 14);

  let ppx = originX + 2 * step;
  let ppy = originY - (-2) * step;
  let pqx = originX + 6 * step;
  let pqy = originY - (-2) * step;
  let prx = originX + 4 * step;
  let pry = originY - 2 * step;

  stroke(200, 80, 200);
  strokeWeight(2);
  noFill();
  triangle(ppx, ppy, pqx, pqy, prx, pry);

  fill(200, 80, 200);
  noStroke();
  ellipse(ppx, ppy, 9, 9);
  ellipse(pqx, pqy, 9, 9);
  ellipse(prx, pry, 9, 9);

  textSize(13);
  fill(160, 40, 160);
  textAlign(LEFT, CENTER);
  text("P'(?)", ppx + 6, ppy);
  text("Q'(?)", pqx + 6, pqy);
  textAlign(CENTER, TOP);
  text("R'(?)", prx, pry - 14);
}

function draw() {
  noLoop();
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  drawScene();
}

function drawScene() {
  let margin = 60;
  let topOffset = 100;
  let gridSize = min(windowWidth, windowHeight) - topOffset - margin;
  let cols = 20;
  let step = gridSize / cols;
  let originX = margin + gridSize / 2;
  let originY = topOffset + gridSize / 2;

  textSize(15);
  textAlign(LEFT, TOP);
  fill(0);
  noStroke();
  text("Plot the point A(3, 7) on the coordinate plane.", 10, 10);
  text("Then reflect it across the y-axis to find point A'.", 10, 32);
  text("What are the coordinates of A'?", 10, 54);

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

  let ax = originX + 3 * step;
  let ay = originY - 7 * step;

  fill(220, 50, 50);
  noStroke();
  ellipse(ax, ay, 10, 10);
  textAlign(LEFT, CENTER);
  textSize(13);
  fill(220, 50, 50);
  text("A(3, 7)", ax + 7, ay);

  fill(180);
  noStroke();
  textSize(13);
  textAlign(LEFT, CENTER);
  text("A'( ? )", originX - 3 * step + 7, ay);
  ellipse(originX - 3 * step, ay, 10, 10);

  fill(0, 0, 200);
  noStroke();
  ellipse(originX - 3 * step, ay, 10, 10);
  fill(0, 0, 200);
  text("A'( ? )", originX - 3 * step + 7, ay - 14);
}

function draw() {
  noLoop();
}
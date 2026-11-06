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
  text("A line passes through points B(2, 1) and C(6, 9).", 10, 10);
  text("Plot both points and draw the line.", 10, 32);
  text("What is the slope of the line from B to C?", 10, 54);
  text("Use: slope = (y&#8322; - y&#8321;) / (x&#8322; - x&#8321;)", 10, 76);

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

  let bx = originX + 2 * step;
  let by = originY - 1 * step;
  let cx = originX + 6 * step;
  let cy = originY - 9 * step;

  stroke(60, 120, 220);
  strokeWeight(2);
  line(bx, by, cx, cy);

  fill(220, 80, 50);
  noStroke();
  ellipse(bx, by, 10, 10);
  ellipse(cx, cy, 10, 10);

  textSize(13);
  fill(220, 80, 50);
  textAlign(LEFT, CENTER);
  text("B(2, 1)", bx + 8, by);
  text("C(6, 9)", cx + 8, cy);
}

function draw() {
  noLoop();
}
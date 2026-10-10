function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop();
}

function draw() {
  background(255);

  // Question text
  fill(0);
  textSize(15);
  textAlign(LEFT, TOP);
  text("Plot the following points and connect them in order to form a quadrilateral.", 10, 10);
  text("W = (-4, 6), X = (5, 6), Y = (5, -3), Z = (-4, -3)", 10, 30);
  text("What type of quadrilateral is formed? What is its area?", 10, 50);

  // Grid setup
  let margin = 80;
  let gridSize = min(windowWidth, windowHeight) - margin * 2;
  let step = gridSize / 20;
  let originX = windowWidth / 2;
  let originY = windowHeight / 2 + 30;

  // Draw grid
  stroke(220);
  strokeWeight(1);
  for (let i = -10; i <= 10; i++) {
    line(originX + i * step, originY - 10 * step, originX + i * step, originY + 10 * step);
    line(originX - 10 * step, originY + i * step, originX + 10 * step, originY + i * step);
  }

  // Axes
  stroke(0);
  strokeWeight(2);
  line(originX - 10 * step, originY, originX + 10 * step, originY);
  line(originX, originY - 10 * step, originX, originY + 10 * step);

  // Axis labels
  fill(0);
  noStroke();
  textSize(11);
  textAlign(CENTER, TOP);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, originX + i * step, originY + 4);
    }
  }
  textAlign(RIGHT, CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, originX - 4, originY - i * step);
    }
  }

  // Axis name labels
  textSize(13);
  textAlign(CENTER, TOP);
  text("x", originX + 10 * step + 15, originY - 6);
  textAlign(LEFT, CENTER);
  text("y", originX + 4, originY - 10 * step - 15);

  // Points
  let pts = [
    [-4, 6],
    [5, 6],
    [5, -3],
    [-4, -3]
  ];
  let ptLabels = ["W(-4,6)", "X(5,6)", "Y(5,-3)", "Z(-4,-3)"];

  function toCanvas(coord) {
    return [originX + coord[0] * step, originY - coord[1] * step];
  }

  let canvasPts = pts.map(toCanvas);

  // Draw quadrilateral
  stroke(180, 0, 180);
  strokeWeight(2);
  fill(220, 180, 255, 100);
  beginShape();
  for (let p of canvasPts) {
    vertex(p[0], p[1]);
  }
  endShape(CLOSE);

  // Draw points and labels
  fill(120, 0, 160);
  noStroke();
  for (let i = 0; i < canvasPts.length; i++) {
    ellipse(canvasPts[i][0], canvasPts[i][1], 8, 8);
    textSize(13);
    textAlign(LEFT, CENTER);
    let lx = canvasPts[i][0] + 7;
    let ly = canvasPts[i][1] - 7;
    text(ptLabels[i], lx, ly);
  }

  noLoop();
}
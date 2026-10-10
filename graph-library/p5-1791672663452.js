function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop();
}

function draw() {
  background(255);

  let questionText = "1. Triangle ABC has vertices at A(2, 3), B(6, 3), and C(4, 7).";
  let questionText2 = "Reflect triangle ABC across the y-axis. What are the new coordinates?";

  textSize(15);
  fill(0);
  noStroke();
  text(questionText, 20, 30);
  text(questionText2, 20, 52);

  let margin = 60;
  let topMargin = 80;
  let gridSize = min(windowWidth, windowHeight - topMargin) - margin * 2;
  let step = gridSize / 20;
  let originX = windowWidth / 2;
  let originY = topMargin + gridSize / 2;

  // Grid lines
  stroke(220);
  strokeWeight(1);
  for (let i = -10; i <= 10; i++) {
    line(originX + i * step, topMargin, originX + i * step, topMargin + gridSize);
    line(originX - gridSize / 2, originY + i * step, originX + gridSize / 2, originY + i * step);
  }

  // Axes
  stroke(0);
  strokeWeight(2);
  line(originX - gridSize / 2, originY, originX + gridSize / 2, originY);
  line(originX, topMargin, originX, topMargin + gridSize);

  // Axis labels
  textSize(11);
  fill(0);
  noStroke();
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, originX + i * step - 6, originY + 18);
      text(i, originX - 28, originY - i * step + 4);
    }
  }
  text("0", originX - 14, originY + 16);

  // Triangle ABC vertices
  let ax = 2, ay = 3;
  let bx = 6, by = 3;
  let cx = 4, cy = 7;

  let pAx = originX + ax * step;
  let pAy = originY - ay * step;
  let pBx = originX + bx * step;
  let pBy = originY - by * step;
  let pCx = originX + cx * step;
  let pCy = originY - cy * step;

  // Draw triangle ABC
  stroke(0, 0, 200);
  strokeWeight(2);
  noFill();
  triangle(pAx, pAy, pBx, pBy, pCx, pCy);

  // Points
  fill(0, 0, 200);
  noStroke();
  ellipse(pAx, pAy, 8, 8);
  ellipse(pBx, pBy, 8, 8);
  ellipse(pCx, pCy, 8, 8);

  // Labels
  textSize(13);
  fill(0, 0, 200);
  text("A(2,3)", pAx - 40, pAy + 16);
  text("B(6,3)", pBx + 5, pBy + 16);
  text("C(4,7)", pCx + 5, pCy - 8);

  noLoop();
}
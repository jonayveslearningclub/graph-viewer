function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop();
}

function draw() {
  background(255);

  let margin = 60;
  let questionHeight = 80;
  let gridSize = min(windowWidth, windowHeight - questionHeight) - margin * 2;
  let step = gridSize / 20;
  let originX = windowWidth / 2;
  let originY = questionHeight + margin + gridSize / 2;

  // Question text
  fill(0);
  noStroke();
  textSize(15);
  textAlign(LEFT, TOP);
  text("Line p passes through points (0, 3) and (4, 7).", 20, 12);
  text("Line q passes through points (0, -2) and (4, 2). Are lines p and q parallel? Explain.", 20, 38);

  // Grid
  stroke(220);
  strokeWeight(1);
  for (let i = -10; i <= 10; i++) {
    let x = originX + i * step;
    let y = originY + i * step;
    line(x, originY - 10 * step, x, originY + 10 * step);
    line(originX - 10 * step, y, originX + 10 * step, y);
  }

  // Axes
  stroke(0);
  strokeWeight(2);
  line(originX - 10 * step, originY, originX + 10 * step, originY);
  line(originX, originY - 10 * step, originX, originY + 10 * step);

  // Axis labels
  textSize(11);
  fill(0);
  noStroke();
  textAlign(CENTER, TOP);
  for (let i = -10; i <= 10; i++) {
    if (i === 0) continue;
    let x = originX + i * step;
    text(i, x, originY + 4);
  }
  textAlign(RIGHT, CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i === 0) continue;
    let y = originY - i * step;
    text(i, originX - 4, y);
  }

  // Axis arrows
  stroke(0);
  strokeWeight(2);
  fill(0);
  triangle(originX + 10 * step, originY, originX + 10 * step - 8, originY - 4, originX + 10 * step - 8, originY + 4);
  triangle(originX, originY - 10 * step, originX - 4, originY - 10 * step + 8, originX + 4, originY - 10 * step + 8);

  // Line p: through (0,3) and (4,7)
  // slope = 1, extended across grid
  // At x=-10: y=-10+3=-7, at x=10: y=10+3=13 -> clamp to 10
  // y = x + 3
  let pX1 = -10, pY1 = -10 + 3; // y = -7
  let pX2 = 7, pY2 = 7 + 3;    // y = 10

  stroke(30, 100, 220);
  strokeWeight(2.5);
  line(
    originX + pX1 * step, originY - pY1 * step,
    originX + pX2 * step, originY - pY2 * step
  );

  // Points for line p
  fill(30, 100, 220);
  noStroke();
  ellipse(originX + 0 * step, originY - 3 * step, 8, 8);
  ellipse(originX + 4 * step, originY - 7 * step, 8, 8);

  // Labels for line p points
  textSize(12);
  textAlign(LEFT, BOTTOM);
  fill(30, 100, 220);
  text("(0, 3)", originX + 0 * step + 5, originY - 3 * step - 3);
  text("(4, 7)", originX + 4 * step + 5, originY - 7 * step - 3);

  // Line label p
  textSize(14);
  textAlign(LEFT, CENTER);
  text("p", originX + pX2 * step + 5, originY - pY2 * step);

  // Line q: through (0,-2) and (4,2)
  // y = x - 2
  let qX1 = -8, qY1 = -8 - 2; // y = -10
  let qX2 = 10, qY2 = 10 - 2; // y = 8

  stroke(220, 60, 60);
  strokeWeight(2.5);
  line(
    originX + qX1 * step, originY - qY1 * step,
    originX + qX2 * step, originY - qY2 * step
  );

  // Points for line q
  fill(220, 60, 60);
  noStroke();
  ellipse(originX + 0 * step, originY - (-2) * step, 8, 8);
  ellipse(originX + 4 * step, originY - 2 * step, 8, 8);

  // Labels for line q points
  textSize(12);
  textAlign(LEFT, TOP);
  fill(220, 60, 60);
  text("(0, -2)", originX + 0 * step + 5, originY - (-2) * step + 3);
  text("(4, 2)", originX + 4 * step + 5, originY - 2 * step + 3);

  // Line label q
  textSize(14);
  textAlign(LEFT, CENTER);
  fill(220, 60, 60);
  text("q", originX
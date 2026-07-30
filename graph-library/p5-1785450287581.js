function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop();
}

function draw() {
  background(255);

  textAlign(LEFT, TOP);
  textSize(16);
  fill(0);
  noStroke();
  text("A line passes through the points (1, 2) and (4, 8).", 20, 14);
  text("What is the slope of the line? Use the graph to help find your answer.", 20, 36);

  let margin = 60;
  let graphSize = min(width, height) * 0.65;
  let originX = width / 2;
  let originY = height * 0.58;
  let step = graphSize / 20;

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
  fill(80);
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
  textAlign(CENTER, CENTER);
  fill(0);
  textSize(13);
  text("x", originX + 10 * step + 16, originY);
  text("y", originX, originY - 10 * step - 16);

  // Plot the line through (1,2) and (4,8) extended to fit graph
  // Slope = (8-2)/(4-1) = 6/3 = 2, y-intercept = 2 - 2*1 = 0
  // y = 2x
  stroke(180, 60, 200);
  strokeWeight(2);
  let x1Line = -4, y1Line = 2 * -4;
  let x2Line = 5, y2Line = 2 * 5;
  line(
    originX + x1Line * step, originY - y1Line * step,
    originX + x2Line * step, originY - y2Line * step
  );

  // Points
  let pts = [[1, 2], [4, 8]];
  let ptLabels = ["A(1, 2)", "B(4, 8)"];
  let offsetsX = [8, 8];
  let offsetsY = [-6, -18];
  for (let i = 0; i < pts.length; i++) {
    let px = originX + pts[i][0] * step;
    let py = originY - pts[i][1] * step;
    fill(180, 60, 200);
    noStroke();
    ellipse(px, py, 9, 9);
    fill(0);
    textSize(13);
    textAlign(LEFT, TOP);
    text(ptLabels[i], px + offsetsX[i], py + offsetsY[i]);
  }

  // Hint text
  fill(100);
  noStroke();
  textSize(13);
  textAlign(LEFT, TOP);
  text("Hint: slope = rise / run = (y\u2082 - y\u2081) / (x\u2082 - x\u2081)", 20, height - 50);

  noLoop();
}
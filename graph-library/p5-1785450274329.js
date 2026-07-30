function setup() {
  createCanvas(800, 600);
  background(255);

  let margin = 60;
  let graphSize = 440;
  let originX = margin + graphSize / 2;
  let originY = 80 + graphSize / 2;
  let step = graphSize / 20;

  textFont('Arial');

  // Question text
  fill(0);
  textSize(15);
  textAlign(LEFT, TOP);
  text("Graph the linear equation: y = 2x + 3", 20, 18);
  text("Plot at least 3 points and draw the line on the coordinate plane.", 20, 40);

  // Grid
  stroke(210);
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
    text(i, x, originY + 5);
  }
  textAlign(RIGHT, CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i === 0) continue;
    let y = originY - i * step;
    text(i, originX - 5, y);
  }

  // Axis arrows
  stroke(0);
  strokeWeight(2);
  fill(0);
  // x arrow
  triangle(originX + 10 * step + 8, originY, originX + 10 * step, originY - 4, originX + 10 * step, originY + 4);
  // y arrow
  triangle(originX, originY - 10 * step - 8, originX - 4, originY - 10 * step, originX + 4, originY - 10 * step);

  // Axis name labels
  noStroke();
  fill(0);
  textSize(13);
  textAlign(LEFT, CENTER);
  text("x", originX + 10 * step + 10, originY);
  textAlign(CENTER, BASELINE);
  text("y", originX, originY - 10 * step - 14);

  // Origin label
  textSize(11);
  textAlign(RIGHT, TOP);
  text("0", originX - 3, originY + 3);

  noLoop();
}

function draw() {
  noLoop();
}
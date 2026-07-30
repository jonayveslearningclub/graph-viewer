function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop();
}

function draw() {
  background(255);

  textFont('Arial');
  textSize(15);
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  text("3. A line passes through the points (1, 2) and (4, 8).", width / 2, 22);
  text("Plot both points, draw the line, and find the slope using rise over run.", width / 2, 44);

  let margin = 60;
  let graphSize = min(width, height) - 180;
  let originX = width / 2;
  let originY = height / 2 + 30;
  let step = graphSize / 20;

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

  fill(0);
  noStroke();
  textSize(12);
  textAlign(CENTER, CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i === 0) continue;
    let x = originX + i * step;
    let y = originY + i * step;
    text(i, x, originY + 16);
    text(-i, originX - 16, y);
  }
  text("0", originX - 14, originY + 14);

  function toCanvas(px, py) {
    return [originX + px * step, originY - py * step];
  }

  let [x1c, y1c] = toCanvas(1, 2);
  let [x2c, y2c] = toCanvas(4, 8);

  let tStart = toCanvas(-2, -4);
  let tEnd = toCanvas(10, 20);
  let clampedStartX = max(originX - 10 * step, tStart[0]);
  let clampedEndX = min(originX + 10 * step, tEnd[0]);

  function lineY(px) {
    return originY - ((px - originX) / step * 2 + 2) * step;
  }

  stroke(180, 60, 200);
  strokeWeight(2);
  line(originX - 10 * step, lineY(originX - 10 * step), originX + 10 * step, lineY(originX + 10 * step));

  fill(30, 120, 220);
  noStroke();
  ellipse(x1c, y1c, 10, 10);
  fill(200, 50, 50);
  ellipse(x2c, y2c, 10, 10);

  fill(30, 120, 220);
  textSize(13);
  textAlign(LEFT, CENTER);
  text("(1, 2)", x1c + 8, y1c - 10);

  fill(200, 50, 50);
  textAlign(LEFT, CENTER);
  text("(4, 8)", x2c + 8, y2c - 10);

  fill(80);
  textSize(13);
  textAlign(LEFT, CENTER);
  text("Slope = rise / run = ?", originX - 9 * step, originY + 8 * step - 10);

  noLoop();
}
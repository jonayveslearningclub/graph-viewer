function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop();
}

function draw() {
  background(255);

  let questionText = "Plot triangle ABC with A(2, 3), B(6, 3), and C(6, 7). Then reflect it across the y-axis and label the new triangle A'B'C'.";
  textSize(15);
  fill(0);
  textAlign(LEFT, TOP);

  let margin = 20;
  let maxWidth = width - margin * 2;
  let words = questionText.split(' ');
  let line = '';
  let lineY = 20;
  let lineHeight = 20;

  for (let i = 0; i < words.length; i++) {
    let testLine = line + words[i] + ' ';
    let testWidth = textWidth(testLine);
    if (testWidth > maxWidth && line !== '') {
      text(line, margin, lineY);
      line = words[i] + ' ';
      lineY += lineHeight;
    } else {
      line = testLine;
    }
  }
  text(line, margin, lineY);
  let questionBottom = lineY + lineHeight + 10;

  let gridSize = min(width, height - questionBottom) * 0.82;
  let cellSize = gridSize / 20;
  let originX = width / 2;
  let originY = questionBottom + (height - questionBottom) / 2;

  // Grid lines
  stroke(220);
  strokeWeight(1);
  for (let i = -10; i <= 10; i++) {
    let x = originX + i * cellSize;
    let y = originY + i * cellSize;
    line(x, originY - 10 * cellSize, x, originY + 10 * cellSize);
    line(originX - 10 * cellSize, y, originX + 10 * cellSize, y);
  }

  // Axes
  stroke(0);
  strokeWeight(2);
  line(originX - 10 * cellSize, originY, originX + 10 * cellSize, originY);
  line(originX, originY - 10 * cellSize, originX, originY + 10 * cellSize);

  // Axis labels
  textSize(11);
  fill(80);
  noStroke();
  textAlign(CENTER, TOP);
  for (let i = -10; i <= 10; i++) {
    if (i === 0) continue;
    let x = originX + i * cellSize;
    text(i, x, originY + 4);
  }
  textAlign(RIGHT, CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i === 0) continue;
    let y = originY - i * cellSize;
    text(i, originX - 4, y);
  }

  // Axis name labels
  textAlign(CENTER, CENTER);
  fill(0);
  textSize(13);
  text("x", originX + 10 * cellSize + 15, originY);
  text("y", originX, originY - 10 * cellSize - 15);

  // Triangle ABC
  let ax = originX + 2 * cellSize;
  let ay = originY - 3 * cellSize;
  let bx = originX + 6 * cellSize;
  let by = originY - 3 * cellSize;
  let cx = originX + 6 * cellSize;
  let cy = originY - 7 * cellSize;

  stroke(0, 100, 220);
  strokeWeight(2.5);
  noFill();
  beginShape();
  vertex(ax, ay);
  vertex(bx, by);
  vertex(cx, cy);
  endShape(CLOSE);

  fill(0, 100, 220);
  noStroke();
  textSize(13);
  textAlign(LEFT, CENTER);
  text("A(2,3)", ax + 5, ay - 8);
  text("B(6,3)", bx + 5, by + 8);
  text("C(6,7)", cx + 5, cy - 8);

  circle(ax, ay, 7);
  circle(bx, by, 7);
  circle(cx, cy, 7);

  noLoop();
}
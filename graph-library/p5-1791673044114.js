function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop();
}

function draw() {
  background(255);

  let questionText = "A line passes through the points (1, 2) and (4, 8). Plot both points on the coordinate plane, draw the line, and find the slope of the line.";
  textSize(15);
  fill(0);
  textAlign(LEFT, TOP);
  noStroke();

  let margin = 20;
  let maxWidth = width - margin * 2;
  let words = questionText.split(' ');
  let lineStr = '';
  let lineY = 20;
  let lineHeight = 22;

  for (let i = 0; i < words.length; i++) {
    let testLine = lineStr + words[i] + ' ';
    if (textWidth(testLine) > maxWidth && lineStr !== '') {
      text(lineStr, margin, lineY);
      lineStr = words[i] + ' ';
      lineY += lineHeight;
    } else {
      lineStr = testLine;
    }
  }
  text(lineStr, margin, lineY);
  let questionBottom = lineY + lineHeight + 10;

  let gridSize = min(width, height - questionBottom) * 0.82;
  let cellSize = gridSize / 20;
  let originX = width / 2;
  let originY = questionBottom + (height - questionBottom) / 2;

  // Grid lines
  stroke(220);
  strokeWeight(1);
  for (let i = -10; i <= 10; i++) {
    let gx = originX + i * cellSize;
    let gy = originY + i * cellSize;
    line(gx, originY - 10 * cellSize, gx, originY + 10 * cellSize);
    line(originX - 10 * cellSize, gy, originX + 10 * cellSize, gy);
  }

  // Axes
  stroke(0);
  strokeWeight(2);
  line(originX - 10 * cellSize, originY, originX + 10 * cellSize, originY);
  line(originX, originY - 10 * cellSize, originX, originY + 10 * cellSize);

  // Axis labels
  noStroke();
  textSize(11);
  fill(80);
  textAlign(CENTER, TOP);
  for (let i = -10; i <= 10; i++) {
    if (i === 0) continue;
    let lx = originX + i * cellSize;
    text(i, lx, originY + 5);
  }
  textAlign(RIGHT, CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i === 0) continue;
    let ly = originY - i * cellSize;
    text(i, originX - 5, ly);
  }

  textAlign(CENTER, CENTER);
  fill(0);
  textSize(13);
  text("x", originX + 10 * cellSize + 15, originY);
  text("y", originX, originY - 10 * cellSize - 15);

  // Draw line through (1,2) and (4,8)
  // Slope = (8-2)/(4-1) = 6/3 = 2, y = 2x
  // Extended: at x=-10, y=-20 (clip) at x=10, y=20 (clip)
  // Clamp to visible grid
  let x1line = -1;
  let y1line = 2 * (-1);
  let x2line = 10;
  let y2line = 2 * 10;

  // Clamp y to -10..10
  if (y1line < -10) { x1line = -10 / 2; y1line = -10; }
  if (y2line > 10) { x2line = 10 / 2; y2line = 10; }

  let px1 = originX + x1line * cellSize;
  let py1 = originY - y1line * cellSize;
  let px2 = originX + x2line * cellSize;
  let py2 = originY - y2line * cellSize;

  stroke(200, 80, 0);
  strokeWeight(2);
  line(px1, py1, px2, py2);

  // Points
  let p1x = originX + 1 * cellSize;
  let p1y = originY - 2 * cellSize;
  let p2x = originX + 4 * cellSize;
  let p2y = originY - 8 * cellSize;

  fill(200, 0, 0);
  noStroke();
  circle(p1x, p1y, 10);
  circle(p2x, p2y, 10);

  fill(0);
  textSize(13);
  textAlign(LEFT, CENTER);
  text("(1, 2)", p1x + 8, p1y + 10);
  text("(4, 8)", p2x + 8, p2y - 10);

  noLoop();
}
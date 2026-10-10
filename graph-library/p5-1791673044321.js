function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop();
}

function draw() {
  background(255);

  let questionText = "A bag contains 4 red marbles, 6 blue marbles, and 2 green marbles. Draw a bar graph to show the number of each color. Which color has the most marbles?";
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
  let questionBottom = lineY + lineHeight + 20;

  let graphLeft = 80;
  let graphRight = width - 60;
  let graphTop = questionBottom + 20;
  let graphBottom = height - 60;

  let graphWidth = graphRight - graphLeft;
  let graphHeight = graphBottom - graphTop;

  let maxVal = 10;
  let colors = ['Red', 'Blue', 'Green'];
  let values = [4, 6, 2];
  let barColors = [color(220, 60, 60), color(60, 100, 220), color(60, 180, 80)];

  let numBars = colors.length;
  let barAreaWidth = graphWidth / numBars;
  let barWidth = barAreaWidth * 0.5;

  // Y gridlines and labels
  stroke(200);
  strokeWeight(1);
  for (let v = 0; v <= maxVal; v += 2) {
    let y = graphBottom - (v / maxVal) * graphHeight;
    line(graphLeft, y, graphRight, y);
    noStroke();
    fill(80);
    textSize(12);
    textAlign(RIGHT, CENTER);
    text(v, graphLeft - 8, y);
    stroke(200);
  }

  // Axes
  stroke(0);
  strokeWeight(2);
  line(graphLeft, graphTop, graphLeft, graphBottom);
  line(graphLeft, graphBottom, graphRight, graphBottom);

  // Y axis title
  noStroke();
  fill(0);
  textSize(13);
  push();
  translate(22, (graphTop + graphBottom) / 2);
  rotate(-PI / 2);
  textAlign(CENTER, CENTER);
  text("Number of Marbles", 0, 0);
  pop();

  // Bars
  for (let i = 0; i < numBars; i++) {
    let barX = graphLeft + i * barAreaWidth + barAreaWidth / 2 - barWidth / 2;
    let barH = (values[i] / maxVal) * graphHeight;
    let barY = graphBottom - barH;

    fill(barColors[i]);
    noStroke();
    rect(barX, barY, barWidth, barH);

    fill(0);
    textSize(13);
    textAlign(CENTER, TOP);
    text(colors[i], barX + barWidth / 2, graphBottom + 8);

    textAlign(CENTER, BOTTOM);
    textSize(13);
    text(values[i], barX + barWidth / 2, barY - 4);
  }

  // Title
  fill(0);
  textSize(15);
  textAlign(CENTER, TOP);
  text("Marble Colors in a Bag", (graphLeft + graphRight) / 2, graphTop - 10);

  noLoop();
}
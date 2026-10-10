function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop();
}

function draw() {
  background(255);

  // Question text
  fill(0);
  noStroke();
  textSize(15);
  textAlign(LEFT, TOP);
  text("A bag has 3 red marbles, 5 blue marbles, and 2 green marbles.", 20, 12);
  text("Draw a bar graph showing the number of each color marble in the bag.", 20, 36);

  // Bar graph setup
  let barColors = [color(220, 60, 60), color(60, 120, 220), color(60, 180, 80)];
  let labels = ["Red", "Blue", "Green"];
  let values = [3, 5, 2];
  let maxVal = 6;

  let graphLeft = 90;
  let graphBottom = windowHeight - 80;
  let graphTop = 110;
  let graphRight = windowWidth - 60;
  let graphWidth = graphRight - graphLeft;
  let graphHeight = graphBottom - graphTop;

  let barCount = 3;
  let totalBarWidth = graphWidth / barCount;
  let barW = totalBarWidth * 0.55;
  let barSpacing = totalBarWidth * 0.225;

  // Y-axis grid and labels
  stroke(210);
  strokeWeight(1);
  for (let i = 0; i <= maxVal; i++) {
    let y = graphBottom - (i / maxVal) * graphHeight;
    line(graphLeft, y, graphRight, y);
  }

  // Axes
  stroke(0);
  strokeWeight(2);
  line(graphLeft, graphTop, graphLeft, graphBottom);
  line(graphLeft, graphBottom, graphRight, graphBottom);

  // Y-axis labels
  textSize(13);
  fill(0);
  noStroke();
  textAlign(RIGHT, CENTER);
  for (let i = 0; i <= maxVal; i++) {
    let y = graphBottom - (i / maxVal) * graphHeight;
    text(i, graphLeft - 6, y);
  }

  // Y-axis title
  push();
  translate(22, (graphTop + graphBottom) / 2);
  rotate(-HALF_PI);
  textAlign(CENTER, CENTER);
  textSize(13);
  text("Number of Marbles", 0, 0);
  pop();

  // X-axis title
  fill(0);
  noStroke();
  textSize(13);
  textAlign(CENTER, TOP);
  text("Marble Color", (graphLeft + graphRight) / 2, graphBottom + 36);

  // Bars
  for (let i = 0; i < barCount; i++) {
    let bx = graphLeft + i * totalBarWidth + barSpacing;
    let bh = (values[i] / maxVal) * graphHeight;
    let by = graphBottom - bh;

    fill(barColors[i]);
    noStroke();
    rect(bx, by, barW, bh);

    // X labels
    fill(0);
    textSize(13);
    textAlign(CENTER, TOP);
    text(labels[i], bx + barW / 2, graphBottom + 6);

    // Value on top of bar
    fill(50);
    textAlign(CENTER, BOTTOM);
    textSize(13);
    text(values[i], bx + barW / 2, by - 3);
  }

  // Title
  fill(0);
  noStroke();
  textSize(15);
  textAlign(CENTER, TOP);
  text("Marbles in the Bag", (graphLeft + graphRight) / 2, graphTop - 20);

  noLoop();
}
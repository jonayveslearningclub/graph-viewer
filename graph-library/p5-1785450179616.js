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
  text("2. A bag contains 4 red marbles, 3 blue marbles, and 5 green marbles.", width / 2, 22);
  text("Create a bar graph showing the number of each color marble in the bag.", width / 2, 44);

  let barColors = [color(220, 60, 60), color(60, 100, 220), color(60, 180, 80)];
  let labels = ["Red", "Blue", "Green"];
  let values = [4, 3, 5];
  let maxVal = 8;

  let graphLeft = 100;
  let graphRight = width - 80;
  let graphBottom = height - 100;
  let graphTop = 100;
  let graphWidth = graphRight - graphLeft;
  let graphHeight = graphBottom - graphTop;

  stroke(200);
  strokeWeight(1);
  for (let i = 0; i <= maxVal; i++) {
    let y = graphBottom - (i / maxVal) * graphHeight;
    line(graphLeft, y, graphRight, y);
    fill(80);
    noStroke();
    textSize(13);
    textAlign(RIGHT, CENTER);
    text(i, graphLeft - 8, y);
    stroke(200);
  }

  stroke(0);
  strokeWeight(2);
  line(graphLeft, graphTop, graphLeft, graphBottom);
  line(graphLeft, graphBottom, graphRight, graphBottom);
  noStroke();

  let numBars = 3;
  let totalBarWidth = graphWidth / numBars;
  let barW = totalBarWidth * 0.55;

  for (let i = 0; i < numBars; i++) {
    let barHeight = (values[i] / maxVal) * graphHeight;
    let x = graphLeft + i * totalBarWidth + (totalBarWidth - barW) / 2;
    let y = graphBottom - barHeight;

    fill(barColors[i]);
    noStroke();
    rect(x, y, barW, barHeight);

    fill(0);
    textSize(14);
    textAlign(CENTER, BOTTOM);
    text(labels[i], x + barW / 2, graphBottom + 22);

    fill(50);
    textAlign(CENTER, BOTTOM);
    textSize(13);
    text(values[i], x + barW / 2, y - 4);
  }

  fill(0);
  textSize(14);
  textAlign(CENTER, CENTER);
  text("Marble Color", width / 2, graphBottom + 52);

  push();
  translate(graphLeft - 50, graphTop + graphHeight / 2);
  rotate(-HALF_PI);
  textAlign(CENTER, CENTER);
  textSize(14);
  text("Number of Marbles", 0, 0);
  pop();

  noLoop();
}
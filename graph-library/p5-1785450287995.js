function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop();
}

function draw() {
  background(255);

  // Question text
  textAlign(LEFT, TOP);
  textSize(16);
  fill(0);
  noStroke();
  text("A bag contains 4 red marbles, 3 blue marbles, and 5 green marbles.", 20, 14);
  text("What is the probability of picking a blue marble at random?", 20, 36);

  let cx = width / 2;
  let cy = height / 2 + 30;
  let r = min(width, height) * 0.28;

  let total = 12;
  let counts = [4, 3, 5];
  let colors = [color(220, 60, 60), color(60, 100, 220), color(60, 180, 80)];
  let labels = ["Red: 4", "Blue: 3", "Green: 5"];
  let angles = [];
  for (let i = 0; i < counts.length; i++) {
    angles.push((counts[i] / total) * TWO_PI);
  }

  let start = -HALF_PI;
  for (let i = 0; i < counts.length; i++) {
    fill(colors[i]);
    stroke(255);
    strokeWeight(2);
    arc(cx, cy, r * 2, r * 2, start, start + angles[i], PIE);
    start += angles[i];
  }

  // Slice labels
  start = -HALF_PI;
  for (let i = 0; i < counts.length; i++) {
    let mid = start + angles[i] / 2;
    let lx = cx + cos(mid) * r * 0.65;
    let ly = cy + sin(mid) * r * 0.65;
    fill(255);
    noStroke();
    textSize(15);
    textAlign(CENTER, CENTER);
    text(labels[i], lx, ly);
    start += angles[i];
  }

  // Legend
  let legendX = cx + r + 30;
  let legendY = cy - 40;
  for (let i = 0; i < counts.length; i++) {
    fill(colors[i]);
    noStroke();
    rect(legendX, legendY + i * 32, 22, 22, 4);
    fill(0);
    textSize(14);
    textAlign(LEFT, CENTER);
    text(labels[i], legendX + 28, legendY + i * 32 + 11);
  }

  // Total label
  fill(0);
  noStroke();
  textSize(14);
  textAlign(CENTER, TOP);
  text("Total marbles: 12", cx, cy + r + 16);

  noLoop();
}
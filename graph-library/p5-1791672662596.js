function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop();
}

function draw() {
  background(255);

  // Question text
  fill(0);
  textSize(15);
  textAlign(LEFT, TOP);
  text("A spinner is divided into 6 equal sections.", 10, 10);
  text("2 sections are red, 3 sections are blue, and 1 section is green.", 10, 30);
  text("What is the probability of landing on blue?", 10, 50);

  // Draw spinner
  let cx = windowWidth / 2;
  let cy = windowHeight / 2 + 40;
  let r = min(windowWidth, windowHeight) * 0.3;

  let colors = [
    [220, 60, 60],
    [60, 100, 220],
    [220, 60, 60],
    [60, 100, 220],
    [60, 100, 220],
    [60, 180, 80]
  ];

  let labels = ["Red", "Blue", "Red", "Blue", "Blue", "Green"];
  let sections = 6;
  let angleSlice = TWO_PI / sections;

  for (let i = 0; i < sections; i++) {
    let startAngle = i * angleSlice - HALF_PI;
    let endAngle = startAngle + angleSlice;

    fill(colors[i][0], colors[i][1], colors[i][2]);
    stroke(0);
    strokeWeight(2);
    arc(cx, cy, r * 2, r * 2, startAngle, endAngle, PIE);

    // Section labels
    let midAngle = startAngle + angleSlice / 2;
    let lx = cx + cos(midAngle) * r * 0.65;
    let ly = cy + sin(midAngle) * r * 0.65;
    fill(255);
    noStroke();
    textSize(14);
    textAlign(CENTER, CENTER);
    text(labels[i], lx, ly);
  }

  // Center dot
  fill(0);
  noStroke();
  ellipse(cx, cy, 12, 12);

  // Arrow (pointer)
  stroke(0);
  strokeWeight(3);
  fill(50);
  let arrowAngle = -HALF_PI + angleSlice * 1.5;
  line(cx, cy, cx + cos(arrowAngle) * r * 0.7, cy + sin(arrowAngle) * r * 0.7);

  // Legend
  let legendX = cx + r + 30;
  let legendY = cy - 60;
  textSize(13);
  textAlign(LEFT, CENTER);
  noStroke();

  fill(220, 60, 60);
  rect(legendX, legendY, 18, 18);
  fill(0);
  text("Red (2 sections)", legendX + 25, legendY + 9);

  fill(60, 100, 220);
  rect(legendX, legendY + 28, 18, 18);
  fill(0);
  text("Blue (3 sections)", legendX + 25, legendY + 37);

  fill(60, 180, 80);
  rect(legendX, legendY + 56, 18, 18);
  fill(0);
  text("Green (1 section)", legendX + 25, legendY + 65);

  noLoop();
}
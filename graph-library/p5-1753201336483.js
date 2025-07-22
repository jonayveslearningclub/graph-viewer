function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  textSize(16);
  fill(0);
  text("Line m passes through points P(-4, 3) and Q(6, -1).", 20, 30);
  text("What is the slope of line m?", 20, 50);
  
  // Draw coordinate plane
  translate(400, 300);
  
  // Grid lines
  stroke(200);
  strokeWeight(1);
  for (let i = -10; i <= 10; i++) {
    line(i * 20, -200, i * 20, 200);
    line(-200, i * 20, 200, i * 20);
  }
  
  // Axes
  stroke(0);
  strokeWeight(2);
  line(-200, 0, 200, 0);
  line(0, -200, 0, 200);
  
  // Axis labels
  textAlign(CENTER, CENTER);
  textSize(12);
  fill(0);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, i * 20, 15);
      text(i, -15, -i * 20);
    }
  }
  text("0", -15, 15);
  
  // Plot points P and Q
  stroke(0, 0, 255);
  strokeWeight(3);
  fill(0, 0, 255);
  
  // P(-4, 3)
  ellipse(-4 * 20, -3 * 20, 10, 10);
  text("P(-4, 3)", -4 * 20 - 30, -3 * 20 - 20);
  
  // Q(6, -1)
  ellipse(6 * 20, -(-1) * 20, 10, 10);
  text("Q(6, -1)", 6 * 20 + 25, -(-1) * 20 + 20);
  
  // Draw line through points
  strokeWeight(2);
  line(-200, -3 * 20 + (-4 * 20 - (-200)) * (-1 - 3)/(6 - (-4)), 200, -3 * 20 + (200 - (-4 * 20)) * (-1 - 3)/(6 - (-4)));
  
  // Label line
  fill(0, 0, 255);
  text("line m", 150, -50);
  
  noLoop();
}
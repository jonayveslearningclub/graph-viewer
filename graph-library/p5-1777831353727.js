function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Title
  fill(0);
  textSize(16);
  text("Calculate the rate of change between points C(-4, 1) and D(3, 8)", 20, 30);
  text("Use the slope formula: rate = (y₂ - y₁) / (x₂ - x₁)", 20, 50);
  
  // Set up coordinate system
  translate(400, 300);
  
  // Draw grid lines
  stroke(220);
  strokeWeight(1);
  for (let i = -10; i <= 10; i++) {
    line(i * 30, -300, i * 30, 300);
    line(-400, i * 30, 400, i * 30);
  }
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(-400, 0, 400, 0); // x-axis
  line(0, -300, 0, 300); // y-axis
  
  // Label axes
  fill(0);
  textSize(12);
  textAlign(CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, i * 30, 15); // x-axis labels
      text(i, -15, -i * 30 + 5); // y-axis labels
    }
  }
  text("0", -10, 15);
  
  // Plot points C and D
  fill(0, 150, 0);
  strokeWeight(1);
  ellipse(-4 * 30, -1 * 30, 8, 8); // Point C(-4, 1)
  ellipse(3 * 30, -8 * 30, 8, 8); // Point D(3, 8)
  
  // Label points
  fill(0);
  textAlign(LEFT);
  textSize(14);
  text("C(-4, 1)", -4 * 30 - 50, -1 * 30 - 5);
  text("D(3, 8)", 3 * 30 + 10, -8 * 30 - 5);
  
  // Draw line connecting points
  stroke(150, 0, 150);
  strokeWeight(2);
  line(-4 * 30, -1 * 30, 3 * 30, -8 * 30);
  
  noLoop();
}
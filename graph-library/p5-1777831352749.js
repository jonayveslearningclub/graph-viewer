function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Title
  fill(0);
  textSize(16);
  text("Determine the rate of change between points E(1, -2) and F(6, 4)", 20, 30);
  text("Apply the rate formula: rate = (y₂ - y₁) / (x₂ - x₁)", 20, 50);
  
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
  
  // Plot points E and F
  fill(255, 100, 0);
  strokeWeight(1);
  ellipse(1 * 30, 2 * 30, 8, 8); // Point E(1, -2)
  ellipse(6 * 30, -4 * 30, 8, 8); // Point F(6, 4)
  
  // Label points
  fill(0);
  textAlign(LEFT);
  textSize(14);
  text("E(1, -2)", 1 * 30 + 10, 2 * 30 + 20);
  text("F(6, 4)", 6 * 30 + 10, -4 * 30 - 5);
  
  // Draw line connecting points
  stroke(0, 150, 150);
  strokeWeight(2);
  line(1 * 30, 2 * 30, 6 * 30, -4 * 30);
  
  noLoop();
}
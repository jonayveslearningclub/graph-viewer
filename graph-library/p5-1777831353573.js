function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Title
  fill(0);
  textSize(16);
  text("Find the rate of change between points A(2, 3) and B(7, 15)", 20, 30);
  text("Use the formula: rate = (y₂ - y₁) / (x₂ - x₁)", 20, 50);
  
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
  
  // Plot points A and B
  fill(255, 0, 0);
  strokeWeight(1);
  ellipse(2 * 30, -3 * 30, 8, 8); // Point A(2, 3)
  ellipse(7 * 30, -15 * 30, 8, 8); // Point B(7, 15)
  
  // Label points
  fill(0);
  textAlign(LEFT);
  textSize(14);
  text("A(2, 3)", 2 * 30 + 10, -3 * 30 - 5);
  text("B(7, 15)", 7 * 30 + 10, -15 * 30 - 5);
  
  // Draw line connecting points
  stroke(0, 0, 255);
  strokeWeight(2);
  line(2 * 30, -3 * 30, 7 * 30, -15 * 30);
  
  noLoop();
}
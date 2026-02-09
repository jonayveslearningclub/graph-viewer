function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Display the question
  fill(0);
  textSize(16);
  text("1. Plot the following points on the coordinate plane: A(3, 7), B(-5, 2), C(8, -4), D(-2, -6)", 20, 25);
  
  // Set up coordinate system centered on canvas
  let centerX = width / 2;
  let centerY = height / 2;
  let scale = 18;
  
  // Draw grid lines
  stroke(220);
  strokeWeight(1);
  for (let i = -10; i <= 10; i++) {
    // Vertical grid lines
    line(centerX + i * scale, centerY - 10 * scale, centerX + i * scale, centerY + 10 * scale);
    // Horizontal grid lines
    line(centerX - 10 * scale, centerY + i * scale, centerX + 10 * scale, centerY + i * scale);
  }
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(centerX - 10 * scale, centerY, centerX + 10 * scale, centerY); // x-axis
  line(centerX, centerY - 10 * scale, centerX, centerY + 10 * scale); // y-axis
  
  // Label axes
  fill(0);
  textSize(12);
  textAlign(CENTER, CENTER);
  
  // X-axis labels
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, centerX + i * scale, centerY + 15);
    }
  }
  
  // Y-axis labels
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(-i, centerX - 15, centerY + i * scale);
    }
  }
  
  // Origin label
  text("0", centerX - 10, centerY + 10);
  
  noLoop();
}
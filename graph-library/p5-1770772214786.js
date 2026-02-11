function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Display question
  fill(0);
  textSize(16);
  text("1. Plot the point P(-3, 5) and point Q(4, -2) on the coordinate plane.", 20, 30);
  
  // Set up coordinate system centered on canvas
  let centerX = width / 2;
  let centerY = height / 2;
  let scale = 20;
  
  // Draw grid lines
  stroke(200);
  strokeWeight(0.5);
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
  textAlign(CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, centerX + i * scale, centerY + 15); // x-axis labels
      text(i, centerX - 15, centerY - i * scale + 5); // y-axis labels
    }
  }
  text("0", centerX - 10, centerY + 15);
  
  // Add axis titles
  textSize(14);
  text("x", centerX + 10 * scale + 10, centerY + 5);
  text("y", centerX - 5, centerY - 10 * scale - 10);
  
  noLoop();
}
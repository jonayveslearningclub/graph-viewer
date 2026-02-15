function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Draw question
  fill(0);
  textSize(16);
  text("1. Plot the following points on the coordinate plane: A(3, 7), B(-5, 2), C(8, -4), D(-2, -6)", 20, 30);
  
  // Set up coordinate system
  let centerX = width / 2;
  let centerY = height / 2;
  let scale = 20;
  
  // Draw grid lines
  stroke(200);
  strokeWeight(1);
  for (let i = -10; i <= 10; i++) {
    // Vertical lines
    line(centerX + i * scale, centerY - 10 * scale, centerX + i * scale, centerY + 10 * scale);
    // Horizontal lines
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
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      // x-axis labels
      text(i, centerX + i * scale, centerY + 15);
      // y-axis labels
      text(-i, centerX - 15, centerY + i * scale);
    }
  }
  text("0", centerX - 10, centerY + 10);
  
  // Mark points (but don't plot them - this is homework)
  fill(255, 0, 0);
  stroke(255, 0, 0);
  strokeWeight(6);
  // Students need to plot: A(3, 7), B(-5, 2), C(8, -4), D(-2, -6)
  
  noLoop();
}
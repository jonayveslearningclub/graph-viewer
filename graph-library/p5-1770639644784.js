function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Display the question
  fill(0);
  textSize(16);
  text("3. Which quadrant contains each of the following points: M(9, -5), N(-7, 3), O(-1, -9), P(4, 8)?", 20, 25);
  
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
  
  // Label quadrants
  textSize(20);
  fill(100);
  textAlign(CENTER, CENTER);
  text("I", centerX + 5 * scale, centerY - 5 * scale);
  text("II", centerX - 5 * scale, centerY - 5 * scale);
  text("III", centerX - 5 * scale, centerY + 5 * scale);
  text("IV", centerX + 5 * scale, centerY + 5 * scale);
  
  // Plot points
  fill(0, 0, 255);
  strokeWeight(1);
  
  // Point M at (9, -5)
  circle(centerX + (9) * scale, centerY + (5) * scale, 10);
  fill(0);
  textSize(14);
  textAlign(LEFT, BOTTOM);
  text("M(9, -5)", centerX + (9) * scale + 8, centerY + (5) * scale - 8);
  
  // Point N at (-7, 3)
  fill(0, 0, 255);
  circle(centerX + (-7) * scale, centerY + (-3) * scale, 10);
  fill(0);
  text("N(-7, 3)", centerX + (-7) * scale - 40, centerY + (-3) * scale - 8);
  
  // Point O at (-1, -9)
  fill(0, 0, 255);
  circle(centerX + (-1) * scale, centerY + (9) * scale, 10);
  fill(0);
  text("O(-1, -9)", centerX + (-1) * scale - 45, centerY + (9) * scale + 15);
  
  // Point P at (4, 8)
  fill(0, 0, 255);
  circle(centerX + (4) * scale, centerY + (-8) * scale, 10);
  fill(0);
  text("P(4, 8)", centerX + (4) * scale + 8, centerY + (-8) * scale - 8);
  
  noLoop();
}
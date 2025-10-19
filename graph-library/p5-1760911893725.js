function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  // Question text
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("Point P(6, 3) is reflected across the y-axis to create point P'.", 50, 40);
  text("What are the coordinates of P'?", 50, 65);
  
  // Multiple choice options
  textSize(16);
  text("A) (-6, 3)", 50, 100);
  text("B) (6, -3)", 50, 125);
  text("C) (-6, -3)", 50, 150);
  text("D) (3, 6)", 50, 175);
  
  // Set up coordinate system
  let centerX = width / 2;
  let centerY = height / 2;
  let scale = 25;
  
  // Draw grid lines
  stroke(220);
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
  
  // Highlight y-axis (reflection line)
  stroke(255, 0, 0);
  strokeWeight(3);
  line(centerX, centerY - 10 * scale, centerX, centerY + 10 * scale);
  
  // Label axes
  fill(0);
  textAlign(CENTER);
  textSize(14);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      // X-axis labels
      text(i, centerX + i * scale, centerY + 20);
      // Y-axis labels
      text(-i, centerX - 20, centerY + i * scale + 5);
    }
  }
  text("0", centerX - 15, centerY + 15);
  
  // Plot original point P
  let Px = centerX + 6 * scale;
  let Py = centerY - 3 * scale;
  
  fill(0, 0, 255);
  stroke(0);
  strokeWeight(2);
  ellipse(Px, Py, 10, 10);
  
  // Label original point
  fill(0);
  textAlign(CENTER);
  textSize(16);
  text("P(6, 3)", Px + 25, Py - 10);
  
  // Add reflection line label
  fill(255, 0, 0);
  textAlign(LEFT);
  text("y-axis", centerX + 10, centerY - 8 * scale);
  
  noLoop();
}
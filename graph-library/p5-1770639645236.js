function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Display the question
  fill(0);
  textSize(16);
  text("2. Find the coordinates of points P, Q, R, and S marked on the grid below:", 20, 25);
  
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
  
  // Plot points for students to identify
  fill(255, 0, 0);
  strokeWeight(1);
  
  // Point P at (-6, 4)
  circle(centerX + (-6) * scale, centerY + (-4) * scale, 8);
  fill(0);
  textAlign(LEFT, BOTTOM);
  text("P", centerX + (-6) * scale + 5, centerY + (-4) * scale - 5);
  
  // Point Q at (2, -3)
  fill(255, 0, 0);
  circle(centerX + (2) * scale, centerY + (3) * scale, 8);
  fill(0);
  text("Q", centerX + (2) * scale + 5, centerY + (3) * scale - 5);
  
  // Point R at (7, 6)
  fill(255, 0, 0);
  circle(centerX + (7) * scale, centerY + (-6) * scale, 8);
  fill(0);
  text("R", centerX + (7) * scale + 5, centerY + (-6) * scale - 5);
  
  // Point S at (-4, -8)
  fill(255, 0, 0);
  circle(centerX + (-4) * scale, centerY + (8) * scale, 8);
  fill(0);
  text("S", centerX + (-4) * scale + 5, centerY + (8) * scale - 5);
  
  noLoop();
}
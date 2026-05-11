function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("3. Rectangle PQRS has P(1, 3), Q(6, 3), R(6, -1), and S(1, -1).", 20, 30);
  text("If the rectangle is reflected across the y-axis, what are the new coordinates?", 20, 50);
  
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
  text("0", centerX - 12, centerY + 12);
  
  // Original rectangle coordinates
  let Px = 1, Py = 3;
  let Qx = 6, Qy = 3;
  let Rx = 6, Ry = -1;
  let Sx = 1, Sy = -1;
  
  // Convert to screen coordinates
  let screenPx = centerX + Px * scale;
  let screenPy = centerY - Py * scale;
  let screenQx = centerX + Qx * scale;
  let screenQy = centerY - Qy * scale;
  let screenRx = centerX + Rx * scale;
  let screenRy = centerY - Ry * scale;
  let screenSx = centerX + Sx * scale;
  let screenSy = centerY - Sy * scale;
  
  // Draw original rectangle
  stroke(255, 0, 0);
  strokeWeight(2);
  fill(255, 0, 0, 30);
  quad(screenPx, screenPy, screenQx, screenQy, screenRx, screenRy, screenSx, screenSy);
  
  // Draw and label original vertices
  fill(255, 0, 0);
  noStroke();
  circle(screenPx, screenPy, 8);
  circle(screenQx, screenQy, 8);
  circle(screenRx, screenRy, 8);
  circle(screenSx, screenSy, 8);
  
  fill(0);
  textSize(12);
  text("P(1, 3)", screenPx - 15, screenPy - 15);
  text("Q(6, 3)", screenQx + 15, screenQy - 15);
  text("R(6, -1)", screenRx + 15, screenRy + 15);
  text("S(1, -1)", screenSx - 15, screenSy + 15);
  
  // Add instruction
  textSize(14);
  fill(0, 0, 255);
  text("Original rectangle PQRS", centerX - 4 * scale, centerY + 7 * scale);
  
  noLoop();
}
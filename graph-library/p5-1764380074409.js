function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Display question
  fill(0);
  textSize(18);
  text("Graph the linear function y = 3x - 4 and identify where it crosses", 20, 30);
  text("the x-axis and y-axis.", 20, 55);
  
  // Set up coordinate system
  let centerX = width / 2;
  let centerY = height / 2;
  let gridSize = 25;
  
  // Draw grid lines
  stroke(220);
  strokeWeight(1);
  for (let i = -10; i <= 10; i++) {
    // Vertical lines
    line(centerX + i * gridSize, centerY - 10 * gridSize, centerX + i * gridSize, centerY + 10 * gridSize);
    // Horizontal lines
    line(centerX - 10 * gridSize, centerY + i * gridSize, centerX + 10 * gridSize, centerY + i * gridSize);
  }
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(centerX, centerY - 10 * gridSize, centerX, centerY + 10 * gridSize); // y-axis
  line(centerX - 10 * gridSize, centerY, centerX + 10 * gridSize, centerY); // x-axis
  
  // Label axes
  fill(0);
  textSize(14);
  textAlign(CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      // X-axis labels
      text(i, centerX + i * gridSize, centerY + 20);
      // Y-axis labels
      text(i, centerX - 20, centerY - i * gridSize + 5);
    }
  }
  text("0", centerX - 15, centerY + 15);
  
  // Draw the line y = 3x - 4
  stroke(0, 0, 255);
  strokeWeight(3);
  
  // Calculate endpoints for the line within our grid
  let x1 = -10;
  let y1 = 3 * x1 - 4; // y = -34
  let x2 = 10;
  let y2 = 3 * x2 - 4; // y = 26
  
  // Convert to screen coordinates and draw line
  let screenX1 = centerX + x1 * gridSize;
  let screenY1 = centerY - y1 * gridSize;
  let screenX2 = centerX + x2 * gridSize;
  let screenY2 = centerY - y2 * gridSize;
  
  line(screenX1, screenY1, screenX2, screenY2);
  
  // Mark some key points on the line for reference
  fill(0, 0, 255);
  stroke(0);
  strokeWeight(1);
  
  // Point at x = 0 (y-intercept)
  let yInt_x = centerX + 0 * gridSize;
  let yInt_y = centerY - (-4) * gridSize;
  circle(yInt_x, yInt_y, 6);
  
  // Point at x = 2
  let point2_x = centerX + 2 * gridSize;
  let point2_y = centerY - (2) * gridSize;
  circle(point2_x, point2_y, 6);
  
  // Point at x = -1
  let pointNeg1_x = centerX + (-1) * gridSize;
  let pointNeg1_y = centerY - (-7) * gridSize;
  circle(pointNeg1_x, pointNeg1_y, 6);
  
  noLoop();
}
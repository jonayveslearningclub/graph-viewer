function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Display the question
  fill(0);
  textSize(16);
  text("Graph the linear equation y = 2x - 4 and identify the y-intercept.", 20, 30);
  
  // Set up coordinate system
  let centerX = width / 2;
  let centerY = height / 2;
  let scale = 20;
  
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
  textAlign(CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i != 0) {
      text(i, centerX + i * scale, centerY + 15); // x-axis labels
      text(i, centerX - 15, centerY - i * scale + 5); // y-axis labels
    }
  }
  
  // Draw the line y = 2x - 4
  stroke(0, 0, 255);
  strokeWeight(3);
  
  // Calculate points for the line within the visible range
  let x1 = -10;
  let y1 = 2 * x1 - 4; // y = -24
  let x2 = 10;
  let y2 = 2 * x2 - 4; // y = 16
  
  // Convert to canvas coordinates
  let canvasX1 = centerX + x1 * scale;
  let canvasY1 = centerY - y1 * scale;
  let canvasX2 = centerX + x2 * scale;
  let canvasY2 = centerY - y2 * scale;
  
  line(canvasX1, canvasY1, canvasX2, canvasY2);
  
  // Mark some key points on the line
  fill(0, 0, 255);
  stroke(0);
  strokeWeight(1);
  
  // Point at x = 0 (y-intercept)
  let yIntX = centerX + 0 * scale;
  let yIntY = centerY - (-4) * scale;
  ellipse(yIntX, yIntY, 8, 8);
  
  // Point at x = 2
  let point2X = centerX + 2 * scale;
  let point2Y = centerY - 0 * scale;
  ellipse(point2X, point2Y, 8, 8);
  
  // Point at x = 4
  let point4X = centerX + 4 * scale;
  let point4Y = centerY - 4 * scale;
  ellipse(point4X, point4Y, 8, 8);
  
  // Label key points
  fill(0);
  textAlign(LEFT);
  text("(0, -4)", yIntX + 10, yIntY + 5);
  text("(2, 0)", point2X + 10, point2Y - 5);
  text("(4, 4)", point4X + 10, point4Y - 5);
  
  noLoop();
}
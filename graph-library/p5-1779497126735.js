function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(18);
  text("Graph the line y = 3x + 1 by plotting the y-intercept and using the slope.", 50, 30);
  
  // Draw coordinate plane
  let centerX = width / 2;
  let centerY = height / 2 + 20;
  let gridSize = 25;
  
  // Grid lines
  stroke(220);
  strokeWeight(1);
  for (let i = -10; i <= 10; i++) {
    // Vertical lines
    line(centerX + i * gridSize, centerY - 10 * gridSize, centerX + i * gridSize, centerY + 10 * gridSize);
    // Horizontal lines
    line(centerX - 10 * gridSize, centerY + i * gridSize, centerX + 10 * gridSize, centerY + i * gridSize);
  }
  
  // Axes
  stroke(0);
  strokeWeight(2);
  // X-axis
  line(centerX - 10 * gridSize, centerY, centerX + 10 * gridSize, centerY);
  // Y-axis
  line(centerX, centerY - 10 * gridSize, centerX, centerY + 10 * gridSize);
  
  // Axis labels
  fill(0);
  textSize(12);
  textAlign(CENTER, CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      // X-axis labels
      text(i, centerX + i * gridSize, centerY + 15);
      // Y-axis labels
      text(i, centerX - 15, centerY - i * gridSize);
    }
  }
  
  // Origin label
  text("0", centerX - 10, centerY + 10);
  
  // Mark y-intercept point
  fill(0, 150, 0);
  stroke(0, 150, 0);
  strokeWeight(2);
  let yIntX = centerX;
  let yIntY = centerY - 1 * gridSize;
  ellipse(yIntX, yIntY, 8, 8);
  
  // Label y-intercept
  fill(0, 150, 0);
  textAlign(LEFT, CENTER);
  text("y-intercept: (0, 1)", yIntX + 10, yIntY);
  
  noLoop();
}
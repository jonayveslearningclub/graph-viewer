function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Display question
  fill(0);
  textSize(18);
  text("Find the slope of the line passing through points A(2, 5) and B(7, 3).", 20, 30);
  
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
  
  // Plot points A and B
  fill(255, 0, 0);
  stroke(0);
  strokeWeight(1);
  let pointA_x = centerX + 2 * gridSize;
  let pointA_y = centerY - 5 * gridSize;
  let pointB_x = centerX + 7 * gridSize;
  let pointB_y = centerY - 3 * gridSize;
  
  circle(pointA_x, pointA_y, 8);
  circle(pointB_x, pointB_y, 8);
  
  // Label points
  fill(0);
  textAlign(CENTER);
  text("A(2, 5)", pointA_x - 25, pointA_y - 10);
  text("B(7, 3)", pointB_x + 25, pointB_y - 10);
  
  // Draw line through points
  stroke(0, 0, 255);
  strokeWeight(2);
  line(centerX - 8 * gridSize, centerY - 7 * gridSize, centerX + 10 * gridSize, centerY - 1 * gridSize);
  
  noLoop();
}
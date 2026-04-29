function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("Use the coordinate grid to plot the vertices of rectangle MNOP:", 50, 30);
  text("M(-2, 3), N(4, 3), O(4, -1), P(-2, -1)", 50, 50);
  
  // Set up coordinate system
  let centerX = width / 2;
  let centerY = height / 2 + 20;
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
  line(centerX - 10 * gridSize, centerY, centerX + 10 * gridSize, centerY); // x-axis
  line(centerX, centerY - 10 * gridSize, centerX, centerY + 10 * gridSize); // y-axis
  
  // Label axes
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
  
  // Add axis labels
  textSize(14);
  text("x", centerX + 10 * gridSize + 20, centerY);
  text("y", centerX, centerY - 10 * gridSize - 20);
  
  noLoop();
}
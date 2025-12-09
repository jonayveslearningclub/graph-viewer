function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Display the question
  textSize(16);
  fill(0);
  text("2. Find the slope of the line passing through points A(1, 4) and B(5, 8)", 20, 30);
  
  // Set up coordinate system
  let centerX = width / 2;
  let centerY = height / 2;
  let gridSize = 20;
  
  // Draw grid lines
  stroke(220);
  strokeWeight(1);
  for (let i = -10; i <= 10; i++) {
    // Vertical lines
    line(centerX + i * gridSize, 50, centerX + i * gridSize, height - 50);
    // Horizontal lines
    line(50, centerY + i * gridSize, width - 50, centerY + i * gridSize);
  }
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(50, centerY, width - 50, centerY); // x-axis
  line(centerX, 50, centerX, height - 50); // y-axis
  
  // Label axes
  textSize(12);
  fill(0);
  textAlign(CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      // X-axis labels
      text(i, centerX + i * gridSize, centerY + 15);
      // Y-axis labels
      text(-i, centerX - 15, centerY + i * gridSize + 5);
    }
  }
  
  // Label origin
  text("0", centerX - 10, centerY + 15);
  
  // Draw coordinate plane labels
  textAlign(LEFT);
  text("x", width - 60, centerY + 15);
  text("y", centerX + 5, 65);
  
  // Plot points A(1, 4) and B(5, 8)
  fill(255, 0, 0);
  stroke(255, 0, 0);
  strokeWeight(8);
  point(centerX + 1 * gridSize, centerY - 4 * gridSize); // Point A
  point(centerX + 5 * gridSize, centerY - 8 * gridSize); // Point B
  
  // Label the points
  textAlign(LEFT);
  textSize(14);
  fill(255, 0, 0);
  text("A(1, 4)", centerX + 1 * gridSize + 10, centerY - 4 * gridSize - 10);
  text("B(5, 8)", centerX + 5 * gridSize + 10, centerY - 8 * gridSize - 10);
  
  noLoop();
}
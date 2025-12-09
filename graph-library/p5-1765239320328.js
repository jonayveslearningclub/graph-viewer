function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Display the question
  textSize(16);
  fill(0);
  text("1. Graph the linear equation y = 2x + 3", 20, 30);
  
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
  
  noLoop();
}
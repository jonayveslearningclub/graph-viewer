function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  fill(0);
  textSize(16);
  text("Graph the equation y = -x + 4 without using a table of values.", 20, 30);
  
  // Set up coordinate system
  let centerX = width / 2;
  let centerY = height / 2 + 20;
  let gridSize = 25;
  
  // Draw grid lines
  stroke(200);
  strokeWeight(1);
  
  // Vertical grid lines
  for (let i = -10; i <= 10; i++) {
    let x = centerX + i * gridSize;
    line(x, centerY - 10 * gridSize, x, centerY + 10 * gridSize);
  }
  
  // Horizontal grid lines
  for (let i = -10; i <= 10; i++) {
    let y = centerY - i * gridSize;
    line(centerX - 10 * gridSize, y, centerX + 10 * gridSize, y);
  }
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(centerX, centerY - 10 * gridSize, centerX, centerY + 10 * gridSize); // y-axis
  line(centerX - 10 * gridSize, centerY, centerX + 10 * gridSize, centerY); // x-axis
  
  // Label axes
  fill(0);
  textSize(12);
  textAlign(CENTER);
  
  // X-axis labels
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      let x = centerX + i * gridSize;
      text(i, x, centerY + 15);
    }
  }
  
  // Y-axis labels
  textAlign(RIGHT);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      let y = centerY - i * gridSize;
      text(i, centerX - 8, y + 4);
    }
  }
  
  // Origin label
  textAlign(RIGHT);
  text("0", centerX - 8, centerY + 15);
  
  // Axis labels
  textAlign(CENTER);
  textSize(14);
  text("x", centerX + 10 * gridSize + 15, centerY + 5);
  text("y", centerX - 5, centerY - 10 * gridSize - 10);
  
  noLoop();
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  
  // Display question
  fill(0);
  textSize(18);
  text("Triangle DEF has vertices at D(3, 2), E(6, 4), F(4, 7). In which quadrant", 20, 30);
  text("will the triangle be located after reflecting across the y-axis?", 20, 55);
  
  // Set up coordinate system
  let centerX = width / 2;
  let centerY = height / 2;
  let gridSize = 25;
  
  // Draw grid lines
  stroke(220);
  strokeWeight(0.5);
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
  textAlign(CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, centerX + i * gridSize, centerY + 15);
      text(i, centerX - 15, centerY - i * gridSize + 5);
    }
  }
  text("0", centerX - 10, centerY + 15);
  
  // Draw original triangle DEF
  fill(100, 150, 255, 150);
  stroke(0, 0, 255);
  strokeWeight(2);
  triangle(centerX + 3 * gridSize, centerY - 2 * gridSize,
           centerX + 6 * gridSize, centerY - 4 * gridSize,
           centerX + 4 * gridSize, centerY - 7 * gridSize);
  
  // Label vertices
  fill(0);
  textAlign(CENTER);
  textSize(14);
  text("D(3, 2)", centerX + 3 * gridSize + 20, centerY - 2 * gridSize);
  text("E(6, 4)", centerX + 6 * gridSize + 20, centerY - 4 * gridSize);
  text("F(4, 7)", centerX + 4 * gridSize + 20, centerY - 7 * gridSize);
  
  // Mark quadrants
  textSize(24);
  fill(200, 100, 100);
  text("I", centerX + 5 * gridSize, centerY - 8 * gridSize);
  text("II", centerX - 5 * gridSize, centerY - 8 * gridSize);
  text("III", centerX - 5 * gridSize, centerY + 8 * gridSize);
  text("IV", centerX + 5 * gridSize, centerY + 8 * gridSize);
  
  noLoop();
}
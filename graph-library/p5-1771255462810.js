function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  
  // Display question
  fill(0);
  textSize(18);
  text("Rectangle PQRS has vertices at P(-2, 5), Q(-6, 5), R(-6, 1), S(-2, 1).", 20, 30);
  text("In which quadrant will the rectangle be located after reflecting across the x-axis?", 20, 55);
  
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
  
  // Draw original rectangle PQRS
  fill(255, 150, 100, 150);
  stroke(255, 100, 0);
  strokeWeight(2);
  rect(centerX - 6 * gridSize, centerY - 5 * gridSize, 4 * gridSize, 4 * gridSize);
  
  // Label vertices
  fill(0);
  textAlign(CENTER);
  textSize(14);
  text("P(-2, 5)", centerX - 2 * gridSize + 25, centerY - 5 * gridSize - 10);
  text("Q(-6, 5)", centerX - 6 * gridSize - 25, centerY - 5 * gridSize - 10);
  text("R(-6, 1)", centerX - 6 * gridSize - 25, centerY - 1 * gridSize + 20);
  text("S(-2, 1)", centerX - 2 * gridSize + 25, centerY - 1 * gridSize + 20);
  
  // Mark quadrants
  textSize(24);
  fill(200, 100, 100);
  text("I", centerX + 5 * gridSize, centerY - 8 * gridSize);
  text("II", centerX - 5 * gridSize, centerY - 8 * gridSize);
  text("III", centerX - 5 * gridSize, centerY + 8 * gridSize);
  text("IV", centerX + 5 * gridSize, centerY + 8 * gridSize);
  
  noLoop();
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  
  // Display question
  fill(0);
  textSize(18);
  text("Pentagon JKLMN has vertices at J(1, -3), K(4, -2), L(3, -6), M(2, -7), N(1, -5).", 20, 30);
  text("In which quadrant will the pentagon be located after reflecting across both", 20, 55);
  text("the x-axis and y-axis?", 20, 80);
  
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
  
  // Draw original pentagon JKLMN
  fill(150, 255, 150, 150);
  stroke(0, 200, 0);
  strokeWeight(2);
  beginShape();
  vertex(centerX + 1 * gridSize, centerY + 3 * gridSize); // J(1, -3)
  vertex(centerX + 4 * gridSize, centerY + 2 * gridSize); // K(4, -2)
  vertex(centerX + 3 * gridSize, centerY + 6 * gridSize); // L(3, -6)
  vertex(centerX + 2 * gridSize, centerY + 7 * gridSize); // M(2, -7)
  vertex(centerX + 1 * gridSize, centerY + 5 * gridSize); // N(1, -5)
  endShape(CLOSE);
  
  // Label vertices
  fill(0);
  textAlign(CENTER);
  textSize(14);
  text("J(1, -3)", centerX + 1 * gridSize - 30, centerY + 3 * gridSize);
  text("K(4, -2)", centerX + 4 * gridSize + 30, centerY + 2 * gridSize);
  text("L(3, -6)", centerX + 3 * gridSize + 30, centerY + 6 * gridSize);
  text("M(2, -7)", centerX + 2 * gridSize, centerY + 7 * gridSize + 20);
  text("N(1, -5)", centerX + 1 * gridSize - 30, centerY + 5 * gridSize);
  
  // Mark quadrants
  textSize(24);
  fill(200, 100, 100);
  text("I", centerX + 5 * gridSize, centerY - 8 * gridSize);
  text("II", centerX - 5 * gridSize, centerY - 8 * gridSize);
  text("III", centerX - 5 * gridSize, centerY + 8 * gridSize);
  text("IV", centerX + 5 * gridSize, centerY + 8 * gridSize);
  
  noLoop();
}
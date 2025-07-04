function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(20);
  text("3. Arrange 6 equal squares to make a shape that touches exactly 8 other squares", 20, 30);
  text("if the same pattern was extended in all directions", 20, 55);
  
  // Draw the 6 individual squares
  textSize(16);
  text("Your 6 squares:", 20, 90);
  
  let squareSize = 35;
  let startX = 50;
  let startY = 110;
  
  // Draw 6 separate squares
  fill(255, 200, 200);
  stroke(0);
  strokeWeight(2);
  
  for (let i = 0; i < 6; i++) {
    rect(startX + i * (squareSize + 8), startY, squareSize, squareSize);
  }
  
  // Example of what "touching" means
  fill(0);
  textSize(14);
  text("Example: This square touches 4 others", 500, 90);
  
  fill(220);
  rect(500, 110, 25, 25);
  rect(475, 110, 25, 25);
  rect(525, 110, 25, 25);
  rect(500, 85, 25, 25);
  rect(500, 135, 25, 25);
  
  fill(255, 0, 0);
  rect(500, 110, 25, 25);
  
  // Grid for student work
  stroke(200);
  strokeWeight(1);
  
  let gridSize = 30;
  let gridStartX = 100;
  let gridStartY = 200;
  
  // Draw grid
  for (let i = 0; i <= 18; i++) {
    line(gridStartX, gridStartY + i * gridSize, gridStartX + 18 * gridSize, gridStartY + i * gridSize);
    line(gridStartX + i * gridSize, gridStartY, gridStartX + i * gridSize, gridStartY + 18 * gridSize);
  }
  
  // Instructions
  fill(0);
  textSize(16);
  text("Arrange your squares on the grid:", 20, 180);
  
  noLoop();
}
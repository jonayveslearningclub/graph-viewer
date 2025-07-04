function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(20);
  text("2. Create a shape with 6 equal squares that has a perimeter of 14 units", 20, 30);
  text("(Each square has sides of 1 unit)", 20, 55);
  
  // Draw the 6 individual squares
  textSize(16);
  text("Available squares:", 20, 90);
  
  let squareSize = 30;
  let startX = 50;
  let startY = 110;
  
  // Draw 6 separate squares
  fill(200, 220, 255);
  stroke(0);
  strokeWeight(2);
  
  for (let i = 0; i < 6; i++) {
    rect(startX + i * (squareSize + 5), startY, squareSize, squareSize);
  }
  
  // Grid for student work
  stroke(200);
  strokeWeight(1);
  
  let gridSize = 25;
  let gridStartX = 100;
  let gridStartY = 200;
  
  // Draw grid
  for (let i = 0; i <= 20; i++) {
    line(gridStartX, gridStartY + i * gridSize, gridStartX + 20 * gridSize, gridStartY + i * gridSize);
    line(gridStartX + i * gridSize, gridStartY, gridStartX + i * gridSize, gridStartY + 20 * gridSize);
  }
  
  // Instructions
  fill(0);
  textSize(16);
  text("Draw your shape on the grid below:", 20, 180);
  text("Remember: Use ALL 6 squares and make the perimeter exactly 14 units", 20, 580);
  
  noLoop();
}
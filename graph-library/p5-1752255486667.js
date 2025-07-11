function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  text("1. When this net is folded into a cube, which face will be opposite to face A?", 20, 30);
  
  // Draw the net of a cube
  let squareSize = 80;
  let startX = 200;
  let startY = 100;
  
  // Draw squares and label them
  stroke(0);
  strokeWeight(2);
  fill(200, 220, 255);
  
  // Top square - B
  rect(startX + squareSize, startY, squareSize, squareSize);
  fill(0);
  textSize(24);
  text("B", startX + squareSize + 35, startY + 45);
  
  // Middle row - A, C, D, E
  fill(200, 220, 255);
  rect(startX, startY + squareSize, squareSize, squareSize);
  fill(0);
  text("A", startX + 35, startY + squareSize + 45);
  
  fill(200, 220, 255);
  rect(startX + squareSize, startY + squareSize, squareSize, squareSize);
  fill(0);
  text("C", startX + squareSize + 35, startY + squareSize + 45);
  
  fill(200, 220, 255);
  rect(startX + 2*squareSize, startY + squareSize, squareSize, squareSize);
  fill(0);
  text("D", startX + 2*squareSize + 35, startY + squareSize + 45);
  
  fill(200, 220, 255);
  rect(startX + 3*squareSize, startY + squareSize, squareSize, squareSize);
  fill(0);
  text("E", startX + 3*squareSize + 35, startY + squareSize + 45);
  
  // Bottom square - F
  fill(200, 220, 255);
  rect(startX + squareSize, startY + 2*squareSize, squareSize, squareSize);
  fill(0);
  text("F", startX + squareSize + 35, startY + 2*squareSize + 45);
  
  noLoop();
}
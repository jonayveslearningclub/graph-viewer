function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  text("3. When this net is folded into a box, which face will be the bottom?", 20, 30);
  
  // Draw the net
  let squareSize = 75;
  let startX = 180;
  let startY = 90;
  
  stroke(0);
  strokeWeight(2);
  
  // Cross-shaped net
  // Top square - W
  fill(200, 255, 200);
  rect(startX + squareSize, startY, squareSize, squareSize);
  fill(0);
  textSize(22);
  text("W", startX + squareSize + 32, startY + 42);
  
  // Middle row - X, Y, Z
  fill(200, 255, 200);
  rect(startX, startY + squareSize, squareSize, squareSize);
  fill(0);
  text("X", startX + 32, startY + squareSize + 42);
  
  fill(200, 255, 200);
  rect(startX + squareSize, startY + squareSize, squareSize, squareSize);
  fill(0);
  text("Y", startX + squareSize + 32, startY + squareSize + 42);
  
  fill(200, 255, 200);
  rect(startX + 2*squareSize, startY + squareSize, squareSize, squareSize);
  fill(0);
  text("Z", startX + 2*squareSize + 32, startY + squareSize + 42);
  
  // Bottom middle - U
  fill(200, 255, 200);
  rect(startX + squareSize, startY + 2*squareSize, squareSize, squareSize);
  fill(0);
  text("U", startX + squareSize + 32, startY + 2*squareSize + 42);
  
  // Bottom bottom - V
  fill(200, 255, 200);
  rect(startX + squareSize, startY + 3*squareSize, squareSize, squareSize);
  fill(0);
  text("V", startX + squareSize + 32, startY + 3*squareSize + 42);
  
  noLoop();
}
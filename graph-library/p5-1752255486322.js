function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  text("2. If you fold this net, which two faces will meet along the same edge as face M?", 20, 30);
  
  // Draw the net
  let squareSize = 70;
  let startX = 150;
  let startY = 80;
  
  stroke(0);
  strokeWeight(2);
  
  // Draw T-shaped net
  // Top square - P
  fill(255, 200, 200);
  rect(startX + squareSize, startY, squareSize, squareSize);
  fill(0);
  textSize(22);
  text("P", startX + squareSize + 30, startY + 40);
  
  // Middle row - M, N, O
  fill(255, 200, 200);
  rect(startX, startY + squareSize, squareSize, squareSize);
  fill(0);
  text("M", startX + 30, startY + squareSize + 40);
  
  fill(255, 200, 200);
  rect(startX + squareSize, startY + squareSize, squareSize, squareSize);
  fill(0);
  text("N", startX + squareSize + 30, startY + squareSize + 40);
  
  fill(255, 200, 200);
  rect(startX + 2*squareSize, startY + squareSize, squareSize, squareSize);
  fill(0);
  text("O", startX + 2*squareSize + 30, startY + squareSize + 40);
  
  // Bottom left - Q
  fill(255, 200, 200);
  rect(startX, startY + 2*squareSize, squareSize, squareSize);
  fill(0);
  text("Q", startX + 30, startY + 2*squareSize + 40);
  
  // Bottom middle - R
  fill(255, 200, 200);
  rect(startX + squareSize, startY + 2*squareSize, squareSize, squareSize);
  fill(0);
  text("R", startX + squareSize + 30, startY + 2*squareSize + 40);
  
  noLoop();
}
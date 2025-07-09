function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  text("1. Count the unit squares to find the area of this rectangle.", 20, 30);
  
  // Draw the rectangle made of unit squares (4 by 6)
  let startX = 150;
  let startY = 80;
  let squareSize = 40;
  
  // Draw grid lines and unit squares
  stroke(0);
  strokeWeight(2);
  for (let i = 0; i <= 4; i++) {
    for (let j = 0; j <= 6; j++) {
      line(startX + i * squareSize, startY + j * squareSize, startX + i * squareSize, startY + 6 * squareSize);
      line(startX + i * squareSize, startY + j * squareSize, startX + 4 * squareSize, startY + j * squareSize);
    }
  }
  
  // Fill the rectangle lightly
  fill(200, 220, 255, 100);
  noStroke();
  rect(startX, startY, 4 * squareSize, 6 * squareSize);
  
  // Add unit square labels
  fill(0);
  textSize(12);
  textAlign(CENTER, CENTER);
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 6; j++) {
      text("1", startX + i * squareSize + squareSize/2, startY + j * squareSize + squareSize/2);
    }
  }
  
  // Label the shape
  textSize(16);
  textAlign(LEFT);
  text("Rectangle A", startX + 50, startY + 6 * squareSize + 30);
  text("Each small square = 1 unit square", startX, startY + 6 * squareSize + 60);
  
  noLoop();
}
function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  text("2. Find the area of this L-shaped figure by counting unit squares.", 20, 30);
  
  let startX = 200;
  let startY = 80;
  let squareSize = 35;
  
  // Draw the L-shape using unit squares
  // Bottom horizontal part: 5 squares wide, 2 squares tall
  // Top vertical part: 2 squares wide, 3 squares tall
  
  stroke(0);
  strokeWeight(2);
  fill(255, 200, 200, 100);
  
  // Bottom horizontal rectangle
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 2; j++) {
      rect(startX + i * squareSize, startY + 3 * squareSize + j * squareSize, squareSize, squareSize);
    }
  }
  
  // Top vertical rectangle
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
      rect(startX + i * squareSize, startY + j * squareSize, squareSize, squareSize);
    }
  }
  
  // Add unit square labels
  fill(0);
  textSize(10);
  textAlign(CENTER, CENTER);
  
  // Label bottom part
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 2; j++) {
      text("1", startX + i * squareSize + squareSize/2, startY + 3 * squareSize + j * squareSize + squareSize/2);
    }
  }
  
  // Label top part
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
      text("1", startX + i * squareSize + squareSize/2, startY + j * squareSize + squareSize/2);
    }
  }
  
  // Label the shape
  textSize(16);
  textAlign(LEFT);
  text("Figure B", startX + 100, startY + 6 * squareSize);
  text("Each small square = 1 unit square", startX - 50, startY + 6 * squareSize + 30);
  
  noLoop();
}
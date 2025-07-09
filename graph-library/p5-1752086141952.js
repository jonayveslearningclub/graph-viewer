function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  text("3. Count the unit squares to find the area of this T-shaped figure.", 20, 30);
  
  let startX = 180;
  let startY = 100;
  let squareSize = 38;
  
  // Draw the T-shape using unit squares
  // Top horizontal part: 5 squares wide, 2 squares tall
  // Bottom vertical part: 2 squares wide, 3 squares tall (centered)
  
  stroke(0);
  strokeWeight(2);
  fill(200, 255, 200, 100);
  
  // Top horizontal rectangle
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 2; j++) {
      rect(startX + i * squareSize, startY + j * squareSize, squareSize, squareSize);
    }
  }
  
  // Bottom vertical rectangle (centered under the horizontal part)
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
      rect(startX + (1 + i) * squareSize + squareSize/2, startY + (2 + j) * squareSize, squareSize, squareSize);
    }
  }
  
  // Add unit square labels
  fill(0);
  textSize(10);
  textAlign(CENTER, CENTER);
  
  // Label top part
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 2; j++) {
      text("1", startX + i * squareSize + squareSize/2, startY + j * squareSize + squareSize/2);
    }
  }
  
  // Label bottom part
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
      text("1", startX + (1 + i) * squareSize + squareSize/2 + squareSize/2, startY + (2 + j) * squareSize + squareSize/2);
    }
  }
  
  // Label the shape
  textSize(16);
  textAlign(LEFT);
  text("Figure C", startX + 80, startY + 6 * squareSize);
  text("Each small square = 1 unit square", startX - 30, startY + 6 * squareSize + 30);
  
  noLoop();
}
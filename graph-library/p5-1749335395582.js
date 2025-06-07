function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(18);
  text("1. How many squares are in the 5th step of this tessellation pattern?", 20, 30);
  
  // Draw the tessellation pattern steps
  let startX = 50;
  let startY = 80;
  let squareSize = 25;
  let stepSpacing = 120;
  
  // Step labels
  textSize(14);
  for (let step = 1; step <= 4; step++) {
    text("Step " + step, startX + (step - 1) * stepSpacing, startY - 10);
  }
  
  // Draw patterns for steps 1-4
  stroke(0);
  strokeWeight(2);
  fill(200, 150, 255);
  
  // Step 1: 3 squares in L-shape
  let x1 = startX;
  rect(x1, startY, squareSize, squareSize);
  rect(x1, startY + squareSize, squareSize, squareSize);
  rect(x1 + squareSize, startY + squareSize, squareSize, squareSize);
  
  // Step 2: 5 squares
  let x2 = startX + stepSpacing;
  rect(x2, startY, squareSize, squareSize);
  rect(x2, startY + squareSize, squareSize, squareSize);
  rect(x2 + squareSize, startY + squareSize, squareSize, squareSize);
  rect(x2 + squareSize, startY + 2 * squareSize, squareSize, squareSize);
  rect(x2 + 2 * squareSize, startY + 2 * squareSize, squareSize, squareSize);
  
  // Step 3: 7 squares
  let x3 = startX + 2 * stepSpacing;
  rect(x3, startY, squareSize, squareSize);
  rect(x3, startY + squareSize, squareSize, squareSize);
  rect(x3 + squareSize, startY + squareSize, squareSize, squareSize);
  rect(x3 + squareSize, startY + 2 * squareSize, squareSize, squareSize);
  rect(x3 + 2 * squareSize, startY + 2 * squareSize, squareSize, squareSize);
  rect(x3 + 2 * squareSize, startY + 3 * squareSize, squareSize, squareSize);
  rect(x3 + 3 * squareSize, startY + 3 * squareSize, squareSize, squareSize);
  
  // Step 4: 9 squares
  let x4 = startX + 3 * stepSpacing;
  rect(x4, startY, squareSize, squareSize);
  rect(x4, startY + squareSize, squareSize, squareSize);
  rect(x4 + squareSize, startY + squareSize, squareSize, squareSize);
  rect(x4 + squareSize, startY + 2 * squareSize, squareSize, squareSize);
  rect(x4 + 2 * squareSize, startY + 2 * squareSize, squareSize, squareSize);
  rect(x4 + 2 * squareSize, startY + 3 * squareSize, squareSize, squareSize);
  rect(x4 + 3 * squareSize, startY + 3 * squareSize, squareSize, squareSize);
  rect(x4 + 3 * squareSize, startY + 4 * squareSize, squareSize, squareSize);
  rect(x4 + 4 * squareSize, startY + 4 * squareSize, squareSize, squareSize);
  
  // Pattern observation table
  fill(0);
  textSize(16);
  text("Pattern Table:", 50, 350);
  text("Step 1: 3 squares", 50, 380);
  text("Step 2: 5 squares", 50, 400);
  text("Step 3: 7 squares", 50, 420);
  text("Step 4: 9 squares", 50, 440);
  text("Step 5: ? squares", 50, 460);
  
  noLoop();
}
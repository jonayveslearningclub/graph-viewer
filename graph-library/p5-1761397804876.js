function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(16);
  text("2. Create a tessellation pattern using squares and regular octagons.", 20, 30);
  text("Fill in the missing shapes in this partial tessellation:", 20, 55);
  
  // Draw partial tessellation pattern
  let squareSize = 30;
  let octRadius = 25;
  
  // Row 1: Complete pattern
  drawOctagon(150, 150, octRadius);
  drawSquare(195, 125, squareSize);
  drawOctagon(250, 150, octRadius);
  drawSquare(295, 125, squareSize);
  drawOctagon(350, 150, octRadius);
  
  // Row 1 vertical squares
  drawSquare(125, 175, squareSize);
  drawSquare(225, 175, squareSize);
  drawSquare(325, 175, squareSize);
  
  // Row 2: Partial pattern with blanks
  drawOctagon(150, 250, octRadius);
  // Missing square at (195, 225) - draw outline only
  noFill();
  stroke(150);
  strokeWeight(2);
  rect(180, 210, squareSize, squareSize);
  
  fill(200, 255, 200);
  stroke(0);
  strokeWeight(2);
  drawOctagon(250, 250, octRadius);
  
  // Missing square - draw outline only
  noFill();
  stroke(150);
  strokeWeight(2);
  rect(280, 210, squareSize, squareSize);
  
  // Instructions
  fill(0);
  textSize(14);
  text("Draw the missing squares to complete the tessellation pattern.", 20, 350);
  text("Remember: Each vertex must have angles that sum to 360°.", 20, 375);
  text("Square interior angle = 90°", 20, 400);
  text("Regular octagon interior angle = 135°", 20, 425);
  
  noLoop();
}

function drawSquare(x, y, size) {
  fill(255, 200, 200);
  stroke(0);
  strokeWeight(2);
  rect(x - size/2, y - size/2, size, size);
}

function drawOctagon(x, y, radius) {
  fill(200, 200, 255);
  stroke(0);
  strokeWeight(2);
  push();
  translate(x, y);
  beginShape();
  for (let i = 0; i < 8; i++) {
    let angle = TWO_PI * i / 8;
    let px = cos(angle) * radius;
    let py = sin(angle) * radius;
    vertex(px, py);
  }
  endShape(CLOSE);
  pop();
}
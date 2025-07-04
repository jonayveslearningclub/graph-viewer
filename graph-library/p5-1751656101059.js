function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(20);
  text("1. Using 6 equal squares, how many different rectangular shapes can you make?", 20, 30);
  
  // Draw the 6 individual squares
  textSize(16);
  text("Here are your 6 equal squares:", 20, 70);
  
  let squareSize = 40;
  let startX = 50;
  let startY = 90;
  
  // Draw 6 separate squares
  fill(200, 220, 255);
  stroke(0);
  strokeWeight(2);
  
  for (let i = 0; i < 6; i++) {
    rect(startX + i * (squareSize + 10), startY, squareSize, squareSize);
  }
  
  // Instructions
  fill(0);
  textSize(16);
  text("Draw all possible rectangles you can make using ALL 6 squares below:", 20, 180);
  
  // Draw grid areas for student work
  stroke(150);
  strokeWeight(1);
  fill(255);
  
  // Area 1
  rect(50, 220, 300, 150);
  fill(0);
  text("Rectangle 1:", 60, 240);
  
  // Area 2
  fill(255);
  rect(400, 220, 300, 150);
  fill(0);
  text("Rectangle 2:", 410, 240);
  
  // Area 3
  fill(255);
  rect(50, 400, 300, 150);
  fill(0);
  text("Rectangle 3:", 60, 420);
  
  // Area 4
  fill(255);
  rect(400, 400, 300, 150);
  fill(0);
  text("Rectangle 4:", 410, 420);
  
  noLoop();
}
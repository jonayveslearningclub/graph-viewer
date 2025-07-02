function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Title
  fill(0);
  textSize(18);
  text("Here is a completed 5 × 9 multiplication table grid for reference:", 20, 30);
  
  // Grid setup
  let startX = 80;
  let startY = 70;
  let cellSize = 40;
  let rows = 10;
  let cols = 10;
  
  // Draw grid
  stroke(0);
  strokeWeight(1);
  
  for (let i = 0; i <= rows; i++) {
    line(startX, startY + i * cellSize, startX + cols * cellSize, startY + i * cellSize);
  }
  
  for (let j = 0; j <= cols; j++) {
    line(startX + j * cellSize, startY, startX + j * cellSize, startY + rows * cellSize);
  }
  
  // Fill in complete table
  textAlign(CENTER, CENTER);
  textSize(12);
  fill(50, 50, 200);
  
  // Top row headers (1-9)
  for (let i = 1; i <= 9; i++) {
    text(i, startX + i * cellSize + cellSize/2, startY + cellSize/2);
  }
  
  // Left column headers (1-5)
  for (let i = 1; i <= 5; i++) {
    text(i, startX + cellSize/2, startY + i * cellSize + cellSize/2);
  }
  
  // Corner multiplication symbol
  textSize(16);
  text("×", startX + cellSize/2, startY + cellSize/2);
  
  // Fill in all products
  textSize(11);
  fill(0);
  
  for (let row = 1; row <= 5; row++) {
    for (let col = 1; col <= 9; col++) {
      let product = row * col;
      text(product, startX + col * cellSize + cellSize/2, startY + row * cellSize + cellSize/2);
    }
  }
  
  // Add instruction below
  textSize(14);
  fill(100, 0, 100);
  text("Use this example to help you complete your own multiplication table!", 50, 520);
  
  noLoop();
}
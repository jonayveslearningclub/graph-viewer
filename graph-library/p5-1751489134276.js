function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Title
  fill(0);
  textSize(18);
  text("Complete this 4 × 7 multiplication table grid:", 20, 30);
  
  // Grid setup
  let startX = 120;
  let startY = 80;
  let cellSize = 50;
  let rows = 8;
  let cols = 8;
  
  // Draw grid
  stroke(0);
  strokeWeight(2);
  
  for (let i = 0; i <= rows; i++) {
    line(startX, startY + i * cellSize, startX + cols * cellSize, startY + i * cellSize);
  }
  
  for (let j = 0; j <= cols; j++) {
    line(startX + j * cellSize, startY, startX + j * cellSize, startY + rows * cellSize);
  }
  
  // Fill in headers and values
  textAlign(CENTER, CENTER);
  textSize(16);
  fill(50, 50, 200);
  
  // Top row headers (1-7)
  for (let i = 1; i <= 7; i++) {
    text(i, startX + i * cellSize + cellSize/2, startY + cellSize/2);
  }
  
  // Left column headers (1-4)
  for (let i = 1; i <= 4; i++) {
    text(i, startX + cellSize/2, startY + i * cellSize + cellSize/2);
  }
  
  // Corner multiplication symbol
  textSize(20);
  text("×", startX + cellSize/2, startY + cellSize/2);
  
  // Fill in some example products
  textSize(14);
  fill(0);
  text("3", startX + 3.5 * cellSize, startY + 1.5 * cellSize); // 1×3
  text("7", startX + 7.5 * cellSize, startY + 1.5 * cellSize); // 1×7
  text("4", startX + 2.5 * cellSize, startY + 2.5 * cellSize); // 2×2
  text("12", startX + 6.5 * cellSize, startY + 2.5 * cellSize); // 2×6
  text("9", startX + 3.5 * cellSize, startY + 3.5 * cellSize); // 3×3
  text("21", startX + 7.5 * cellSize, startY + 3.5 * cellSize); // 3×7
  text("16", startX + 4.5 * cellSize, startY + 4.5 * cellSize); // 4×4
  text("20", startX + 5.5 * cellSize, startY + 4.5 * cellSize); // 4×5
  
  noLoop();
}
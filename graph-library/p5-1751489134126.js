function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Title
  fill(0);
  textSize(18);
  text("Complete this 6 × 8 multiplication table grid:", 20, 30);
  
  // Grid setup
  let startX = 100;
  let startY = 80;
  let cellSize = 45;
  let rows = 9;
  let cols = 9;
  
  // Draw grid
  stroke(0);
  strokeWeight(2);
  
  for (let i = 0; i <= rows; i++) {
    line(startX, startY + i * cellSize, startX + cols * cellSize, startY + i * cellSize);
  }
  
  for (let j = 0; j <= cols; j++) {
    line(startX + j * cellSize, startY, startX + j * cellSize, startY + rows * cellSize);
  }
  
  // Fill in headers and some values
  textAlign(CENTER, CENTER);
  textSize(16);
  fill(50, 50, 200);
  
  // Top row headers (1-8)
  for (let i = 1; i <= 8; i++) {
    text(i, startX + i * cellSize + cellSize/2, startY + cellSize/2);
  }
  
  // Left column headers (1-6)
  for (let i = 1; i <= 6; i++) {
    text(i, startX + cellSize/2, startY + i * cellSize + cellSize/2);
  }
  
  // Corner multiplication symbol
  textSize(20);
  text("×", startX + cellSize/2, startY + cellSize/2);
  
  // Fill in a few example products
  textSize(14);
  fill(0);
  text("2", startX + 1.5 * cellSize, startY + 1.5 * cellSize); // 1×2
  text("6", startX + 3.5 * cellSize, startY + 1.5 * cellSize); // 1×6
  text("8", startX + 4.5 * cellSize, startY + 2.5 * cellSize); // 2×4
  text("15", startX + 5.5 * cellSize, startY + 3.5 * cellSize); // 3×5
  text("28", startX + 7.5 * cellSize, startY + 4.5 * cellSize); // 4×7
  text("30", startX + 6.5 * cellSize, startY + 5.5 * cellSize); // 5×6
  text("48", startX + 8.5 * cellSize, startY + 6.5 * cellSize); // 6×8
  
  noLoop();
}
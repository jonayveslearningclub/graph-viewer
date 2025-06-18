function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("Complete this section of the multiplication table:", 20, 25);
  
  // Draw multiplication grid
  let startX = 200;
  let startY = 100;
  let cellSize = 45;
  
  // Draw grid lines
  stroke(0);
  strokeWeight(2);
  
  for (let i = 0; i <= 6; i++) {
    line(startX + i * cellSize, startY, startX + i * cellSize, startY + 6 * cellSize);
  }
  
  for (let i = 0; i <= 6; i++) {
    line(startX, startY + i * cellSize, startX + 6 * cellSize, startY + i * cellSize);
  }
  
  // Corner cell
  fill(220);
  noStroke();
  rect(startX, startY, cellSize, cellSize);
  
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(14);
  text("×", startX + cellSize/2, startY + cellSize/2);
  
  // Row headers (3, 7, 8)
  let rowNums = [3, 7, 8];
  for (let i = 0; i < 3; i++) {
    fill(255, 200, 200);
    noStroke();
    rect(startX, startY + (i + 1) * cellSize, cellSize, cellSize);
    
    fill(0);
    text(rowNums[i], startX + cellSize/2, startY + (i + 1) * cellSize + cellSize/2);
  }
  
  // Column headers (2, 4, 6, 9, 11)
  let colNums = [2, 4, 6, 9, 11];
  for (let i = 0; i < 5; i++) {
    fill(200, 255, 200);
    noStroke();
    rect(startX + (i + 1) * cellSize, startY, cellSize, cellSize);
    
    fill(0);
    text(colNums[i], startX + (i + 1) * cellSize + cellSize/2, startY + cellSize/2);
  }
  
  // Empty cells for students to fill in
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 5; col++) {
      fill(255, 255, 200);
      stroke(0);
      strokeWeight(1);
      rect(startX + (col + 1) * cellSize, startY + (row + 1) * cellSize, cellSize, cellSize);
    }
  }
  
  noLoop();
}
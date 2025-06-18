function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("Complete the multiplication table for 6:", 20, 25);
  
  // Draw the multiplication table grid
  let startX = 150;
  let startY = 80;
  let cellSize = 50;
  
  // Grid lines
  stroke(0);
  strokeWeight(2);
  
  // Draw vertical lines
  for (let i = 0; i <= 11; i++) {
    line(startX + i * cellSize, startY, startX + i * cellSize, startY + 11 * cellSize);
  }
  
  // Draw horizontal lines
  for (let i = 0; i <= 11; i++) {
    line(startX, startY + i * cellSize, startX + 11 * cellSize, startY + i * cellSize);
  }
  
  // Fill in headers
  fill(200, 200, 255);
  noStroke();
  rect(startX, startY, cellSize, cellSize);
  
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(18);
  text("×", startX + cellSize/2, startY + cellSize/2);
  
  // Fill in the 6 row header
  fill(255, 200, 200);
  noStroke();
  rect(startX, startY + 6 * cellSize, cellSize, cellSize);
  
  fill(0);
  text("6", startX + cellSize/2, startY + 6 * cellSize + cellSize/2);
  
  // Fill in column numbers (1-10)
  for (let i = 1; i <= 10; i++) {
    fill(200, 255, 200);
    noStroke();
    rect(startX + i * cellSize, startY, cellSize, cellSize);
    
    fill(0);
    text(i, startX + i * cellSize + cellSize/2, startY + cellSize/2);
  }
  
  // Leave the 6 times table row empty for students to fill
  for (let i = 1; i <= 10; i++) {
    fill(255, 255, 200);
    noStroke();
    rect(startX + i * cellSize, startY + 6 * cellSize, cellSize, cellSize);
  }
  
  noLoop();
}
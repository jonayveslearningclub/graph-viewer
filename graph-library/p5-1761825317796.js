function setup() {
  createCanvas(800, 600);
  background(240);
}

function draw() {
  // Title
  fill(0);
  textSize(16);
  text("Complete the table for the pattern 2n + 3:", 50, 30);
  
  // Draw table
  stroke(0);
  strokeWeight(2);
  
  // Table structure
  let tableX = 200;
  let tableY = 100;
  let cellWidth = 80;
  let cellHeight = 40;
  
  // Draw table grid
  for (let i = 0; i <= 3; i++) {
    line(tableX, tableY + i * cellHeight, tableX + 4 * cellWidth, tableY + i * cellHeight);
  }
  for (let i = 0; i <= 4; i++) {
    line(tableX + i * cellWidth, tableY, tableX + i * cellWidth, tableY + 3 * cellHeight);
  }
  
  // Table headers
  fill(200);
  rect(tableX, tableY, cellWidth, cellHeight);
  rect(tableX + cellWidth, tableY, cellWidth, cellHeight);
  rect(tableX + 2 * cellWidth, tableY, cellWidth, cellHeight);
  rect(tableX + 3 * cellWidth, tableY, cellWidth, cellHeight);
  
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(14);
  text("n", tableX + cellWidth/2, tableY + cellHeight/2);
  text("2n", tableX + 1.5 * cellWidth, tableY + cellHeight/2);
  text("2n + 3", tableX + 2.5 * cellWidth, tableY + cellHeight/2);
  text("Pattern", tableX + 3.5 * cellWidth, tableY + cellHeight/2);
  
  // Fill in some values
  let nValues = [1, 2];
  let twoNValues = [2, 4];
  let patternValues = [5, 7];
  
  for (let i = 0; i < nValues.length; i++) {
    text(nValues[i], tableX + cellWidth/2, tableY + (i + 1) * cellHeight + cellHeight/2);
    text(twoNValues[i], tableX + 1.5 * cellWidth, tableY + (i + 1) * cellHeight + cellHeight/2);
    text(patternValues[i], tableX + 2.5 * cellWidth, tableY + (i + 1) * cellHeight + cellHeight/2);
    text(patternValues[i], tableX + 3.5 * cellWidth, tableY + (i + 1) * cellHeight + cellHeight/2);
  }
  
  // Empty row for student to complete
  text("3", tableX + cellWidth/2, tableY + 3 * cellHeight + cellHeight/2);
  text("?", tableX + 1.5 * cellWidth, tableY + 3 * cellHeight + cellHeight/2);
  text("?", tableX + 2.5 * cellWidth, tableY + 3 * cellHeight + cellHeight/2);
  text("?", tableX + 3.5 * cellWidth, tableY + 3 * cellHeight + cellHeight/2);
  
  // Instructions
  textAlign(LEFT, TOP);
  textSize(12);
  text("Fill in the missing values when n = 3", 200, 280);
  text("Rule: Each term equals 2n + 3", 200, 300);
  
  noLoop();
}
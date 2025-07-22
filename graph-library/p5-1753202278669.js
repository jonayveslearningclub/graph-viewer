function setup() {
  createCanvas(800, 600);
  textAlign(CENTER, CENTER);
  textSize(16);
}

function draw() {
  background(240);
  
  // Question text
  fill(0);
  textAlign(LEFT, TOP);
  textSize(18);
  text("Find the pattern and determine what y equals when x = 7", 50, 30);
  
  // Create table
  let tableX = 200;
  let tableY = 100;
  let cellWidth = 80;
  let cellHeight = 50;
  
  // Table headers
  fill(200);
  rect(tableX, tableY, cellWidth, cellHeight);
  rect(tableX + cellWidth, tableY, cellWidth, cellHeight);
  
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(16);
  text("x", tableX + cellWidth/2, tableY + cellHeight/2);
  text("y", tableX + cellWidth + cellWidth/2, tableY + cellHeight/2);
  
  // Table data
  let xValues = [1, 2, 3, 4, 5];
  let yValues = [6, 11, 16, 21, 26];
  
  for(let i = 0; i < 5; i++) {
    fill(255);
    rect(tableX, tableY + (i+1) * cellHeight, cellWidth, cellHeight);
    rect(tableX + cellWidth, tableY + (i+1) * cellHeight, cellWidth, cellHeight);
    
    fill(0);
    text(xValues[i], tableX + cellWidth/2, tableY + (i+1) * cellHeight + cellHeight/2);
    text(yValues[i], tableX + cellWidth + cellWidth/2, tableY + (i+1) * cellHeight + cellHeight/2);
  }
  
  // Question mark for x = 7
  fill(255);
  rect(tableX, tableY + 6 * cellHeight, cellWidth, cellHeight);
  rect(tableX + cellWidth, tableY + 6 * cellHeight, cellWidth, cellHeight);
  
  fill(0);
  text("6", tableX + cellWidth/2, tableY + 6 * cellHeight + cellHeight/2);
  text("?", tableX + cellWidth + cellWidth/2, tableY + 6 * cellHeight + cellHeight/2);
  
  // Final row
  fill(255);
  rect(tableX, tableY + 7 * cellHeight, cellWidth, cellHeight);
  rect(tableX + cellWidth, tableY + 7 * cellHeight, cellWidth, cellHeight);
  
  fill(0);
  text("7", tableX + cellWidth/2, tableY + 7 * cellHeight + cellHeight/2);
  text("?", tableX + cellWidth + cellWidth/2, tableY + 7 * cellHeight + cellHeight/2);
  
  noLoop();
}
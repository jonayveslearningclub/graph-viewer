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
  text("Look at the pattern in the table. What rule connects x and y?", 50, 30);
  text("Find the missing y value when x = 9", 50, 55);
  
  // Create table
  let tableX = 150;
  let tableY = 120;
  let cellWidth = 90;
  let cellHeight = 55;
  
  // Table headers
  fill(180);
  rect(tableX, tableY, cellWidth, cellHeight);
  rect(tableX + cellWidth, tableY, cellWidth, cellHeight);
  
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(18);
  text("x", tableX + cellWidth/2, tableY + cellHeight/2);
  text("y", tableX + cellWidth + cellWidth/2, tableY + cellHeight/2);
  
  // Table data
  let xValues = [2, 4, 6, 8];
  let yValues = [7, 14, 21, 28];
  
  for(let i = 0; i < 4; i++) {
    fill(255);
    rect(tableX, tableY + (i+1) * cellHeight, cellWidth, cellHeight);
    rect(tableX + cellWidth, tableY + (i+1) * cellHeight, cellWidth, cellHeight);
    
    fill(0);
    text(xValues[i], tableX + cellWidth/2, tableY + (i+1) * cellHeight + cellHeight/2);
    text(yValues[i], tableX + cellWidth + cellWidth/2, tableY + (i+1) * cellHeight + cellHeight/2);
  }
  
  // Question mark for x = 9
  fill(255);
  rect(tableX, tableY + 5 * cellHeight, cellWidth, cellHeight);
  rect(tableX + cellWidth, tableY + 5 * cellHeight, cellWidth, cellHeight);
  
  fill(0);
  text("9", tableX + cellWidth/2, tableY + 5 * cellHeight + cellHeight/2);
  text("?", tableX + cellWidth + cellWidth/2, tableY + 5 * cellHeight + cellHeight/2);
  
  noLoop();
}
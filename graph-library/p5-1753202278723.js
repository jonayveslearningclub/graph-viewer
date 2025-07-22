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
  text("Study the pattern between x and y values in this table.", 50, 30);
  text("What is the value of y when x = 12?", 50, 55);
  
  // Create table
  let tableX = 180;
  let tableY = 110;
  let cellWidth = 85;
  let cellHeight = 45;
  
  // Table headers
  fill(190);
  rect(tableX, tableY, cellWidth, cellHeight);
  rect(tableX + cellWidth, tableY, cellWidth, cellHeight);
  
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(16);
  text("x", tableX + cellWidth/2, tableY + cellHeight/2);
  text("y", tableX + cellWidth + cellWidth/2, tableY + cellHeight/2);
  
  // Table data
  let xValues = [3, 5, 7, 9, 11];
  let yValues = [12, 20, 28, 36, 44];
  
  for(let i = 0; i < 5; i++) {
    fill(255);
    rect(tableX, tableY + (i+1) * cellHeight, cellWidth, cellHeight);
    rect(tableX + cellWidth, tableY + (i+1) * cellHeight, cellWidth, cellHeight);
    
    fill(0);
    text(xValues[i], tableX + cellWidth/2, tableY + (i+1) * cellHeight + cellHeight/2);
    text(yValues[i], tableX + cellWidth + cellWidth/2, tableY + (i+1) * cellHeight + cellHeight/2);
  }
  
  // Question mark for x = 12
  fill(255);
  rect(tableX, tableY + 6 * cellHeight, cellWidth, cellHeight);
  rect(tableX + cellWidth, tableY + 6 * cellHeight, cellWidth, cellHeight);
  
  fill(0);
  text("12", tableX + cellWidth/2, tableY + 6 * cellHeight + cellHeight/2);
  text("?", tableX + cellWidth + cellWidth/2, tableY + 6 * cellHeight + cellHeight/2);
  
  noLoop();
}
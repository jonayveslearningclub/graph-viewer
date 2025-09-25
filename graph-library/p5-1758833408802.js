function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  textSize(16);
  fill(0);
  text("Compare these representations of five-digit numbers:", 20, 30);
  text("Which number is greater: 47,382 or 47,328?", 20, 55);
  
  // Number line from 47,300 to 47,400
  let lineY = 150;
  let lineStartX = 100;
  let lineEndX = 700;
  
  // Draw main number line
  stroke(0);
  strokeWeight(2);
  line(lineStartX, lineY, lineEndX, lineY);
  
  // Draw tick marks and labels
  textAlign(CENTER);
  textSize(12);
  for (let i = 0; i <= 10; i++) {
    let x = lineStartX + (i * (lineEndX - lineStartX) / 10);
    let value = 47300 + (i * 10);
    
    // Tick marks
    line(x, lineY - 5, x, lineY + 5);
    
    // Labels
    if (i % 2 === 0) {
      text(value, x, lineY + 20);
    }
  }
  
  // Mark the two numbers on the line
  let pos1 = lineStartX + ((47382 - 47300) / 100) * (lineEndX - lineStartX);
  let pos2 = lineStartX + ((47328 - 47300) / 100) * (lineEndX - lineStartX);
  
  // Point for 47,382
  fill(255, 0, 0);
  noStroke();
  ellipse(pos1, lineY, 8, 8);
  fill(255, 0, 0);
  textAlign(CENTER);
  text("47,382", pos1, lineY - 15);
  
  // Point for 47,328
  fill(0, 0, 255);
  ellipse(pos2, lineY, 8, 8);
  fill(0, 0, 255);
  text("47,328", pos2, lineY - 15);
  
  // Expanded form section
  fill(0);
  textAlign(LEFT);
  textSize(14);
  text("Write each number in expanded form:", 20, 220);
  
  text("47,382 = _____ + _____ + _____ + _____ + _____", 20, 250);
  text("47,328 = _____ + _____ + _____ + _____ + _____", 20, 280);
  
  // Word form section
  text("Write each number in word form:", 20, 320);
  text("47,382: _________________________________", 20, 350);
  text("47,328: _________________________________", 20, 380);
  
  // Place value chart
  text("Complete the place value chart:", 20, 420);
  
  // Draw table
  stroke(0);
  strokeWeight(1);
  let tableX = 20;
  let tableY = 440;
  let cellWidth = 60;
  let cellHeight = 30;
  
  // Headers
  fill(220);
  rect(tableX, tableY, cellWidth, cellHeight);
  rect(tableX + cellWidth, tableY, cellWidth, cellHeight);
  rect(tableX + 2*cellWidth, tableY, cellWidth, cellHeight);
  rect(tableX + 3*cellWidth, tableY, cellWidth, cellHeight);
  rect(tableX + 4*cellWidth, tableY, cellWidth, cellHeight);
  rect(tableX + 5*cellWidth, tableY, cellWidth, cellHeight);
  
  fill(0);
  textAlign(CENTER);
  textSize(10);
  text("Number", tableX + cellWidth/2, tableY + 20);
  text("Ten Thousands", tableX + 1.5*cellWidth, tableY + 15);
  text("Thousands", tableX + 2.5*cellWidth, tableY + 20);
  text("Hundreds", tableX + 3.5*cellWidth, tableY + 20);
  text("Tens", tableX + 4.5*cellWidth, tableY + 20);
  text("Ones", tableX + 5.5*cellWidth, tableY + 20);
  
  // Rows for numbers
  fill(255);
  rect(tableX, tableY + cellHeight, cellWidth, cellHeight);
  rect(tableX + cellWidth, tableY + cellHeight, cellWidth, cellHeight);
  rect(tableX + 2*cellWidth, tableY + cellHeight, cellWidth, cellHeight);
  rect(tableX + 3*cellWidth, tableY + cellHeight, cellWidth, cellHeight);
  rect(tableX + 4*cellWidth, tableY + cellHeight, cellWidth, cellHeight);
  rect(tableX + 5*cellWidth, tableY + cellHeight, cellWidth, cellHeight);
  
  rect(tableX, tableY + 2*cellHeight, cellWidth, cellHeight);
  rect(tableX + cellWidth, tableY + 2*cellHeight, cellWidth, cellHeight);
  rect(tableX + 2*cellWidth, tableY + 2*cellHeight, cellWidth, cellHeight);
  rect(tableX + 3*cellWidth, tableY + 2*cellHeight, cellWidth, cellHeight);
  rect(tableX + 4*cellWidth, tableY + 2*cellHeight, cellWidth, cellHeight);
  rect(tableX + 5*cellWidth, tableY + 2*cellHeight, cellWidth, cellHeight);
  
  fill(0);
  text("47,382", tableX + cellWidth/2, tableY + cellHeight + 20);
  text("47,328", tableX + cellWidth/2, tableY + 2*cellHeight + 20);
  
  noLoop();
}
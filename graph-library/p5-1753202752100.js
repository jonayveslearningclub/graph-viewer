function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("1. Examine the relationship between x and y in this table.", 50, 40);
  text("2. What equation shows the pattern connecting these values?", 50, 70);
  
  // Draw table border
  stroke(0);
  strokeWeight(2);
  rect(220, 120, 360, 300);
  
  // Draw table grid lines
  strokeWeight(1);
  // Vertical line to separate x and y columns
  line(400, 120, 400, 420);
  // Horizontal lines for rows
  for(let i = 1; i <= 7; i++) {
    line(220, 120 + i * 40, 580, 120 + i * 40);
  }
  
  // Table headers
  fill(0);
  textSize(24);
  textAlign(CENTER);
  text("x", 310, 150);
  text("y", 490, 150);
  
  // Table data
  textSize(20);
  // x values
  text("2", 310, 190);
  text("4", 310, 230);
  text("6", 310, 270);
  text("8", 310, 310);
  text("10", 310, 350);
  text("12", 310, 390);
  
  // y values
  text("1", 490, 190);
  text("2", 490, 230);
  text("3", 490, 270);
  text("4", 490, 310);
  text("5", 490, 350);
  text("6", 490, 390);
  
  // Instructions
  textSize(16);
  textAlign(LEFT);
  fill(50);
  text("Write the rule as: y = ___", 280, 470);
  
  noLoop();
}
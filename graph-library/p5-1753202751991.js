function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("1. Look at the pattern in this table. What equation describes the rule?", 50, 40);
  text("2. Based on the x and y values shown, write the equation y = ?", 50, 70);
  
  // Draw table border
  stroke(0);
  strokeWeight(2);
  rect(200, 120, 400, 300);
  
  // Draw table grid lines
  strokeWeight(1);
  // Vertical line to separate x and y columns
  line(400, 120, 400, 420);
  // Horizontal lines for rows
  for(let i = 1; i <= 7; i++) {
    line(200, 120 + i * 40, 600, 120 + i * 40);
  }
  
  // Table headers
  fill(0);
  textSize(24);
  textAlign(CENTER);
  text("x", 300, 150);
  text("y", 500, 150);
  
  // Table data
  textSize(20);
  // x values
  text("1", 300, 190);
  text("2", 300, 230);
  text("3", 300, 270);
  text("4", 300, 310);
  text("5", 300, 350);
  text("6", 300, 390);
  
  // y values
  text("7", 500, 190);
  text("14", 500, 230);
  text("21", 500, 270);
  text("28", 500, 310);
  text("35", 500, 350);
  text("42", 500, 390);
  
  // Instructions
  textSize(16);
  textAlign(LEFT);
  fill(50);
  text("Write your answer as: y = ___", 250, 470);
  
  noLoop();
}
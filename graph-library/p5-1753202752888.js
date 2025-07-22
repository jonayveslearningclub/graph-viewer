function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("1. Study the pattern in this x-y table. What is the rule?", 50, 40);
  text("2. Find the equation that connects x and y values in the table below.", 50, 70);
  
  // Draw table border
  stroke(0);
  strokeWeight(2);
  rect(180, 120, 440, 340);
  
  // Draw table grid lines
  strokeWeight(1);
  // Vertical line to separate x and y columns
  line(400, 120, 400, 460);
  // Horizontal lines for rows
  for(let i = 1; i <= 8; i++) {
    line(180, 120 + i * 40, 620, 120 + i * 40);
  }
  
  // Table headers
  fill(0);
  textSize(24);
  textAlign(CENTER);
  text("x", 290, 150);
  text("y", 510, 150);
  
  // Table data
  textSize(20);
  // x values
  text("0", 290, 190);
  text("1", 290, 230);
  text("2", 290, 270);
  text("3", 290, 310);
  text("4", 290, 350);
  text("5", 290, 390);
  text("6", 290, 430);
  
  // y values
  text("3", 510, 190);
  text("8", 510, 230);
  text("13", 510, 270);
  text("18", 510, 310);
  text("23", 510, 350);
  text("28", 510, 390);
  text("33", 510, 430);
  
  // Instructions
  textSize(16);
  textAlign(LEFT);
  fill(50);
  text("Express your answer in the form: y = ___", 250, 510);
  
  noLoop();
}
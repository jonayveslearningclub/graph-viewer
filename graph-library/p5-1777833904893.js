function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Title
  fill(0);
  textSize(16);
  text("Calculate the rate of change using rise over run (y₂ - y₁) / (x₂ - x₁)", 50, 30);
  text("A pattern begins at term 2 with value 6 and ends at term 6 with value 14.", 50, 50);
  
  // Set up coordinate system for Quadrant 1 only
  let margin = 80;
  let gridWidth = 500;
  let gridHeight = 400;
  let originX = margin;
  let originY = height - margin;
  
  // Draw grid lines
  stroke(220);
  strokeWeight(1);
  
  // Vertical grid lines
  for (let i = 0; i <= 7; i++) {
    let x = originX + (i * gridWidth / 7);
    line(x, originY, x, originY - gridHeight);
  }
  
  // Horizontal grid lines
  for (let i = 0; i <= 7; i++) {
    let y = originY - (i * gridHeight / 7);
    line(originX, y, originX + gridWidth, y);
  }
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(originX, originY, originX + gridWidth, originY); // x-axis
  line(originX, originY, originX, originY - gridHeight); // y-axis
  
  // Label x-axis (Term Number)
  fill(0);
  textSize(12);
  textAlign(CENTER);
  for (let i = 0; i <= 7; i++) {
    let x = originX + (i * gridWidth / 7);
    text(i, x, originY + 20);
  }
  
  // Label y-axis (Term Value)
  textAlign(CENTER);
  for (let i = 0; i <= 16; i += 2) {
    let y = originY - (i * gridHeight / 16);
    text(i, originX - 20, y + 5);
  }
  
  // Axis labels
  textSize(14);
  text("Term Number", originX + gridWidth/2, originY + 50);
  
  push();
  translate(20, originY - gridHeight/2);
  rotate(-PI/2);
  text("Term Value", 0, 0);
  pop();
  
  // Plot points
  fill(255, 0, 0);
  noStroke();
  let x1 = originX + (2 * gridWidth / 7);
  let y1 = originY - (6 * gridHeight / 16);
  let x2 = originX + (6 * gridWidth / 7);
  let y2 = originY - (14 * gridHeight / 16);
  
  circle(x1, y1, 10);
  circle(x2, y2, 10);
  
  // Draw line connecting points
  stroke(0, 0, 255);
  strokeWeight(2);
  line(x1, y1, x2, y2);
  
  // Label points
  fill(0);
  textAlign(CENTER);
  textSize(12);
  text("(2, 6)", x1, y1 - 15);
  text("(6, 14)", x2, y2 - 15);
  
  noLoop();
}
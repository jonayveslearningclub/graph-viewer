function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  textSize(16);
  fill(0);
  text("Find the rate of change using rise over run formula: (y₂ - y₁) / (x₂ - x₁)", 20, 30);
  text("The sequence starts at (0, 3) and goes to (5, 18). What is the rate?", 20, 50);
  
  // Set up coordinate system - Quadrant 1 only
  let originX = 80;
  let originY = 520;
  let gridSize = 50;
  
  // Draw grid lines
  stroke(200);
  strokeWeight(1);
  for (let i = 0; i <= 8; i++) {
    line(originX + i * gridSize, originY, originX + i * gridSize, originY - 8 * gridSize);
    line(originX, originY - i * gridSize, originX + 8 * gridSize, originY - i * gridSize);
  }
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(originX, originY, originX + 8 * gridSize, originY); // x-axis
  line(originX, originY, originX, originY - 8 * gridSize); // y-axis
  
  // Label axes
  textSize(14);
  fill(0);
  text("Term Number", originX + 3 * gridSize, originY + 30);
  push();
  translate(originX - 40, originY - 3 * gridSize);
  rotate(-PI/2);
  text("Term Value", 0, 0);
  pop();
  
  // Number labels
  textAlign(CENTER, TOP);
  for (let i = 0; i <= 7; i++) {
    text(i, originX + i * gridSize, originY + 5);
  }
  
  textAlign(RIGHT, CENTER);
  for (let i = 0; i <= 20; i += 2) {
    text(i, originX - 5, originY - (i/2) * gridSize);
  }
  
  // Plot points
  fill(255, 0, 0);
  noStroke();
  ellipse(originX, originY - 1.5 * gridSize, 8, 8); // Point (0, 3)
  ellipse(originX + 5 * gridSize, originY - 9 * gridSize, 8, 8); // Point (5, 18)
  
  // Label points
  fill(0);
  textAlign(CENTER);
  text("(0, 3)", originX - 20, originY - 1.5 * gridSize);
  text("(5, 18)", originX + 5 * gridSize + 25, originY - 9 * gridSize);
  
  // Draw line connecting points
  stroke(0, 0, 255);
  strokeWeight(2);
  line(originX, originY - 1.5 * gridSize, originX + 5 * gridSize, originY - 9 * gridSize);
  
  noLoop();
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background(255);
  
  // Question text
  textSize(24);
  fill(0);
  textAlign(LEFT);
  text("1. Simplify: (8 + 5 - 3) / (2 + 4)", 50, 50);
  
  // Draw the fraction visualization
  let centerX = width / 2;
  let centerY = height / 2;
  
  // Draw fraction bar
  stroke(0);
  strokeWeight(4);
  line(centerX - 150, centerY, centerX + 150, centerY);
  
  // Numerator: 8 + 5 - 3
  textSize(36);
  fill(0);
  textAlign(CENTER);
  text("8 + 5 - 3", centerX, centerY - 40);
  
  // Denominator: 2 + 4
  text("2 + 4", centerX, centerY + 60);
  
  // Visual representation of numerator calculation
  textSize(20);
  fill(100);
  text("Numerator: Add and subtract from left to right", centerX, centerY - 100);
  
  // Visual representation of denominator calculation
  text("Denominator: Add the numbers", centerX, centerY + 120);
  
  // Draw boxes to show the operations
  noFill();
  stroke(150);
  strokeWeight(2);
  rect(centerX - 180, centerY - 70, 360, 50);
  rect(centerX - 180, centerY + 20, 360, 50);
  
  noLoop();
}
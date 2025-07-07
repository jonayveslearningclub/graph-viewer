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
  text("3. Evaluate: (6 + 9 - 2) / (4 + 3)", 50, 50);
  
  // Draw the fraction visualization
  let centerX = width / 2;
  let centerY = height / 2;
  
  // Draw fraction bar
  stroke(0);
  strokeWeight(4);
  line(centerX - 160, centerY, centerX + 160, centerY);
  
  // Numerator: 6 + 9 - 2
  textSize(36);
  fill(0);
  textAlign(CENTER);
  text("6 + 9 - 2", centerX, centerY - 40);
  
  // Denominator: 4 + 3
  text("4 + 3", centerX, centerY + 60);
  
  // Draw operation symbols with colors
  textSize(28);
  fill(200, 0, 0);
  text("+", centerX - 80, centerY - 40);
  text("-", centerX + 20, centerY - 40);
  fill(0, 0, 200);
  text("+", centerX - 30, centerY + 60);
  
  // Instructions
  textSize(20);
  fill(0);
  text("Follow order of operations:", centerX, centerY - 120);
  text("Work from left to right for addition and subtraction", centerX, centerY - 95);
  
  // Draw helpful boxes around each part
  noFill();
  stroke(100);
  strokeWeight(2);
  rect(centerX - 190, centerY - 70, 380, 50);
  rect(centerX - 190, centerY + 20, 380, 50);
  
  // Add dotted lines to show the work area
  stroke(150);
  strokeWeight(1);
  for(let i = 0; i < 5; i++) {
    line(50, centerY + 150 + i * 30, width - 50, centerY + 150 + i * 30);
  }
  
  textSize(16);
  fill(100);
  textAlign(LEFT);
  text("Show your work here:", 50, centerY + 140);
  
  noLoop();
}
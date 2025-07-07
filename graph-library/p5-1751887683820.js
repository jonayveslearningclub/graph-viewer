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
  text("2. Calculate: (12 - 7 + 4) / (3 + 2 + 1)", 50, 50);
  
  // Draw the fraction visualization
  let centerX = width / 2;
  let centerY = height / 2;
  
  // Draw fraction bar
  stroke(0);
  strokeWeight(4);
  line(centerX - 200, centerY, centerX + 200, centerY);
  
  // Numerator: 12 - 7 + 4
  textSize(36);
  fill(0);
  textAlign(CENTER);
  text("12 - 7 + 4", centerX, centerY - 40);
  
  // Denominator: 3 + 2 + 1
  text("3 + 2 + 1", centerX, centerY + 60);
  
  // Step-by-step breakdown boxes
  textSize(18);
  fill(50);
  text("Step 1: Calculate the numerator", centerX - 300, centerY - 80);
  text("Step 2: Calculate the denominator", centerX - 300, centerY + 100);
  text("Step 3: Divide the results", centerX - 300, centerY + 140);
  
  // Draw visual blocks for numerator
  fill(200, 100, 100);
  noStroke();
  for(let i = 0; i < 12; i++) {
    rect(100 + i * 15, 150, 12, 12);
  }
  
  // Draw visual blocks for denominator
  fill(100, 100, 200);
  for(let i = 0; i < 6; i++) {
    rect(100 + i * 15, 180, 12, 12);
  }
  
  textSize(16);
  fill(0);
  textAlign(LEFT);
  text("Numerator blocks", 100, 140);
  text("Denominator blocks", 100, 205);
  
  noLoop();
}
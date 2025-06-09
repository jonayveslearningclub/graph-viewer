function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("2. Which shape has a greater area: rectangle PQRS or triangle JKL?", 20, 30);
  text("Rectangle PQRS has dimensions 12 by 4. Triangle JKL has base 10 and height 8.", 20, 50);
  
  // Draw rectangle PQRS
  stroke(0);
  strokeWeight(2);
  fill(180, 255, 180);
  rect(80, 120, 240, 80); // 12 units × 4 units scaled by 20
  
  // Label rectangle vertices
  fill(0);
  textSize(14);
  text("P", 70, 115);
  text("Q", 330, 115);
  text("R", 330, 215);
  text("S", 70, 215);
  
  // Label rectangle dimensions
  text("12", 190, 110);
  text("4", 60, 160);
  
  // Draw triangle JKL
  stroke(0);
  strokeWeight(2);
  fill(255, 180, 255);
  triangle(450, 280, 650, 280, 550, 120); // Triangle with base 10, height 8
  
  // Label triangle vertices
  fill(0);
  textSize(14);
  text("J", 440, 295);
  text("K", 655, 295);
  text("L", 555, 110);
  
  // Label triangle measurements
  text("10", 545, 300);
  text("8", 520, 200);
  
  // Draw height line (dashed)
  stroke(100);
  strokeWeight(1);
  for(int i = 120; i < 280; i += 10) {
    line(550, i, 550, i + 5);
  }
  
  noLoop();
}
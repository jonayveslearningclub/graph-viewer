function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Question text
  fill(0);
  textSize(18);
  text("3. Find all shapes that have no straight sides.", 10, 25);
  
  // Draw mix of shapes emphasizing curved vs straight sides
  stroke(0);
  strokeWeight(2);
  fill(255, 200, 200);
  
  // Row 1
  // Circle (no straight sides)
  ellipse(90, 85, 80, 80);
  text("A", 85, 135);
  
  // Square (all straight sides)
  rect(160, 60, 60, 60);
  text("B", 185, 135);
  
  // Triangle (all straight sides)
  triangle(250, 110, 300, 60, 350, 110);
  text("C", 295, 135);
  
  // Oval (no straight sides)
  ellipse(450, 85, 100, 60);
  text("D", 445, 135);
  
  // Pentagon (all straight sides)
  beginShape();
  vertex(540, 70);
  vertex(570, 60);
  vertex(590, 90);
  vertex(570, 110);
  vertex(540, 110);
  endShape(CLOSE);
  text("E", 560, 135);
  
  // Row 2
  // Rectangle (all straight sides)
  rect(40, 170, 100, 50);
  text("F", 85, 245);
  
  // Circle (no straight sides)
  ellipse(220, 195, 70, 70);
  text("G", 215, 245);
  
  // Trapezoid (all straight sides)
  quad(290, 170, 360, 170, 340, 220, 310, 220);
  text("H", 325, 245);
  
  // Ellipse (no straight sides)
  ellipse(450, 195, 80, 90);
  text("I", 445, 245);
  
  // Hexagon (all straight sides)
  beginShape();
  vertex(540, 170);
  vertex(570, 180);
  vertex(570, 200);
  vertex(540, 220);
  vertex(510, 200);
  vertex(510, 180);
  endShape(CLOSE);
  text("J", 535, 245);
  
  // Row 3
  // Parallelogram (all straight sides)
  quad(50, 280, 120, 280, 140, 330, 70, 330);
  text("K", 95, 355);
  
  // Oval (no straight sides)
  ellipse(220, 305, 90, 50);
  text("L", 215, 355);
  
  // Rhombus (all straight sides)
  quad(345, 280, 375, 300, 345, 330, 315, 300);
  text("M", 340, 355);
  
  // Circle (no straight sides)
  ellipse(450, 305, 85, 85);
  text("N", 445, 355);
  
  // Right triangle (all straight sides)
  triangle(540, 280, 540, 330, 590, 330);
  text("O", 560, 355);
  
  noLoop();
}
function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Question text
  fill(0);
  textSize(18);
  text("1. Identify all shapes with exactly 4 sides and at least one right angle.", 10, 25);
  
  // Draw 15 different shapes
  stroke(0);
  strokeWeight(2);
  fill(200, 200, 255);
  
  // Row 1 - 5 shapes
  // Rectangle (4 sides, right angles)
  rect(50, 60, 80, 50);
  text("A", 85, 135);
  
  // Circle (no straight sides)
  ellipse(200, 85, 70, 70);
  text("B", 195, 135);
  
  // Triangle
  triangle(280, 110, 330, 60, 380, 110);
  text("C", 325, 135);
  
  // Square (4 sides, right angles)
  rect(420, 60, 60, 60);
  text("D", 445, 135);
  
  // Pentagon
  beginShape();
  vertex(520, 70);
  vertex(560, 60);
  vertex(580, 90);
  vertex(560, 110);
  vertex(520, 110);
  endShape(CLOSE);
  text("E", 545, 135);
  
  // Row 2 - 5 shapes
  // Parallelogram (4 sides, parallel sides)
  quad(50, 170, 120, 170, 140, 220, 70, 220);
  text("F", 95, 245);
  
  // Oval (no straight sides)
  ellipse(200, 195, 90, 60);
  text("G", 195, 245);
  
  // Trapezoid (4 sides, one pair parallel)
  quad(280, 170, 360, 170, 340, 220, 300, 220);
  text("H", 320, 245);
  
  // Rhombus (4 sides, parallel sides)
  quad(450, 170, 480, 190, 450, 220, 420, 190);
  text("I", 445, 245);
  
  // Hexagon
  beginShape();
  vertex(540, 170);
  vertex(560, 180);
  vertex(560, 200);
  vertex(540, 220);
  vertex(520, 200);
  vertex(520, 180);
  endShape(CLOSE);
  text("J", 535, 245);
  
  // Row 3 - 5 shapes
  // Right triangle
  triangle(50, 270, 50, 330, 120, 330);
  text("K", 75, 355);
  
  // Rectangle (4 sides, right angles)
  rect(160, 270, 100, 40);
  text("L", 205, 355);
  
  // Irregular quadrilateral with right angle
  quad(280, 270, 350, 280, 340, 330, 290, 330);
  text("M", 315, 355);
  
  // Circle (no straight sides)
  ellipse(450, 300, 80, 80);
  text("N", 445, 355);
  
  // Square (4 sides, right angles)
  rect(520, 280, 50, 50);
  text("O", 540, 355);
  
  noLoop();
}
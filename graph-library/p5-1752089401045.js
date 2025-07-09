function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Question text
  fill(0);
  textSize(18);
  text("2. Count how many shapes have parallel sides.", 10, 25);
  
  // Draw shapes with focus on parallel sides
  stroke(0);
  strokeWeight(2);
  fill(180, 255, 180);
  
  // Row 1
  // Rectangle (parallel sides)
  rect(40, 60, 90, 55);
  text("A", 80, 135);
  
  // Triangle (no parallel sides)
  triangle(180, 115, 230, 60, 280, 115);
  text("B", 225, 135);
  
  // Parallelogram (parallel sides)
  quad(320, 60, 390, 60, 410, 115, 340, 115);
  text("C", 365, 135);
  
  // Circle (no straight sides)
  ellipse(500, 87, 65, 65);
  text("D", 495, 135);
  
  // Trapezoid (one pair parallel)
  quad(580, 60, 640, 60, 660, 115, 560, 115);
  text("E", 610, 135);
  
  // Row 2
  // Pentagon (no parallel sides)
  beginShape();
  vertex(65, 170);
  vertex(95, 160);
  vertex(115, 190);
  vertex(95, 220);
  vertex(65, 220);
  endShape(CLOSE);
  text("F", 85, 245);
  
  // Square (parallel sides)
  rect(180, 170, 70, 70);
  text("G", 210, 245);
  
  // Rhombus (parallel sides)
  quad(365, 170, 395, 190, 365, 220, 335, 190);
  text("H", 360, 245);
  
  // Oval (no straight sides)
  ellipse(500, 195, 85, 55);
  text("I", 495, 245);
  
  // Hexagon (parallel sides)
  beginShape();
  vertex(590, 170);
  vertex(620, 180);
  vertex(620, 200);
  vertex(590, 220);
  vertex(560, 200);
  vertex(560, 180);
  endShape(CLOSE);
  text("J", 585, 245);
  
  // Row 3
  // Right triangle (no parallel sides)
  triangle(40, 280, 40, 340, 110, 340);
  text("K", 65, 365);
  
  // Rectangle (parallel sides)
  rect(160, 280, 110, 45);
  text("L", 210, 365);
  
  // Irregular quadrilateral (no parallel sides)
  quad(320, 280, 380, 285, 370, 340, 310, 335);
  text("M", 345, 365);
  
  // Circle (no straight sides)
  ellipse(500, 310, 75, 75);
  text("N", 495, 365);
  
  // Parallelogram (parallel sides)
  quad(560, 280, 620, 280, 640, 340, 580, 340);
  text("O", 600, 365);
  
  noLoop();
}
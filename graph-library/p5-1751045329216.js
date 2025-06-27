function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  // Question text
  fill(0);
  textSize(20);
  text("1. Which shapes have exactly 4 sides and at least one right angle?", 50, 40);
  
  // Draw 14 different shapes
  stroke(0);
  strokeWeight(2);
  fill(200, 220, 255);
  
  // Shape 1: Rectangle
  rect(80, 80, 60, 40);
  fill(0);
  textSize(14);
  text("A", 105, 105);
  
  // Shape 2: Circle
  fill(255, 200, 200);
  ellipse(220, 100, 50, 50);
  fill(0);
  text("B", 215, 105);
  
  // Shape 3: Right triangle
  fill(200, 255, 200);
  triangle(300, 120, 300, 80, 350, 120);
  fill(0);
  text("C", 320, 105);
  
  // Shape 4: Square
  fill(255, 255, 200);
  rect(400, 80, 40, 40);
  fill(0);
  text("D", 415, 105);
  
  // Shape 5: Pentagon
  fill(255, 200, 255);
  beginShape();
  vertex(520, 80);
  vertex(540, 90);
  vertex(535, 115);
  vertex(505, 115);
  vertex(500, 90);
  endShape(CLOSE);
  fill(0);
  text("E", 515, 105);
  
  // Shape 6: Parallelogram
  fill(200, 255, 255);
  quad(80, 180, 130, 180, 140, 220, 90, 220);
  fill(0);
  text("F", 110, 205);
  
  // Shape 7: Oval
  fill(255, 180, 180);
  ellipse(220, 200, 70, 40);
  fill(0);
  text("G", 215, 205);
  
  // Shape 8: Trapezoid
  fill(180, 255, 180);
  quad(300, 180, 350, 180, 340, 220, 310, 220);
  fill(0);
  text("H", 320, 205);
  
  // Shape 9: Rhombus
  fill(255, 255, 180);
  quad(420, 180, 440, 200, 420, 220, 400, 200);
  fill(0);
  text("I", 415, 205);
  
  // Shape 10: Hexagon
  fill(255, 180, 255);
  beginShape();
  vertex(520, 180);
  vertex(535, 190);
  vertex(535, 210);
  vertex(520, 220);
  vertex(505, 210);
  vertex(505, 190);
  endShape(CLOSE);
  fill(0);
  text("J", 515, 205);
  
  // Shape 11: L-shape (has right angles)
  fill(180, 200, 255);
  beginShape();
  vertex(80, 280);
  vertex(120, 280);
  vertex(120, 300);
  vertex(100, 300);
  vertex(100, 320);
  vertex(80, 320);
  endShape(CLOSE);
  fill(0);
  text("K", 95, 305);
  
  // Shape 12: Triangle (scalene)
  fill(200, 180, 255);
  triangle(200, 280, 240, 280, 220, 320);
  fill(0);
  text("L", 215, 300);
  
  // Shape 13: Arrow shape
  fill(180, 255, 200);
  beginShape();
  vertex(320, 290);
  vertex(340, 280);
  vertex(340, 285);
  vertex(350, 285);
  vertex(350, 295);
  vertex(340, 295);
  vertex(340, 300);
  vertex(320, 290);
  endShape(CLOSE);
  fill(0);
  text("M", 330, 295);
  
  // Shape 14: Curved shape
  fill(255, 200, 180);
  beginShape();
  vertex(420, 280);
  bezierVertex(440, 270, 460, 290, 450, 310);
  bezierVertex(430, 320, 410, 300, 420, 280);
  endShape();
  fill(0);
  text("N", 430, 295);
  
  noLoop();
}
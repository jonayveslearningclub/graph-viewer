function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  // Question text
  fill(0);
  textSize(20);
  text("3. Which shapes appear to have right angles but are NOT rectangles or squares?", 50, 40);
  
  // Draw 14 different shapes
  stroke(0);
  strokeWeight(2);
  
  // Shape 1: Right triangle
  fill(200, 220, 255);
  triangle(100, 120, 100, 80, 140, 120);
  fill(0);
  textSize(14);
  text("A", 110, 105);
  
  // Shape 2: Circle
  fill(255, 200, 200);
  ellipse(220, 100, 50, 50);
  fill(0);
  text("B", 215, 105);
  
  // Shape 3: Scalene triangle
  fill(200, 255, 200);
  triangle(300, 120, 280, 80, 350, 90);
  fill(0);
  text("C", 310, 105);
  
  // Shape 4: Square
  fill(255, 255, 200);
  rect(400, 80, 40, 40);
  fill(0);
  text("D", 415, 105);
  
  // Shape 5: Diamond
  fill(255, 200, 255);
  quad(520, 80, 540, 100, 520, 120, 500, 100);
  fill(0);
  text("E", 515, 105);
  
  // Shape 6: L-shaped figure
  fill(200, 255, 255);
  beginShape();
  vertex(80, 180);
  vertex(110, 180);
  vertex(110, 200);
  vertex(100, 200);
  vertex(100, 220);
  vertex(80, 220);
  endShape(CLOSE);
  fill(0);
  text("F", 90, 205);
  
  // Shape 7: Curved shape
  fill(255, 180, 180);
  beginShape();
  vertex(200, 180);
  bezierVertex(240, 170, 250, 210, 220, 220);
  bezierVertex(190, 210, 180, 190, 200, 180);
  endShape();
  fill(0);
  text("G", 215, 205);
  
  // Shape 8: Trapezoid with right angles
  fill(180, 255, 180);
  quad(300, 180, 350, 180, 340, 220, 300, 220);
  fill(0);
  text("H", 320, 205);
  
  // Shape 9: Rectangle
  fill(255, 255, 180);
  rect(400, 180, 50, 40);
  fill(0);
  text("I", 420, 205);
  
  // Shape 10: Regular hexagon
  fill(255, 180, 255);
  beginShape();
  let cx = 520, cy = 200, r = 25;
  for(let i = 0; i < 6; i++) {
    let angle = i * PI / 3;
    vertex(cx + r * cos(angle), cy + r * sin(angle));
  }
  endShape(CLOSE);
  fill(0);
  text("J", 515, 205);
  
  // Shape 11: T-shape
  fill(180, 200, 255);
  beginShape();
  vertex(90, 280);
  vertex(130, 280);
  vertex(130, 300);
  vertex(115, 300);
  vertex(115, 320);
  vertex(105, 320);
  vertex(105, 300);
  vertex(90, 300);
  endShape(CLOSE);
  fill(0);
  text("K", 105, 305);
  
  // Shape 12: Isosceles triangle
  fill(200, 180, 255);
  triangle(220, 280, 200, 320, 240, 320);
  fill(0);
  text("L", 215, 310);
  
  // Shape 13: House shape (pentagon with right angles)
  fill(180, 255, 200);
  beginShape();
  vertex(310, 280);
  vertex(350, 280);
  vertex(350, 310);
  vertex(330, 320);
  vertex(310, 310);
  endShape(CLOSE);
  fill(0);
  text("M", 325, 305);
  
  // Shape 14: Plus sign
  fill(255, 200, 180);
  beginShape();
  vertex(425, 285);
  vertex(435, 285);
  vertex(435, 295);
  vertex(445, 295);
  vertex(445, 305);
  vertex(435, 305);
  vertex(435, 315);
  vertex(425, 315);
  vertex(425, 305);
  vertex(415, 305);
  vertex(415, 295);
  vertex(425, 295);
  endShape(CLOSE);
  fill(0);
  text("N", 425, 305);
  
  noLoop();
}
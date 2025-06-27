function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  // Question text
  fill(0);
  textSize(20);
  text("2. Count how many shapes have parallel sides.", 50, 40);
  
  // Draw 14 different shapes
  stroke(0);
  strokeWeight(2);
  
  // Shape 1: Regular hexagon
  fill(200, 220, 255);
  beginShape();
  let cx1 = 110, cy1 = 100, r1 = 25;
  for(let i = 0; i < 6; i++) {
    let angle = i * PI / 3;
    vertex(cx1 + r1 * cos(angle), cy1 + r1 * sin(angle));
  }
  endShape(CLOSE);
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
  
  // Shape 4: Rectangle
  fill(255, 255, 200);
  rect(400, 80, 50, 40);
  fill(0);
  text("D", 420, 105);
  
  // Shape 5: Star
  fill(255, 200, 255);
  beginShape();
  vertex(520, 85);
  vertex(525, 95);
  vertex(535, 95);
  vertex(528, 102);
  vertex(530, 112);
  vertex(520, 107);
  vertex(510, 112);
  vertex(512, 102);
  vertex(505, 95);
  vertex(515, 95);
  endShape(CLOSE);
  fill(0);
  text("E", 515, 105);
  
  // Shape 6: Parallelogram
  fill(200, 255, 255);
  quad(80, 180, 130, 180, 140, 220, 90, 220);
  fill(0);
  text("F", 110, 205);
  
  // Shape 7: Isosceles triangle
  fill(255, 180, 180);
  triangle(220, 180, 200, 220, 240, 220);
  fill(0);
  text("G", 215, 205);
  
  // Shape 8: Trapezoid
  fill(180, 255, 180);
  quad(300, 185, 350, 185, 340, 215, 310, 215);
  fill(0);
  text("H", 320, 205);
  
  // Shape 9: Rhombus
  fill(255, 255, 180);
  quad(420, 180, 440, 200, 420, 220, 400, 200);
  fill(0);
  text("I", 415, 205);
  
  // Shape 10: Pentagon
  fill(255, 180, 255);
  beginShape();
  vertex(520, 180);
  vertex(535, 190);
  vertex(530, 210);
  vertex(510, 210);
  vertex(505, 190);
  endShape(CLOSE);
  fill(0);
  text("J", 515, 205);
  
  // Shape 11: Curved irregular shape
  fill(180, 200, 255);
  beginShape();
  vertex(100, 280);
  bezierVertex(120, 270, 130, 290, 120, 310);
  bezierVertex(100, 320, 80, 300, 100, 280);
  endShape();
  fill(0);
  text("K", 105, 300);
  
  // Shape 12: Square
  fill(200, 180, 255);
  rect(200, 280, 40, 40);
  fill(0);
  text("L", 215, 305);
  
  // Shape 13: Kite shape
  fill(180, 255, 200);
  quad(330, 280, 320, 300, 330, 320, 340, 300);
  fill(0);
  text("M", 325, 305);
  
  // Shape 14: Oval
  fill(255, 200, 180);
  ellipse(440, 300, 60, 35);
  fill(0);
  text("N", 435, 305);
  
  noLoop();
}
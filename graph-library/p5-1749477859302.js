function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("Draw all lines of symmetry for this isosceles triangle.", 20, 30);
  
  // Draw isosceles triangle
  fill(255, 200, 200);
  stroke(0);
  strokeWeight(3);
  triangle(400, 150, 300, 400, 500, 400);
  
  // Label vertices
  fill(0);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("A", 400, 135);
  text("B", 285, 415);
  text("C", 515, 415);
  
  // Label equal sides
  textSize(12);
  text("8 cm", 340, 250);
  text("8 cm", 460, 250);
  text("6 cm", 400, 420);
  
  noLoop();
}
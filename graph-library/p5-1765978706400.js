function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Title
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("Find the perimeter of a triangle with sides 8 cm, 15 cm, and 17 cm.", 50, 40);
  
  // Draw triangle
  stroke(0);
  strokeWeight(2);
  fill(255, 200, 200);
  triangle(200, 400, 440, 400, 320, 200);
  
  // Side length labels
  fill(0);
  textSize(16);
  textAlign(CENTER);
  
  // Bottom side (8 cm)
  text("8 cm", 320, 425);
  
  // Left side (15 cm)
  textAlign(CENTER);
  push();
  translate(250, 300);
  rotate(-1.2);
  text("17 cm", 0, 0);
  pop();
  
  // Right side (17 cm)
  push();
  translate(390, 300);
  rotate(1.2);
  text("15 cm", 0, 0);
  pop();
  
  // Vertex labels
  textSize(14);
  textAlign(CENTER);
  text("P", 190, 410);
  text("Q", 450, 410);
  text("R", 320, 185);
  
  noLoop();
}
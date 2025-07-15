function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(18);
  text("1. In triangle ABC, side a = 8, side b = 12, and angle C = 65°. Find the length of side c.", 20, 30);
  
  // Draw triangle
  push();
  translate(width/2, height/2);
  
  // Triangle vertices (positioned for clear visualization)
  let A = createVector(-80, 60);
  let B = createVector(100, 60);
  let C = createVector(20, -80);
  
  // Draw triangle
  stroke(0);
  strokeWeight(2);
  fill(255);
  triangle(A.x, A.y, B.x, B.y, C.x, C.y);
  
  // Label vertices
  fill(0);
  textSize(16);
  textAlign(CENTER);
  text("A", A.x - 15, A.y - 10);
  text("B", B.x + 15, B.y - 10);
  text("C", C.x, C.y - 15);
  
  // Label sides
  textAlign(CENTER);
  text("b = 12", (A.x + C.x)/2 - 20, (A.y + C.y)/2);
  text("a = 8", (B.x + C.x)/2 + 20, (B.y + C.y)/2);
  text("c = ?", (A.x + B.x)/2, (A.y + B.y)/2 + 20);
  
  // Label angle C
  text("65°", C.x, C.y + 20);
  
  // Draw angle arc at C
  stroke(255, 0, 0);
  strokeWeight(2);
  noFill();
  arc(C.x, C.y, 40, 40, atan2(A.y - C.y, A.x - C.x), atan2(B.y - C.y, B.x - C.x));
  
  pop();
  
  // Instructions
  fill(0);
  textSize(14);
  textAlign(LEFT);
  text("Use the Cosine Law: c² = a² + b² - 2ab cos(C)", 20, height - 40);
  
  noLoop();
}
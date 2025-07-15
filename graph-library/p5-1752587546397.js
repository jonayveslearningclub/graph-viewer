function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(18);
  text("3. In triangle XYZ, angle X = 42°, side y = 20, and side z = 16. Find side x.", 20, 30);
  
  // Draw triangle
  push();
  translate(width/2, height/2);
  
  // Triangle vertices (positioned for clear visualization)
  let X = createVector(-90, 70);
  let Y = createVector(80, 40);
  let Z = createVector(10, -100);
  
  // Draw triangle
  stroke(0);
  strokeWeight(2);
  fill(255);
  triangle(X.x, X.y, Y.x, Y.y, Z.x, Z.y);
  
  // Label vertices
  fill(0);
  textSize(16);
  textAlign(CENTER);
  text("X", X.x - 15, X.y - 10);
  text("Y", Y.x + 15, Y.y - 10);
  text("Z", Z.x, Z.y - 15);
  
  // Label sides
  textAlign(CENTER);
  text("z = 16", (X.x + Y.x)/2, (X.y + Y.y)/2 - 15);
  text("y = 20", (X.x + Z.x)/2 - 20, (X.y + Z.y)/2);
  text("x = ?", (Y.x + Z.x)/2 + 15, (Y.y + Z.y)/2);
  
  // Label angle X
  text("42°", X.x, X.y + 20);
  
  // Draw angle arc at X
  stroke(255, 0, 0);
  strokeWeight(2);
  noFill();
  arc(X.x, X.y, 40, 40, atan2(Y.y - X.y, Y.x - X.x), atan2(Z.y - X.y, Z.x - X.x));
  
  pop();
  
  // Instructions
  fill(0);
  textSize(14);
  textAlign(LEFT);
  text("Use the Cosine Law: x² = y² + z² - 2yz cos(X)", 20, height - 40);
  
  noLoop();
}
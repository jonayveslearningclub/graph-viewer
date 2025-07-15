function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(18);
  text("2. In triangle PQR, side p = 15, side q = 9, and side r = 18. Find angle P.", 20, 30);
  
  // Draw triangle
  push();
  translate(width/2, height/2);
  
  // Triangle vertices (positioned for clear visualization)
  let P = createVector(-70, 80);
  let Q = createVector(90, 50);
  let R = createVector(30, -90);
  
  // Draw triangle
  stroke(0);
  strokeWeight(2);
  fill(255);
  triangle(P.x, P.y, Q.x, Q.y, R.x, R.y);
  
  // Label vertices
  fill(0);
  textSize(16);
  textAlign(CENTER);
  text("P", P.x - 15, P.y - 10);
  text("Q", Q.x + 15, Q.y - 10);
  text("R", R.x, R.y - 15);
  
  // Label sides
  textAlign(CENTER);
  text("q = 9", (P.x + R.x)/2 - 15, (P.y + R.y)/2);
  text("r = 18", (P.x + Q.x)/2, (P.y + Q.y)/2 - 15);
  text("p = 15", (Q.x + R.x)/2 + 15, (Q.y + R.y)/2);
  
  // Label angle P with question mark
  text("P = ?", P.x, P.y + 20);
  
  // Draw angle arc at P
  stroke(255, 0, 0);
  strokeWeight(2);
  noFill();
  arc(P.x, P.y, 40, 40, atan2(Q.y - P.y, Q.x - P.x), atan2(R.y - P.y, R.x - P.x));
  
  pop();
  
  // Instructions
  fill(0);
  textSize(14);
  textAlign(LEFT);
  text("Use the Cosine Law: cos(P) = (q² + r² - p²) / (2qr)", 20, height - 40);
  
  noLoop();
}
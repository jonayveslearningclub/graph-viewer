function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  textSize(16);
  fill(0);
  text("3. Right triangle PQR has legs PQ = 8 and QR = x. If PR = 17, find x to determine the perimeter.", 20, 30);
  
  // Draw triangle
  stroke(0);
  strokeWeight(2);
  fill(200, 255, 200);
  
  // Triangle vertices
  let P = [250, 450];
  let Q = [250, 290];
  let R = [500, 450];
  
  // Draw triangle
  triangle(P[0], P[1], Q[0], Q[1], R[0], R[1]);
  
  // Right angle indicator
  noFill();
  rect(Q[0], Q[1] + 20, 20, -20);
  rect(Q[0], Q[1], 20, 20);
  
  // Labels
  fill(0);
  textSize(14);
  text("P", P[0] - 20, P[1] + 10);
  text("Q", Q[0] - 20, Q[1] - 10);
  text("R", R[0] + 10, R[1] + 10);
  
  // Side lengths
  text("8", P[0] - 25, (P[1] + Q[1])/2);
  text("x", (Q[0] + R[0])/2 + 15, R[1] - 15);
  text("17", (P[0] + R[0])/2 - 20, (P[1] + R[1])/2 - 20);
  
  // Formula reminder
  textSize(12);
  text("Apply Pythagorean theorem: PQ&#178; + QR&#178; = PR&#178;", 50, 520);
  text("Then calculate: Perimeter = PQ + QR + PR", 50, 540);
  
  noLoop();
}
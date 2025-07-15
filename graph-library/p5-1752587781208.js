function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("Find the length of side PQ using the Law of Cosines.", 20, 30);
  text("Given: Triangle PQR with side PR = 8, side QR = 6, and angle R = 72°", 20, 50);
  
  // Draw triangle PQR
  stroke(0);
  strokeWeight(2);
  fill(255);
  
  // Triangle vertices
  let P = {x: 250, y: 200};
  let Q = {x: 550, y: 180};
  let R = {x: 400, y: 450};
  
  // Draw triangle
  triangle(P.x, P.y, Q.x, Q.y, R.x, R.y);
  
  // Label vertices
  fill(0);
  textSize(18);
  text("P", P.x - 20, P.y);
  text("Q", Q.x + 10, Q.y);
  text("R", R.x, R.y + 20);
  
  // Label angle R
  textSize(14);
  text("72°", R.x - 15, R.y - 25);
  
  // Label known sides
  text("PR = 8", (P.x + R.x)/2 - 40, (P.y + R.y)/2);
  text("QR = 6", (Q.x + R.x)/2 + 10, (Q.y + R.y)/2);
  
  // Label the side we need to find
  fill(255, 0, 0);
  text("PQ = ?", (P.x + Q.x)/2, (P.y + Q.y)/2 - 15);
  
  noLoop();
}
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("2. What type of quadrilateral is PQRS with vertices P(-3, 2), Q(1, 5), R(4, 1), S(0, -2)?", 10, 25);
  
  // Draw coordinate plane
  stroke(200);
  strokeWeight(1);
  
  // Grid lines
  for (let i = -10; i <= 10; i++) {
    let x = map(i, -10, 10, 50, 750);
    let y = map(i, -10, 10, 550, 50);
    line(x, 50, x, 550);
    line(50, y, 750, y);
  }
  
  // Main axes
  stroke(0);
  strokeWeight(2);
  line(50, 300, 750, 300); // x-axis
  line(400, 50, 400, 550); // y-axis
  
  // Axis labels
  fill(0);
  textSize(12);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      let x = map(i, -10, 10, 50, 750);
      let y = map(i, -10, 10, 550, 50);
      text(i, x - 5, 320);
      text(i, 380, y + 5);
    }
  }
  text("0", 385, 320);
  
  // Plot quadrilateral PQRS
  let P = [map(-3, -10, 10, 50, 750), map(2, -10, 10, 550, 50)];
  let Q = [map(1, -10, 10, 50, 750), map(5, -10, 10, 550, 50)];
  let R = [map(4, -10, 10, 50, 750), map(1, -10, 10, 550, 50)];
  let S = [map(0, -10, 10, 50, 750), map(-2, -10, 10, 550, 50)];
  
  // Draw quadrilateral
  stroke(0);
  strokeWeight(2);
  fill(255, 200, 150, 100);
  beginShape();
  vertex(P[0], P[1]);
  vertex(Q[0], Q[1]);
  vertex(R[0], R[1]);
  vertex(S[0], S[1]);
  endShape(CLOSE);
  
  // Label vertices
  fill(0, 150, 0);
  noStroke();
  ellipse(P[0], P[1], 8, 8);
  ellipse(Q[0], Q[1], 8, 8);
  ellipse(R[0], R[1], 8, 8);
  ellipse(S[0], S[1], 8, 8);
  
  fill(0);
  textSize(14);
  text("P", P[0] - 15, P[1] - 10);
  text("Q", Q[0] + 10, Q[1] - 10);
  text("R", R[0] + 10, R[1] + 15);
  text("S", S[0] - 15, S[1] + 15);
  
  noLoop();
}
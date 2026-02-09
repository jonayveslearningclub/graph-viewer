function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("3. Identify the quadrilateral WXYZ with vertices W(-2, -3), X(3, -3), Y(5, -6), Z(-4, -6).", 10, 25);
  
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
  
  // Plot quadrilateral WXYZ
  let W = [map(-2, -10, 10, 50, 750), map(-3, -10, 10, 550, 50)];
  let X = [map(3, -10, 10, 50, 750), map(-3, -10, 10, 550, 50)];
  let Y = [map(5, -10, 10, 50, 750), map(-6, -10, 10, 550, 50)];
  let Z = [map(-4, -10, 10, 50, 750), map(-6, -10, 10, 550, 50)];
  
  // Draw quadrilateral
  stroke(0);
  strokeWeight(2);
  fill(200, 255, 200, 100);
  beginShape();
  vertex(W[0], W[1]);
  vertex(X[0], X[1]);
  vertex(Y[0], Y[1]);
  vertex(Z[0], Z[1]);
  endShape(CLOSE);
  
  // Label vertices
  fill(150, 0, 150);
  noStroke();
  ellipse(W[0], W[1], 8, 8);
  ellipse(X[0], X[1], 8, 8);
  ellipse(Y[0], Y[1], 8, 8);
  ellipse(Z[0], Z[1], 8, 8);
  
  fill(0);
  textSize(14);
  text("W", W[0] - 15, W[1] - 10);
  text("X", X[0] + 10, X[1] - 10);
  text("Y", Y[0] + 10, Y[1] + 15);
  text("Z", Z[0] - 15, Z[1] + 15);
  
  noLoop();
}
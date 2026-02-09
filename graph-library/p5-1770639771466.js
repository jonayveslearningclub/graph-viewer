function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("1. Classify the quadrilateral ABCD with vertices A(2, 4), B(6, 4), C(6, 1), D(2, 1).", 10, 25);
  
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
  
  // Plot quadrilateral ABCD
  let A = [map(2, -10, 10, 50, 750), map(4, -10, 10, 550, 50)];
  let B = [map(6, -10, 10, 50, 750), map(4, -10, 10, 550, 50)];
  let C = [map(6, -10, 10, 50, 750), map(1, -10, 10, 550, 50)];
  let D = [map(2, -10, 10, 50, 750), map(1, -10, 10, 550, 50)];
  
  // Draw quadrilateral
  stroke(0);
  strokeWeight(2);
  fill(150, 200, 255, 100);
  beginShape();
  vertex(A[0], A[1]);
  vertex(B[0], B[1]);
  vertex(C[0], C[1]);
  vertex(D[0], D[1]);
  endShape(CLOSE);
  
  // Label vertices
  fill(255, 0, 0);
  noStroke();
  ellipse(A[0], A[1], 8, 8);
  ellipse(B[0], B[1], 8, 8);
  ellipse(C[0], C[1], 8, 8);
  ellipse(D[0], D[1], 8, 8);
  
  fill(0);
  textSize(14);
  text("A", A[0] - 15, A[1] - 10);
  text("B", B[0] + 10, B[1] - 10);
  text("C", C[0] + 10, C[1] + 15);
  text("D", D[0] - 15, D[1] + 15);
  
  noLoop();
}
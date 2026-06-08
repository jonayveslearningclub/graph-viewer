function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Question text
  fill(0);
  textSize(16);
  text("Find the area of triangle ABC with vertices A(3, 7), B(-2, 4), and C(5, -1).", 20, 30);
  
  // Set up coordinate plane
  translate(width/2, height/2);
  
  // Draw grid lines
  stroke(220);
  for (let i = -10; i <= 10; i++) {
    line(i * 25, -250, i * 25, 250);
    line(-250, i * 25, 250, i * 25);
  }
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(-250, 0, 250, 0); // x-axis
  line(0, -250, 0, 250); // y-axis
  
  // Label axes
  strokeWeight(1);
  textAlign(CENTER, CENTER);
  textSize(12);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, i * 25, 15);
      text(-i, -15, i * 25);
    }
  }
  text("0", -15, 15);
  
  // Plot triangle vertices
  let A = [3 * 25, -7 * 25];
  let B = [-2 * 25, -4 * 25];
  let C = [5 * 25, 1 * 25];
  
  // Draw triangle
  stroke(0);
  strokeWeight(2);
  fill(200, 200, 255, 100);
  beginShape();
  vertex(A[0], A[1]);
  vertex(B[0], B[1]);
  vertex(C[0], C[1]);
  endShape(CLOSE);
  
  // Plot and label points
  fill(255, 0, 0);
  noStroke();
  circle(A[0], A[1], 8);
  circle(B[0], B[1], 8);
  circle(C[0], C[1], 8);
  
  fill(0);
  textAlign(LEFT, BOTTOM);
  text("A(3, 7)", A[0] + 5, A[1] - 5);
  text("B(-2, 4)", B[0] - 40, B[1] - 5);
  text("C(5, -1)", C[0] + 5, C[1] + 15);
  
  noLoop();
}
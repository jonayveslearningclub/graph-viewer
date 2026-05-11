function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("1. Triangle ABC has vertices A(2, 5), B(-3, 1), and C(4, -2).", 20, 30);
  text("   Plot the triangle and find the area in square units.", 20, 50);
  
  // Set up coordinate system
  translate(400, 300);
  
  // Draw grid
  stroke(220);
  strokeWeight(1);
  for (let i = -10; i <= 10; i++) {
    line(i * 30, -300, i * 30, 300);
    line(-300, i * 30, 300, i * 30);
  }
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(-300, 0, 300, 0);
  line(0, -300, 0, 300);
  
  // Label axes
  fill(0);
  textSize(12);
  textAlign(CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, i * 30, 15);
      text(-i, -8, i * 30 + 4);
    }
  }
  text("0", -8, 15);
  
  // Plot triangle vertices
  let A = [2 * 30, -5 * 30];
  let B = [-3 * 30, -1 * 30];
  let C = [4 * 30, 2 * 30];
  
  // Draw triangle
  stroke(0);
  strokeWeight(2);
  fill(150, 200, 255, 100);
  triangle(A[0], A[1], B[0], B[1], C[0], C[1]);
  
  // Mark vertices
  fill(255, 0, 0);
  noStroke();
  ellipse(A[0], A[1], 8, 8);
  ellipse(B[0], B[1], 8, 8);
  ellipse(C[0], C[1], 8, 8);
  
  // Label vertices
  fill(0);
  textSize(14);
  textAlign(CENTER);
  text("A(2, 5)", A[0] + 20, A[1] - 10);
  text("B(-3, 1)", B[0] - 20, B[1] - 10);
  text("C(4, -2)", C[0] + 20, C[1] + 20);
  
  noLoop();
}
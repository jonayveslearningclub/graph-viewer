function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  textSize(16);
  fill(0);
  text("1. A right triangle has legs of length 5 and 12. Find x (the hypotenuse) to calculate the perimeter.", 20, 30);
  
  // Draw triangle
  stroke(0);
  strokeWeight(2);
  fill(200, 220, 255);
  
  // Triangle vertices
  let A = [150, 400];
  let B = [350, 400];
  let C = [150, 200];
  
  // Draw triangle
  triangle(A[0], A[1], B[0], B[1], C[0], C[1]);
  
  // Right angle indicator
  noFill();
  rect(A[0], A[1] - 20, 20, 20);
  
  // Labels
  fill(0);
  textSize(14);
  text("A", A[0] - 20, A[1] + 10);
  text("B", B[0] + 10, B[1] + 10);
  text("C", C[0] - 20, C[1] - 10);
  
  // Side lengths
  text("12", (A[0] + B[0])/2 - 10, A[1] + 25);
  text("5", A[0] - 25, (A[1] + C[1])/2);
  text("x", (B[0] + C[0])/2 + 15, (B[1] + C[1])/2);
  
  // Formula reminder
  textSize(12);
  text("Use: a&#178; + b&#178; = c&#178;", 450, 350);
  text("Then find perimeter = a + b + c", 450, 370);
  
  noLoop();
}
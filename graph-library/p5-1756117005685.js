function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  textSize(16);
  fill(0);
  text("1. A right triangle has legs of length 9 and 12. Find x (the hypotenuse) to calculate the perimeter.", 20, 30);
  
  // Draw triangle
  stroke(0);
  strokeWeight(2);
  fill(220, 220, 255);
  
  // Triangle vertices
  let A = {x: 150, y: 400};
  let B = {x: 420, y: 400}; // 270 pixels = 9 units scaled
  let C = {x: 150, y: 040}; // 360 pixels = 12 units scaled
  
  triangle(A.x, A.y, B.x, B.y, C.x, C.y);
  
  // Right angle marker
  noFill();
  stroke(0);
  strokeWeight(1);
  rect(A.x, A.y - 15, 15, 15);
  
  // Labels
  textSize(14);
  fill(0);
  text("A", A.x - 20, A.y + 15);
  text("B", B.x + 10, B.y + 15);
  text("C", C.x - 20, C.y - 10);
  
  // Side lengths
  text("9", (A.x + B.x)/2, A.y + 25);
  text("12", A.x - 30, (A.y + C.y)/2);
  text("x", (B.x + C.x)/2 + 15, (B.y + C.y)/2);
  
  // Formula reminder
  textSize(12);
  text("Use: a² + b² = c²", 500, 200);
  text("Perimeter = sum of all three sides", 500, 220);
  
  noLoop();
}
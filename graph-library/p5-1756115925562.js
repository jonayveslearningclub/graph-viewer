function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("Find the value of x, then calculate the perimeter of triangle ABC.", 20, 30);
  text("Side AB = 15, Side BC = x, Side AC = 20, and the altitude to AC = 12", 20, 50);
  
  // Draw triangle ABC
  stroke(0);
  strokeWeight(2);
  fill(255);
  
  // Triangle vertices
  let A = {x: 150, y: 400};
  let B = {x: 350, y: 200};
  let C = {x: 550, y: 400};
  
  // Draw triangle
  triangle(A.x, A.y, B.x, B.y, C.x, C.y);
  
  // Draw altitude from B to AC
  stroke(255, 0, 0);
  strokeWeight(1);
  line(B.x, B.y, B.x, A.y);
  
  // Mark right angle
  stroke(255, 0, 0);
  line(B.x - 10, A.y, B.x - 10, A.y - 10);
  line(B.x - 10, A.y - 10, B.x, A.y - 10);
  
  // Labels
  fill(0);
  textSize(14);
  text("A", A.x - 15, A.y + 15);
  text("B", B.x - 15, B.y - 10);
  text("C", C.x + 5, C.y + 15);
  
  // Side labels
  text("15", (A.x + B.x)/2 - 20, (A.y + B.y)/2);
  text("x", (B.x + C.x)/2 + 10, (B.y + C.y)/2);
  text("20", (A.x + C.x)/2, A.y + 25);
  text("12", B.x + 10, (B.y + A.y)/2);
  
  noLoop();
}
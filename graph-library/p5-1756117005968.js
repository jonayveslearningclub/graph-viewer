function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  textSize(16);
  fill(0);
  text("3. A right triangle has one leg of 15 and hypotenuse of 17. Find x (the other leg)", 20, 30);
  text("to determine the triangle's perimeter.", 20, 50);
  
  // Draw triangle
  stroke(0);
  strokeWeight(2);
  fill(255, 220, 220);
  
  // Triangle vertices
  let A = {x: 120, y: 420};
  let B = {x: 480, y: 420}; // 360 pixels for leg of 15
  let C = {x: 120, y: 180}; // vertical leg x
  
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
  text("15", (A.x + B.x)/2, A.y + 25);
  text("x", A.x - 25, (A.y + C.y)/2);
  text("17", (B.x + C.x)/2 + 15, (B.y + C.y)/2);
  
  // Formula reminder
  textSize(12);
  text("Use: a² + b² = c²", 550, 300);
  text("15² + x² = 17²", 550, 320);
  text("Perimeter = 15 + x + 17", 550, 340);
  
  noLoop();
}
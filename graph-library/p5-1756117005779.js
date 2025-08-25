function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  textSize(16);
  fill(0);
  text("2. Find the value of x in this right triangle with legs 5 and x, and hypotenuse 13.", 20, 30);
  text("Then calculate the perimeter.", 20, 50);
  
  // Draw triangle
  stroke(0);
  strokeWeight(2);
  fill(220, 255, 220);
  
  // Triangle vertices - vertical orientation
  let A = {x: 200, y: 450};
  let B = {x: 200, y: 300}; // 150 pixels = 5 units scaled
  let C = {x: 590, y: 450}; // hypotenuse
  
  triangle(A.x, A.y, B.x, B.y, C.x, C.y);
  
  // Right angle marker
  noFill();
  stroke(0);
  strokeWeight(1);
  rect(A.x, A.y - 15, 15, -15);
  
  // Labels
  textSize(14);
  fill(0);
  text("A", A.x - 20, A.y + 15);
  text("B", B.x - 20, B.y - 10);
  text("C", C.x + 10, C.y + 15);
  
  // Side lengths
  text("5", A.x - 30, (A.y + B.y)/2);
  text("x", (A.x + C.x)/2, A.y + 25);
  text("13", (B.x + C.x)/2 - 20, (B.y + C.y)/2 - 10);
  
  // Formula reminder
  textSize(12);
  text("Use: a² + b² = c²", 450, 200);
  text("Perimeter = 5 + x + 13", 450, 220);
  
  noLoop();
}
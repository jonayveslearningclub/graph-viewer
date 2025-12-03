function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  text("Find the perimeter of the triangle with sides 6 units, 8 units, and 10 units.", 20, 30);
  
  // Draw triangle
  stroke(0);
  strokeWeight(2);
  fill(255, 220, 220);
  
  // Triangle vertices
  let x1 = 300, y1 = 350;
  let x2 = 480, y2 = 350;
  let x3 = 400, y3 = 200;
  
  triangle(x1, y1, x2, y2, x3, y3);
  
  // Side labels
  fill(0);
  textSize(16);
  textAlign(CENTER);
  
  // Bottom side (6 units)
  text("6 units", (x1 + x2)/2, y1 + 25);
  
  // Right side (8 units)
  text("8 units", (x2 + x3)/2 + 20, (y2 + y3)/2);
  
  // Left side (10 units)
  text("10 units", (x1 + x3)/2 - 25, (y1 + y3)/2);
  
  // Formula reminder
  textAlign(LEFT);
  textSize(14);
  text("Perimeter of triangle = side 1 + side 2 + side 3", 20, 450);
  
  noLoop();
}
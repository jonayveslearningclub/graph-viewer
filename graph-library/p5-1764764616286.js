function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  text("Find the perimeter of the square with side length 7 units.", 20, 30);
  
  // Draw square
  stroke(0);
  strokeWeight(2);
  fill(220, 255, 220);
  
  // Square centered in canvas
  let sideLength = 140; // 7 units * 20 pixels per unit
  let x = 330;
  let y = 200;
  
  rect(x, y, sideLength, sideLength);
  
  // Side labels
  fill(0);
  textSize(16);
  textAlign(CENTER);
  
  // Top side
  text("7 units", x + sideLength/2, y - 10);
  
  // Bottom side
  text("7 units", x + sideLength/2, y + sideLength + 25);
  
  // Left side
  textAlign(LEFT);
  push();
  translate(x - 15, y + sideLength/2);
  rotate(-PI/2);
  text("7 units", 0, 0);
  pop();
  
  // Right side
  push();
  translate(x + sideLength + 15, y + sideLength/2);
  rotate(PI/2);
  text("7 units", 0, 0);
  pop();
  
  // Formula reminder
  textAlign(LEFT);
  textSize(14);
  text("Perimeter of square = 4 × side length", 20, 450);
  
  noLoop();
}
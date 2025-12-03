function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  text("Find the perimeter of the rectangle with length 8 units and width 5 units.", 20, 30);
  
  // Draw rectangle
  stroke(0);
  strokeWeight(2);
  fill(220, 220, 255);
  
  // Rectangle centered in canvas
  let rectWidth = 160; // 8 units * 20 pixels per unit
  let rectHeight = 100; // 5 units * 20 pixels per unit
  let x = 320;
  let y = 200;
  
  rect(x, y, rectWidth, rectHeight);
  
  // Labels
  fill(0);
  textSize(16);
  textAlign(CENTER);
  
  // Length labels
  text("8 units", x + rectWidth/2, y - 10);
  text("8 units", x + rectWidth/2, y + rectHeight + 25);
  
  textAlign(LEFT);
  // Width labels
  push();
  translate(x - 15, y + rectHeight/2);
  rotate(-PI/2);
  text("5 units", 0, 0);
  pop();
  
  push();
  translate(x + rectWidth + 15, y + rectHeight/2);
  rotate(PI/2);
  text("5 units", 0, 0);
  pop();
  
  // Formula reminder
  textAlign(LEFT);
  textSize(14);
  text("Perimeter of rectangle = 2 × length + 2 × width", 20, 450);
  
  noLoop();
}
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Title
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("Find the area of a square with side length 9 meters.", 50, 40);
  
  // Draw square
  stroke(0);
  strokeWeight(2);
  fill(200, 255, 200);
  rect(250, 180, 270, 270); // 9 units × 9 units scaled up
  
  // Side length labels
  fill(0);
  textSize(16);
  textAlign(CENTER);
  
  // Top side
  text("9 meters", 385, 165);
  
  // Right side
  push();
  translate(540, 315);
  rotate(PI/2);
  text("9 meters", 0, 0);
  pop();
  
  // Bottom side
  text("9 meters", 385, 470);
  
  // Left side
  push();
  translate(235, 315);
  rotate(-PI/2);
  text("9 meters", 0, 0);
  pop();
  
  // Corner labels
  textSize(14);
  textAlign(CENTER);
  text("W", 240, 175);
  text("X", 530, 175);
  text("Y", 530, 460);
  text("Z", 240, 460);
  
  noLoop();
}
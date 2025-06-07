function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  fill(0);
  textSize(18);
  text("2. If 5y - 12 = 18, what is the value of y?", 50, 40);
  
  // Show the equation
  textSize(24);
  text("5y - 12 = 18", 280, 120);
  
  // Balance scale visualization
  stroke(0);
  strokeWeight(3);
  
  // Scale base
  line(400, 500, 400, 450);
  line(350, 500, 450, 500);
  
  // Scale arms
  line(250, 300, 550, 300);
  line(400, 300, 400, 450);
  
  // Left side (5y - 12)
  fill(200, 255, 200);
  rect(200, 250, 100, 40);
  fill(0);
  textAlign(CENTER);
  text("5y - 12", 250, 275);
  
  // Right side (18)
  fill(255, 200, 200);
  rect(500, 250, 100, 40);
  text("18", 550, 275);
  
  // Instructions
  textAlign(LEFT);
  textSize(16);
  text("To solve: Add 12 to both sides, then divide by 5", 50, 400);
  
  noLoop();
}
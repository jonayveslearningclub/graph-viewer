function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  fill(0);
  textSize(18);
  text("1. Solve for x: 3x + 7 = 22", 50, 40);
  
  // Show the equation in a clear format
  textSize(24);
  text("3x + 7 = 22", 300, 150);
  
  // Show work steps without giving final answer
  textSize(16);
  text("Step 1: Subtract 7 from both sides", 50, 250);
  text("Step 2: Divide both sides by 3", 50, 290);
  text("Step 3: Simplify to find x", 50, 330);
  
  // Visual representation with boxes
  fill(200, 200, 255);
  rect(150, 380, 60, 40);
  rect(220, 380, 60, 40);
  rect(290, 380, 60, 40);
  rect(380, 380, 40, 40);
  
  fill(0);
  textAlign(CENTER);
  text("x", 180, 405);
  text("x", 250, 405);
  text("x", 320, 405);
  text("+7", 400, 405);
  
  text("=", 450, 400);
  
  fill(255, 200, 200);
  rect(500, 380, 40, 40);
  text("22", 520, 405);
  
  textAlign(LEFT);
  
  noLoop();
}
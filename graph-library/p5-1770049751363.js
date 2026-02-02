function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("Find the missing angle. If ∠PQR = 90° and ∠PQS = 34°, what is ∠SQR?", 20, 30);
  
  // Draw the angle diagram
  let centerX = 400;
  let centerY = 350;
  
  // Draw rays
  stroke(0);
  strokeWeight(2);
  
  // Ray QP (vertical up)
  line(centerX, centerY, centerX, centerY - 160);
  
  // Ray QR (horizontal right)
  line(centerX, centerY, centerX + 160, centerY);
  
  // Ray QS (at 34° from vertical)
  let angleS = radians(90 - 34);
  line(centerX, centerY, centerX + 130 * cos(angleS), centerY - 130 * sin(angleS));
  
  // Label points
  fill(0);
  textSize(18);
  text("P", centerX - 10, centerY - 175);
  text("Q", centerX - 15, centerY + 20);
  text("R", centerX + 170, centerY + 5);
  text("S", centerX + 130 * cos(angleS) + 5, centerY - 130 * sin(angleS) - 10);
  
  // Draw angle arcs
  stroke(255, 0, 0);
  strokeWeight(2);
  noFill();
  
  // Arc for angle PQR (90°)
  arc(centerX, centerY, 100, 100, radians(-90), 0);
  
  // Arc for angle PQS (34°)
  stroke(0, 0, 255);
  arc(centerX, centerY, 70, 70, radians(-90), radians(-56));
  
  // Right angle symbol
  stroke(0);
  strokeWeight(1);
  line(centerX + 15, centerY - 15, centerX + 15, centerY);
  line(centerX + 15, centerY - 15, centerX, centerY - 15);
  
  // Label angles
  fill(255, 0, 0);
  textSize(14);
  text("90°", centerX + 25, centerY - 25);
  
  fill(0, 0, 255);
  text("34°", centerX + 15, centerY - 45);
  
  fill(0, 150, 0);
  text("∠SQR = ?", centerX + 80, centerY + 40);
  
  noLoop();
}
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(18);
  text("Find the missing angle ∠PQR if ∠PQS = 63° and ∠SQR = 29°", 20, 30);
  
  // Draw the angle diagram
  let centerX = 400;
  let centerY = 300;
  let radius = 130;
  
  // Draw rays
  stroke(0);
  strokeWeight(2);
  
  // Ray QP (pointing down and left)
  let angleP = radians(225);
  line(centerX, centerY, centerX + radius * cos(angleP), centerY + radius * sin(angleP));
  
  // Ray QS (middle ray, pointing up and left)
  let angleS = radians(162);
  line(centerX, centerY, centerX + radius * cos(angleS), centerY + radius * sin(angleS));
  
  // Ray QR (pointing up and left, closer to vertical)
  let angleR = radians(133);
  line(centerX, centerY, centerX + radius * cos(angleR), centerY + radius * sin(angleR));
  
  // Label points
  textSize(16);
  fill(0);
  text("P", centerX + radius * cos(angleP) - 5, centerY + radius * sin(angleP) + 20);
  text("Q", centerX + 15, centerY + 15);
  text("S", centerX + radius * cos(angleS) - 10, centerY + radius * sin(angleS) - 10);
  text("R", centerX + radius * cos(angleR) - 15, centerY + radius * sin(angleR) - 5);
  
  // Draw angle arcs
  noFill();
  stroke(255, 0, 0);
  strokeWeight(2);
  
  // Arc for angle PQS (63°)
  arc(centerX, centerY, 80, 80, radians(162), radians(225));
  
  // Arc for angle SQR (29°)
  stroke(0, 0, 255);
  arc(centerX, centerY, 100, 100, radians(133), radians(162));
  
  // Arc for the unknown angle PQR
  stroke(0, 150, 0);
  strokeWeight(3);
  arc(centerX, centerY, 120, 120, radians(133), radians(225));
  
  // Angle labels
  fill(255, 0, 0);
  textSize(14);
  text("63°", centerX - 45, centerY + 15);
  
  fill(0, 0, 255);
  text("29°", centerX - 55, centerY - 25);
  
  fill(0, 150, 0);
  text("?", centerX - 70, centerY - 5);
  
  noLoop();
}
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question title
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("Find the missing angle. If ∠PQR = 124° and ∠PQS = 67°, what is ∠SQR?", 20, 30);
  
  // Draw the angle diagram
  let centerX = 400;
  let centerY = 350;
  
  // Draw rays
  stroke(0);
  strokeWeight(2);
  
  // Ray QP (horizontal right)
  line(centerX, centerY, centerX + 150, centerY);
  
  // Ray QS (at 67 degrees from QP)
  let angle1 = radians(67);
  line(centerX, centerY, centerX + 120 * cos(angle1), centerY - 120 * sin(angle1));
  
  // Ray QR (at 124 degrees from QP)
  let angle2 = radians(124);
  line(centerX, centerY, centerX + 130 * cos(angle2), centerY - 130 * sin(angle2));
  
  // Label points
  textSize(14);
  fill(0);
  text("P", centerX + 160, centerY + 5);
  text("Q", centerX - 10, centerY + 20);
  text("S", centerX + 120 * cos(angle1) + 5, centerY - 120 * sin(angle1) - 10);
  text("R", centerX + 130 * cos(angle2) - 10, centerY - 130 * sin(angle2) - 10);
  
  // Draw angle arc for PQR
  noFill();
  stroke(255, 0, 0);
  strokeWeight(2);
  arc(centerX, centerY, 80, 80, radians(-124), radians(0));
  
  // Draw angle arc for PQS
  stroke(0, 0, 255);
  arc(centerX, centerY, 60, 60, radians(-67), radians(0));
  
  // Angle labels
  fill(255, 0, 0);
  textSize(12);
  text("124°", centerX + 20, centerY - 45);
  
  fill(0, 0, 255);
  text("67°", centerX + 35, centerY - 20);
  
  // Question mark for missing angle
  fill(0, 150, 0);
  textSize(14);
  text("?", centerX + 50, centerY - 60);
  
  noLoop();
}
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question title
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("Find the missing angle. If ∠XYZ = 156° and ∠XYW = 89°, what is ∠WYZ?", 20, 30);
  
  // Draw the angle diagram
  let centerX = 400;
  let centerY = 350;
  
  // Draw rays
  stroke(0);
  strokeWeight(2);
  
  // Ray YX (pointing up and left)
  line(centerX, centerY, centerX - 100, centerY - 120);
  
  // Ray YW (at 89 degrees clockwise from YX)
  let angle1 = radians(-89 + 135); // YX is at 135 degrees, so YW is at 135-89
  line(centerX, centerY, centerX + 125 * cos(angle1), centerY + 125 * sin(angle1));
  
  // Ray YZ (at 156 degrees clockwise from YX)
  let angle2 = radians(-156 + 135); // YZ is at 135-156
  line(centerX, centerY, centerX + 130 * cos(angle2), centerY + 130 * sin(angle2));
  
  // Label points
  textSize(14);
  fill(0);
  text("X", centerX - 115, centerY - 135);
  text("Y", centerX - 10, centerY + 20);
  text("W", centerX + 125 * cos(angle1) + 5, centerY + 125 * sin(angle1) + 5);
  text("Z", centerX + 130 * cos(angle2) - 15, centerY + 130 * sin(angle2) + 5);
  
  // Draw angle arc for XYZ
  noFill();
  stroke(255, 0, 0);
  strokeWeight(2);
  arc(centerX, centerY, 90, 90, radians(135 - 156), radians(135));
  
  // Draw angle arc for XYW
  stroke(0, 0, 255);
  arc(centerX, centerY, 70, 70, radians(135 - 89), radians(135));
  
  // Angle labels
  fill(255, 0, 0);
  textSize(12);
  text("156°", centerX - 45, centerY + 35);
  
  fill(0, 0, 255);
  text("89°", centerX - 25, centerY + 15);
  
  // Question mark for missing angle
  fill(0, 150, 0);
  textSize(14);
  text("?", centerX + 15, centerY + 45);
  
  noLoop();
}
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question title
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("Find the missing angle. If ∠ABC = 85° and ∠ABD = 32°, what is ∠DBC?", 20, 30);
  
  // Draw the angle diagram
  let centerX = 400;
  let centerY = 350;
  
  // Draw rays
  stroke(0);
  strokeWeight(2);
  
  // Ray BA (horizontal left)
  line(centerX, centerY, centerX - 150, centerY);
  
  // Ray BD (at 32 degrees from BA)
  let angle1 = radians(32);
  line(centerX, centerY, centerX - 120 * cos(angle1), centerY - 120 * sin(angle1));
  
  // Ray BC (at 85 degrees from BA)
  let angle2 = radians(85);
  line(centerX, centerY, centerX - 130 * cos(angle2), centerY - 130 * sin(angle2));
  
  // Label points
  textSize(14);
  fill(0);
  text("A", centerX - 170, centerY + 5);
  text("B", centerX - 10, centerY + 20);
  text("D", centerX - 120 * cos(angle1) - 10, centerY - 120 * sin(angle1) - 10);
  text("C", centerX - 130 * cos(angle2) - 10, centerY - 130 * sin(angle2) - 10);
  
  // Draw angle arc for ABC
  noFill();
  stroke(255, 0, 0);
  strokeWeight(2);
  arc(centerX, centerY, 80, 80, radians(180 - 85), radians(180));
  
  // Draw angle arc for ABD
  stroke(0, 0, 255);
  arc(centerX, centerY, 60, 60, radians(180 - 32), radians(180));
  
  // Angle labels
  fill(255, 0, 0);
  textSize(12);
  text("85°", centerX - 70, centerY - 25);
  
  fill(0, 0, 255);
  text("32°", centerX - 50, centerY - 10);
  
  // Question mark for missing angle
  fill(0, 150, 0);
  textSize(14);
  text("?", centerX - 90, centerY - 40);
  
  noLoop();
}
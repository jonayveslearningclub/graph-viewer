function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("The reflex angle ∠XYZ and its corresponding smaller angle", 20, 30);
  text("together make a complete rotation. If the smaller angle is 127°,", 20, 50);
  text("what is the measure of the reflex angle?", 20, 70);
  
  // Draw the angle diagram
  let centerX = 400;
  let centerY = 380;
  let radius = 130;
  
  // Draw the rays
  stroke(0);
  strokeWeight(3);
  
  // Ray YX (pointing up and slightly right)
  let startAngle = radians(60);
  let startX = centerX + radius * cos(startAngle);
  let startY = centerY - radius * sin(startAngle);
  line(centerX, centerY, startX, startY);
  
  // Ray YZ (127 degrees clockwise from YX)
  let smallAngleRad = radians(127);
  let endAngle = startAngle - smallAngleRad;
  let endX = centerX + radius * cos(endAngle);
  let endY = centerY - radius * sin(endAngle);
  line(centerX, centerY, endX, endY);
  
  // Draw the small angle arc (127°)
  noFill();
  strokeWeight(2);
  stroke(0, 150, 0);
  arc(centerX, centerY, 100, 100, endAngle, startAngle);
  
  // Draw the reflex angle arc
  stroke(255, 0, 0);
  strokeWeight(3);
  arc(centerX, centerY, 140, 140, startAngle, endAngle + TWO_PI);
  
  // Add labels
  fill(0);
  textSize(14);
  textAlign(CENTER);
  text("X", startX + 15, startY - 10);
  text("Y", centerX - 20, centerY + 15);
  text("Z", endX - 15, endY + 15);
  
  // Label the small angle
  fill(0, 150, 0);
  text("127°", centerX + 60, centerY - 30);
  
  // Label the reflex angle with a question mark
  fill(255, 0, 0);
  text("∠XYZ = ?", centerX - 90, centerY + 60);
  
  noLoop();
}
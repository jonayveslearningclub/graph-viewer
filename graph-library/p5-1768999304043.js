function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("A reflex angle ∠PQR measures 284°. What is the measure", 20, 30);
  text("of the corresponding acute angle?", 20, 50);
  
  // Draw the angle diagram
  let centerX = 400;
  let centerY = 350;
  let radius = 140;
  
  // Draw the rays
  stroke(0);
  strokeWeight(3);
  
  // Ray QP (pointing right)
  line(centerX, centerY, centerX + radius, centerY);
  
  // Ray QR (at 284 degrees, which is -76 degrees from horizontal)
  let reflexAngle = 284;
  let smallAngle = 360 - reflexAngle; // This would be 76 degrees
  let angleRad = radians(-smallAngle);
  let endX = centerX + radius * cos(angleRad);
  let endY = centerY + radius * sin(angleRad);
  line(centerX, centerY, endX, endY);
  
  // Draw the reflex angle arc (284°)
  noFill();
  strokeWeight(3);
  stroke(255, 0, 0);
  arc(centerX, centerY, 120, 120, angleRad, TWO_PI);
  
  // Draw the small angle arc
  stroke(0, 150, 0);
  strokeWeight(2);
  arc(centerX, centerY, 80, 80, 0, angleRad);
  
  // Add labels
  fill(0);
  textSize(14);
  textAlign(CENTER);
  text("P", centerX + radius + 15, centerY + 5);
  text("Q", centerX - 15, centerY + 5);
  text("R", endX + 15, endY + 15);
  
  // Label the reflex angle
  fill(255, 0, 0);
  text("284°", centerX - 60, centerY + 40);
  
  // Label the small angle with a question mark
  fill(0, 150, 0);
  text("? °", centerX + 45, centerY + 25);
  
  noLoop();
}
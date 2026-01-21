function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("Find the missing reflex angle ∠ABC if the full rotation is 360°", 20, 30);
  text("and the smaller angle shown is 85°.", 20, 50);
  
  // Draw the angle diagram
  let centerX = 400;
  let centerY = 350;
  let radius = 150;
  
  // Draw the rays
  stroke(0);
  strokeWeight(3);
  
  // Ray AB (horizontal to the right)
  line(centerX, centerY, centerX + radius, centerY);
  
  // Ray BC (at 85 degrees from horizontal)
  let angleRad = radians(85);
  let endX = centerX + radius * cos(angleRad);
  let endY = centerY - radius * sin(angleRad);
  line(centerX, centerY, endX, endY);
  
  // Draw the small arc for the given angle (85°)
  noFill();
  strokeWeight(2);
  stroke(255, 0, 0);
  arc(centerX, centerY, 80, 80, -angleRad, 0);
  
  // Draw the reflex angle arc (the larger arc)
  stroke(0, 0, 255);
  strokeWeight(3);
  arc(centerX, centerY, 120, 120, 0, TWO_PI - angleRad);
  
  // Add labels
  fill(0);
  textSize(14);
  textAlign(CENTER);
  text("A", centerX + radius + 15, centerY + 5);
  text("B", centerX - 15, centerY + 5);
  text("C", endX + 15, endY - 10);
  
  // Label the given angle
  fill(255, 0, 0);
  text("85°", centerX + 50, centerY - 20);
  
  // Label the reflex angle with a question mark
  fill(0, 0, 255);
  text("∠ABC = ?", centerX - 80, centerY - 80);
  
  noLoop();
}
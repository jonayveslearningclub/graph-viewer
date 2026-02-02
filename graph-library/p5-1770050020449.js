function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(18);
  text("Find the missing angle ∠ABC if ∠ABD = 28° and ∠DBC = 37°", 20, 30);
  
  // Draw the angle diagram
  let centerX = 400;
  let centerY = 350;
  let radius = 140;
  
  // Draw rays
  stroke(0);
  strokeWeight(2);
  
  // Ray BA (pointing up and left)
  let angleA = radians(125);
  line(centerX, centerY, centerX + radius * cos(angleA), centerY + radius * sin(angleA));
  
  // Ray BD (middle ray)
  let angleD = radians(97);
  line(centerX, centerY, centerX + radius * cos(angleD), centerY + radius * sin(angleD));
  
  // Ray BC (pointing right and up)
  let angleC = radians(60);
  line(centerX, centerY, centerX + radius * cos(angleC), centerY + radius * sin(angleC));
  
  // Label points
  textSize(16);
  fill(0);
  text("A", centerX + radius * cos(angleA) - 10, centerY + radius * sin(angleA) - 5);
  text("B", centerX - 10, centerY + 20);
  text("D", centerX + radius * cos(angleD) - 5, centerY + radius * sin(angleD) - 10);
  text("C", centerX + radius * cos(angleC) + 10, centerY + radius * sin(angleC) - 5);
  
  // Draw angle arcs
  noFill();
  stroke(255, 0, 0);
  strokeWeight(2);
  
  // Arc for angle ABD (28°)
  arc(centerX, centerY, 70, 70, radians(97), radians(125));
  
  // Arc for angle DBC (37°)
  stroke(0, 0, 255);
  arc(centerX, centerY, 90, 90, radians(60), radians(97));
  
  // Arc for the unknown angle ABC
  stroke(0, 150, 0);
  strokeWeight(3);
  arc(centerX, centerY, 110, 110, radians(60), radians(125));
  
  // Angle labels
  fill(255, 0, 0);
  textSize(14);
  text("28°", centerX - 25, centerY - 25);
  
  fill(0, 0, 255);
  text("37°", centerX + 15, centerY - 35);
  
  fill(0, 150, 0);
  text("?", centerX + 5, centerY - 50);
  
  noLoop();
}
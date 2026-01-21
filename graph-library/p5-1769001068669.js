function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Title
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("Find the missing angle ∠DEF if ∠DEG = 65° and ∠GEF = 42°", 20, 30);
  
  // Draw the angle diagram
  let centerX = 400;
  let centerY = 350;
  let radius = 120;
  
  // Draw rays
  stroke(0);
  strokeWeight(2);
  
  // Ray ED (horizontal left)
  line(centerX, centerY, centerX - radius, centerY);
  
  // Ray EG (at 65° from horizontal)
  let angle1 = radians(65);
  line(centerX, centerY, centerX + radius * cos(angle1), centerY - radius * sin(angle1));
  
  // Ray EF (at 107° from horizontal, since 65° + 42° = 107°)
  let angle2 = radians(107);
  line(centerX, centerY, centerX + radius * cos(angle2), centerY - radius * sin(angle2));
  
  // Label points
  fill(0);
  textSize(16);
  textAlign(CENTER);
  text("D", centerX - radius - 15, centerY + 5);
  text("E", centerX - 15, centerY + 20);
  text("G", centerX + radius * cos(angle1) + 15, centerY - radius * sin(angle1) - 10);
  text("F", centerX + radius * cos(angle2) - 15, centerY - radius * sin(angle2) - 10);
  
  // Draw angle arcs
  noFill();
  stroke(255, 0, 0);
  strokeWeight(2);
  
  // Arc for ∠DEG
  arc(centerX, centerY, 80, 80, 0, angle1);
  
  // Arc for ∠GEF
  stroke(0, 0, 255);
  arc(centerX, centerY, 60, 60, angle1, angle2);
  
  // Arc for the whole angle ∠DEF
  stroke(0, 150, 0);
  strokeWeight(3);
  arc(centerX, centerY, 100, 100, 0, angle2);
  
  // Angle labels
  fill(255, 0, 0);
  textSize(14);
  text("65°", centerX + 30, centerY - 10);
  
  fill(0, 0, 255);
  text("42°", centerX + 15, centerY - 30);
  
  fill(0, 150, 0);
  textSize(16);
  text("?", centerX + 45, centerY - 25);
  
  noLoop();
}
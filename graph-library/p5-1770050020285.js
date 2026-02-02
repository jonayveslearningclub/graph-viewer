function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(18);
  text("Find the missing angle ∠DEF if ∠DEG = 35° and ∠GEF = 42°", 20, 30);
  
  // Draw the angle diagram
  let centerX = 400;
  let centerY = 300;
  let radius = 120;
  
  // Draw rays
  stroke(0);
  strokeWeight(2);
  
  // Ray ED (horizontal left)
  line(centerX, centerY, centerX - radius, centerY);
  
  // Ray EG (angled up)
  let angleG = radians(35);
  line(centerX, centerY, centerX - radius * cos(angleG), centerY - radius * sin(angleG));
  
  // Ray EF (angled up more)
  let angleF = radians(35 + 42);
  line(centerX, centerY, centerX - radius * cos(angleF), centerY - radius * sin(angleF));
  
  // Label points
  textSize(16);
  fill(0);
  text("D", centerX - radius - 20, centerY + 5);
  text("E", centerX - 10, centerY + 20);
  text("G", centerX - radius * cos(angleG) - 5, centerY - radius * sin(angleG) - 10);
  text("F", centerX - radius * cos(angleF) - 5, centerY - radius * sin(angleF) - 10);
  
  // Draw angle arcs
  noFill();
  stroke(255, 0, 0);
  strokeWeight(2);
  
  // Arc for angle DEG (35°)
  arc(centerX, centerY, 60, 60, PI - radians(35), PI);
  
  // Arc for angle GEF (42°)  
  stroke(0, 0, 255);
  arc(centerX, centerY, 80, 80, PI - radians(77), PI - radians(35));
  
  // Arc for the unknown angle DEF
  stroke(0, 150, 0);
  strokeWeight(3);
  arc(centerX, centerY, 100, 100, PI - radians(77), PI);
  
  // Angle labels
  fill(255, 0, 0);
  textSize(14);
  text("35°", centerX - 45, centerY - 15);
  
  fill(0, 0, 255);
  text("42°", centerX - 65, centerY - 35);
  
  fill(0, 150, 0);
  text("?", centerX - 75, centerY - 25);
  
  noLoop();
}
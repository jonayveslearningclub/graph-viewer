function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(18);
  text("Find the missing angle ∠ABC if ∠ABD = 38° and ∠DBC = 29°", 20, 30);
  
  // Draw the angle diagram
  let centerX = 350;
  let centerY = 400;
  
  // Draw rays
  stroke(0);
  strokeWeight(2);
  
  // Ray BA (pointing up and left)
  let angleA = radians(130);
  line(centerX, centerY, centerX + 160 * cos(angleA), centerY + 160 * sin(angleA));
  
  // Ray BD (middle ray)
  let angleD = radians(92);
  line(centerX, centerY, centerX + 140 * cos(angleD), centerY + 140 * sin(angleD));
  
  // Ray BC (pointing right and up)
  let angleC = radians(63);
  line(centerX, centerY, centerX + 150 * cos(angleC), centerY + 150 * sin(angleC));
  
  // Label points
  fill(0);
  textSize(16);
  text("B", centerX + 10, centerY + 15);
  text("A", centerX + 160 * cos(angleA) - 10, centerY + 160 * sin(angleA) + 5);
  text("D", centerX + 140 * cos(angleD) - 5, centerY + 140 * sin(angleD) - 10);
  text("C", centerX + 150 * cos(angleC) + 10, centerY + 150 * sin(angleC) - 5);
  
  // Draw angle arcs
  noFill();
  stroke(255, 0, 0);
  strokeWeight(2);
  
  // Arc for angle ABD
  arc(centerX, centerY, 90, 90, angleD, angleA);
  
  // Arc for angle DBC
  stroke(0, 150, 0);
  arc(centerX, centerY, 70, 70, angleC, angleD);
  
  // Arc for the full angle ABC
  stroke(0, 0, 255);
  arc(centerX, centerY, 110, 110, angleC, angleA);
  
  // Angle labels
  fill(255, 0, 0);
  textSize(14);
  text("38°", centerX - 60, centerY - 20);
  
  fill(0, 150, 0);
  text("29°", centerX + 15, centerY - 35);
  
  fill(0, 0, 255);
  text("∠ABC = ?", centerX - 80, centerY + 180);
  
  noLoop();
}
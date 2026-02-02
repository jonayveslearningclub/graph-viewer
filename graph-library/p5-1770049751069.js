function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("Find the missing angle. If ∠ABC = 135° and ∠CBD = 47°, what is ∠ABD?", 20, 30);
  
  // Draw the angle diagram
  let centerX = 400;
  let centerY = 300;
  
  // Draw rays
  stroke(0);
  strokeWeight(2);
  
  // Ray BA (horizontal left)
  line(centerX, centerY, centerX - 150, centerY);
  
  // Ray BC (at 135° from horizontal)
  let angle1 = radians(135);
  line(centerX, centerY, centerX + 120 * cos(angle1), centerY - 120 * sin(angle1));
  
  // Ray BD (at about 47° below BC)
  let angle2 = radians(135 - 47);
  line(centerX, centerY, centerX + 140 * cos(angle2), centerY - 140 * sin(angle2));
  
  // Label points
  fill(0);
  textSize(18);
  text("A", centerX - 170, centerY + 5);
  text("B", centerX - 10, centerY + 20);
  text("C", centerX + 120 * cos(angle1) - 10, centerY - 120 * sin(angle1) + 20);
  text("D", centerX + 140 * cos(angle2) + 10, centerY - 140 * sin(angle2) + 5);
  
  // Draw angle arcs
  stroke(255, 0, 0);
  strokeWeight(2);
  noFill();
  
  // Arc for angle ABC (135°)
  arc(centerX, centerY, 80, 80, 0, radians(135));
  
  // Arc for angle CBD (47°)
  stroke(0, 0, 255);
  arc(centerX, centerY, 60, 60, radians(88), radians(135));
  
  // Label angles
  fill(255, 0, 0);
  textSize(14);
  text("135°", centerX + 20, centerY - 30);
  
  fill(0, 0, 255);
  text("47°", centerX + 35, centerY - 10);
  
  fill(0, 150, 0);
  text("∠ABD = ?", centerX - 80, centerY + 60);
  
  noLoop();
}
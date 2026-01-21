function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(18);
  text("Find the missing angle. If ∠XYZ = 90° and ∠XYW = 38°, what is ∠WYZ?", 20, 30);
  
  // Draw the right angle diagram
  let centerX = 400;
  let centerY = 400;
  
  // Draw rays
  stroke(0);
  strokeWeight(3);
  
  // Ray YX (horizontal right)
  line(centerX, centerY, centerX + 180, centerY);
  
  // Ray YZ (vertical up)
  line(centerX, centerY, centerX, centerY - 180);
  
  // Ray YW (angled)
  let angleW = 38; // degrees from horizontal
  let endWX = centerX + 140 * cos(radians(angleW));
  let endWY = centerY - 140 * sin(radians(angleW));
  line(centerX, centerY, endWX, endWY);
  
  // Draw right angle square
  noFill();
  stroke(0);
  strokeWeight(2);
  rect(centerX, centerY - 25, 25, 25);
  
  // Label points
  fill(0);
  textSize(18);
  text("Y", centerX - 25, centerY + 25);
  text("X", centerX + 190, centerY + 10);
  text("Z", centerX - 10, centerY - 195);
  text("W", endWX + 10, endWY - 10);
  
  // Draw angle arcs
  noFill();
  stroke(255, 0, 0);
  strokeWeight(2);
  
  // Arc for angle XYZ (90°)
  arc(centerX, centerY, 80, 80, radians(270), radians(360));
  
  // Arc for angle XYW (38°)
  stroke(0, 0, 255);
  arc(centerX, centerY, 100, 100, radians(270 + 38), radians(360));
  
  // Angle labels
  fill(255, 0, 0);
  textSize(16);
  text("90°", centerX + 35, centerY - 35);
  fill(0, 0, 255);
  text("38°", centerX + 50, centerY - 15);
  
  // Question mark for missing angle
  fill(0, 150, 0);
  textSize(18);
  text("?", centerX + 15, centerY - 50);
  
  noLoop();
}
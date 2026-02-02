function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("Find the missing angle. If ∠XYZ = 180° and ∠XYW = 73°, what is ∠WYZ?", 20, 30);
  
  // Draw the angle diagram
  let centerX = 400;
  let centerY = 300;
  
  // Draw rays
  stroke(0);
  strokeWeight(2);
  
  // Ray YX (horizontal left)
  line(centerX, centerY, centerX - 180, centerY);
  
  // Ray YZ (horizontal right) - forms straight line with YX
  line(centerX, centerY, centerX + 180, centerY);
  
  // Ray YW (at 73° above the horizontal line)
  let angleW = radians(180 - 73);
  line(centerX, centerY, centerX + 140 * cos(angleW), centerY - 140 * sin(angleW));
  
  // Label points
  fill(0);
  textSize(18);
  text("X", centerX - 200, centerY + 5);
  text("Y", centerX - 10, centerY + 20);
  text("Z", centerX + 190, centerY + 5);
  text("W", centerX + 140 * cos(angleW) - 5, centerY - 140 * sin(angleW) - 15);
  
  // Draw angle arcs
  stroke(255, 0, 0);
  strokeWeight(2);
  noFill();
  
  // Arc for straight angle XYZ (180°)
  arc(centerX, centerY, 120, 120, 0, radians(180));
  
  // Arc for angle XYW (73°)
  stroke(0, 0, 255);
  arc(centerX, centerY, 80, 80, radians(107), radians(180));
  
  // Label angles
  fill(255, 0, 0);
  textSize(14);
  text("180°", centerX - 20, centerY - 65);
  
  fill(0, 0, 255);
  text("73°", centerX - 60, centerY - 25);
  
  fill(0, 150, 0);
  text("∠WYZ = ?", centerX + 60, centerY + 50);
  
  // Note about straight line
  fill(100);
  textSize(12);
  text("(straight line)", centerX - 40, centerY + 35);
  
  noLoop();
}
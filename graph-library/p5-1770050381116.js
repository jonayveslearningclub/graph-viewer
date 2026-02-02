function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Question text
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("Find the unknown angles formed by intersecting lines.", 20, 30);
  text("Given: ∠WXY = 73° and ∠YXZ = 107°", 20, 55);
  text("Find: ∠ZXV and ∠VXW", 20, 80);
  
  let centerX = 400;
  let centerY = 320;
  
  // Draw two intersecting lines
  stroke(0);
  strokeWeight(3);
  
  // First line (diagonal)
  line(centerX - 160, centerY + 40, centerX + 160, centerY - 40);
  
  // Second line (other diagonal)
  line(centerX - 80, centerY - 140, centerX + 80, centerY + 140);
  
  // Mark intersection point X
  fill(255, 0, 0);
  noStroke();
  circle(centerX, centerY, 8);
  fill(0);
  textAlign(CENTER);
  textSize(14);
  text("X", centerX - 20, centerY - 10);
  
  // Label the rays
  textAlign(CENTER);
  text("W", centerX - 140, centerY + 35);
  text("Y", centerX - 65, centerY - 115);
  text("Z", centerX + 140, centerY - 35);
  text("V", centerX + 65, centerY + 115);
  
  // Show given angles with arcs
  noFill();
  stroke(255, 0, 0);
  strokeWeight(2);
  
  // Arc for angle WXY (73°)
  arc(centerX, centerY, 85, 85, radians(200), radians(273));
  fill(255, 0, 0);
  noStroke();
  textAlign(CENTER);
  textSize(12);
  text("73°", centerX - 40, centerY - 20);
  
  // Arc for angle YXZ (107°)
  noFill();
  stroke(0, 0, 255);
  strokeWeight(2);
  arc(centerX, centerY, 105, 105, radians(20), radians(127));
  fill(0, 0, 255);
  noStroke();
  text("107°", centerX + 30, centerY - 25);
  
  // Mark unknown angles with question marks
  fill(0, 150, 0);
  text("?", centerX + 40, centerY + 30);
  text("?", centerX - 30, centerY + 25);
  
  noLoop();
}
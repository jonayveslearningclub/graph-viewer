function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Question text
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("Two lines intersect forming four angles.", 20, 30);
  text("Given: ∠PQR = 42° and ∠RQS = 138°", 20, 55);
  text("Find: ∠SQT and ∠TQP", 20, 80);
  
  let centerX = 400;
  let centerY = 350;
  
  // Draw two intersecting lines
  stroke(0);
  strokeWeight(3);
  
  // First line
  line(centerX - 140, centerY - 80, centerX + 140, centerY + 80);
  
  // Second line
  line(centerX - 120, centerY + 90, centerX + 120, centerY - 90);
  
  // Mark intersection point Q
  fill(255, 0, 0);
  noStroke();
  circle(centerX, centerY, 8);
  fill(0);
  textAlign(CENTER);
  textSize(14);
  text("Q", centerX + 15, centerY - 15);
  
  // Label the rays
  textAlign(CENTER);
  text("P", centerX - 120, centerY - 65);
  text("R", centerX + 100, centerY - 75);
  text("S", centerX + 120, centerY + 65);
  text("T", centerX - 100, centerY + 75);
  
  // Show given angles with arcs
  noFill();
  stroke(255, 0, 0);
  strokeWeight(2);
  
  // Arc for angle PQR (42°)
  arc(centerX, centerY, 90, 90, radians(315), radians(357));
  fill(255, 0, 0);
  noStroke();
  textAlign(CENTER);
  textSize(12);
  text("42°", centerX + 35, centerY - 30);
  
  // Arc for angle RQS (138°)
  noFill();
  stroke(0, 0, 255);
  strokeWeight(2);
  arc(centerX, centerY, 110, 110, radians(45), radians(183));
  fill(0, 0, 255);
  noStroke();
  text("138°", centerX + 25, centerY + 15);
  
  // Mark unknown angles with question marks
  fill(0, 150, 0);
  text("?", centerX - 35, centerY + 35);
  text("?", centerX - 25, centerY - 35);
  
  noLoop();
}
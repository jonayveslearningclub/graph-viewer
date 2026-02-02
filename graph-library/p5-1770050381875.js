function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Question text
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("Find the missing angles when two lines intersect.", 20, 30);
  text("Given: ∠AOB = 65° and ∠BOC = 115°", 20, 55);
  text("Find: ∠COD and ∠DOA", 20, 80);
  
  // Draw coordinate system (just for positioning, not showing axes)
  let centerX = 400;
  let centerY = 350;
  
  // Draw two intersecting lines
  stroke(0);
  strokeWeight(3);
  
  // First line (horizontal-ish)
  line(centerX - 150, centerY + 50, centerX + 150, centerY - 50);
  
  // Second line (more vertical)
  line(centerX - 100, centerY - 120, centerX + 100, centerY + 120);
  
  // Mark intersection point O
  fill(255, 0, 0);
  noStroke();
  circle(centerX, centerY, 8);
  fill(0);
  textAlign(CENTER);
  textSize(14);
  text("O", centerX - 15, centerY + 5);
  
  // Label the rays
  textAlign(CENTER);
  text("A", centerX - 130, centerY + 40);
  text("B", centerX + 80, centerY - 100);
  text("C", centerX + 130, centerY - 40);
  text("D", centerX - 80, centerY + 100);
  
  // Show given angles with arcs
  noFill();
  stroke(255, 0, 0);
  strokeWeight(2);
  
  // Arc for angle AOB (65°)
  arc(centerX, centerY, 80, 80, radians(155), radians(220));
  fill(255, 0, 0);
  noStroke();
  textAlign(CENTER);
  textSize(12);
  text("65°", centerX - 45, centerY + 25);
  
  // Arc for angle BOC (115°)
  noFill();
  stroke(0, 0, 255);
  strokeWeight(2);
  arc(centerX, centerY, 100, 100, radians(40), radians(155));
  fill(0, 0, 255);
  noStroke();
  text("115°", centerX + 40, centerY - 35);
  
  // Mark unknown angles with question marks
  fill(0, 150, 0);
  text("?", centerX + 45, centerY + 35);
  text("?", centerX - 40, centerY - 25);
  
  noLoop();
}
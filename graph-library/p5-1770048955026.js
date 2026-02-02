function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Display the question
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("Find the value of x if angle MNO = 120° and angle MNP = 4x + 8°", 20, 30);
  text("and angle PNO = x + 22°", 20, 55);
  
  // Draw the angle diagram
  let centerX = 400;
  let centerY = 320;
  
  // Draw point N (vertex)
  fill(0);
  circle(centerX, centerY, 8);
  text("N", centerX - 15, centerY + 20);
  
  // Draw ray NM
  line(centerX, centerY, centerX - 120, centerY + 60);
  text("M", centerX - 135, centerY + 70);
  
  // Draw ray NO
  line(centerX, centerY, centerX + 100, centerY + 80);
  text("O", centerX + 110, centerY + 90);
  
  // Draw ray NP (between NM and NO)
  line(centerX, centerY, centerX - 30, centerY + 130);
  text("P", centerX - 40, centerY + 145);
  
  // Draw points
  fill(0);
  circle(centerX - 120, centerY + 60, 6);
  circle(centerX + 100, centerY + 80, 6);
  circle(centerX - 30, centerY + 130, 6);
  
  // Label the angles
  textAlign(CENTER);
  textSize(14);
  text("4x + 8°", centerX - 65, centerY + 80);
  text("x + 22°", centerX + 25, centerY + 90);
  text("120°", centerX - 25, centerY + 100);
  
  // Draw angle arcs
  noFill();
  stroke(0);
  strokeWeight(2);
  
  // Arc for angle MNP
  arc(centerX, centerY, 80, 80, radians(26), radians(103));
  
  // Arc for angle PNO
  arc(centerX, centerY, 60, 60, radians(38), radians(103));
  
  // Arc for total angle MNO
  arc(centerX, centerY, 100, 100, radians(26), radians(38));
  
  noLoop();
}
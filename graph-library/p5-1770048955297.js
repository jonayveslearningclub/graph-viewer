function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Display the question
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("Find the value of x if angle PQR = 90° and angle PQS = 3x - 12°", 20, 30);
  text("and angle SQR = 2x + 7°", 20, 55);
  
  // Draw the angle diagram
  let centerX = 400;
  let centerY = 350;
  
  // Draw point Q (vertex)
  fill(0);
  circle(centerX, centerY, 8);
  text("Q", centerX - 15, centerY + 20);
  
  // Draw ray QP (vertical up)
  line(centerX, centerY, centerX, centerY - 140);
  text("P", centerX - 10, centerY - 150);
  
  // Draw ray QR (horizontal right)
  line(centerX, centerY, centerX + 140, centerY);
  text("R", centerX + 150, centerY + 5);
  
  // Draw ray QS (between QP and QR)
  line(centerX, centerY, centerX + 90, centerY - 90);
  text("S", centerX + 100, centerY - 100);
  
  // Draw points
  fill(0);
  circle(centerX, centerY - 140, 6);
  circle(centerX + 140, centerY, 6);
  circle(centerX + 90, centerY - 90, 6);
  
  // Label the angles
  textAlign(CENTER);
  textSize(14);
  text("3x - 12°", centerX + 25, centerY - 60);
  text("2x + 7°", centerX + 70, centerY - 25);
  text("90°", centerX + 35, centerY - 35);
  
  // Draw angle arcs
  noFill();
  stroke(0);
  strokeWeight(2);
  
  // Arc for angle PQS
  arc(centerX, centerY, 70, 70, radians(315), radians(360));
  
  // Arc for angle SQR
  arc(centerX, centerY, 50, 50, radians(270), radians(315));
  
  // Arc for total angle PQR (right angle)
  arc(centerX, centerY, 90, 90, radians(270), radians(360));
  
  // Draw right angle symbol
  stroke(0);
  strokeWeight(1);
  line(centerX + 20, centerY, centerX + 20, centerY - 20);
  line(centerX + 20, centerY - 20, centerX, centerY - 20);
  
  noLoop();
}
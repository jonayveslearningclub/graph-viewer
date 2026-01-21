function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Title
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("Find the missing angles ∠PQR and ∠RQS if ∠PQS = 156° and ∠PQR = 3 × ∠RQS", 20, 30);
  
  // Draw the angle diagram
  let centerX = 400;
  let centerY = 350;
  let radius = 130;
  
  // Calculate angles: if ∠RQS = x, then ∠PQR = 3x, and 3x + x = 156°, so x = 39°
  // But don't show this calculation - just draw the setup
  
  // Draw rays
  stroke(0);
  strokeWeight(2);
  
  // Ray QP (horizontal left)
  line(centerX, centerY, centerX - radius, centerY);
  
  // Ray QR (at some angle - we'll use 117° from QP)
  let angle1 = radians(117);
  line(centerX, centerY, centerX + radius * cos(angle1), centerY - radius * sin(angle1));
  
  // Ray QS (at 156° from QP)
  let angle2 = radians(156);
  line(centerX, centerY, centerX + radius * cos(angle2), centerY - radius * sin(angle2));
  
  // Label points
  fill(0);
  textSize(16);
  textAlign(CENTER);
  text("P", centerX - radius - 15, centerY + 5);
  text("Q", centerX - 15, centerY + 20);
  text("R", centerX + radius * cos(angle1) - 15, centerY - radius * sin(angle1) + 15);
  text("S", centerX + radius * cos(angle2) - 15, centerY - radius * sin(angle2) - 10);
  
  // Draw angle arcs
  noFill();
  stroke(255, 0, 0);
  strokeWeight(2);
  
  // Arc for ∠PQR
  arc(centerX, centerY, 90, 90, radians(180), angle1);
  
  // Arc for ∠RQS
  stroke(0, 0, 255);
  arc(centerX, centerY, 70, 70, angle1, angle2);
  
  // Arc for the whole angle ∠PQS
  stroke(0, 150, 0);
  strokeWeight(3);
  arc(centerX, centerY, 110, 110, radians(180), angle2);
  
  // Angle labels
  fill(255, 0, 0);
  textSize(14);
  text("∠PQR = ?", centerX - 60, centerY - 40);
  
  fill(0, 0, 255);
  text("∠RQS = ?", centerX - 40, centerY - 60);
  
  fill(0, 150, 0);
  text("156°", centerX - 80, centerY - 20);
  
  // Given relationship
  fill(0);
  textSize(14);
  text("Given: ∠PQR = 3 × ∠RQS", centerX, centerY + 80);
  
  noLoop();
}
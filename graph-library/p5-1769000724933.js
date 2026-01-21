function setup() {
  createCanvas(800, 600);
  background(255);
  noLoop();
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("Find the missing angle ∠PQR if ∠PQS = 63° and ∠SQR = 29°", 50, 30);
  
  // Draw angle diagram
  translate(350, 300);
  
  // Draw rays
  stroke(0);
  strokeWeight(2);
  
  // Ray QP
  line(0, 0, -90, -70);
  // Ray QR
  line(0, 0, 100, 40);
  // Ray QS (middle ray)
  line(0, 0, 85, -25);
  
  // Label points
  fill(0);
  textSize(16);
  textAlign(CENTER);
  text("P", -105, -85);
  text("Q", -15, -15);
  text("R", 115, 55);
  text("S", 100, -35);
  
  // Draw angle arcs
  noFill();
  stroke(128, 0, 128);
  strokeWeight(2);
  
  // Arc for angle PQS (63°)
  arc(0, 0, 80, 80, radians(180-63), PI);
  
  // Arc for angle SQR (29°)
  stroke(255, 0, 128);
  arc(0, 0, 100, 100, radians(180-63), radians(180-34));
  
  // Angle labels
  fill(128, 0, 128);
  textAlign(CENTER);
  textSize(14);
  text("63°", -30, -25);
  
  fill(255, 0, 128);
  text("29°", -15, -40);
  
  // Question mark for missing angle
  fill(0);
  textSize(16);
  text("?", -45, -40);
}
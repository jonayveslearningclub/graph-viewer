function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background(255);
  
  // Display question
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("In triangle ABC, if angle A = 45°, angle B = 65°, what is the measure of angle C?", 20, 30);
  
  // Draw triangle ABC
  let centerX = width / 2;
  let centerY = height / 2;
  
  // Triangle vertices
  let A = {x: centerX - 150, y: centerY + 100};
  let B = {x: centerX + 150, y: centerY + 100};
  let C = {x: centerX - 50, y: centerY - 80};
  
  // Draw triangle
  stroke(0);
  strokeWeight(2);
  noFill();
  triangle(A.x, A.y, B.x, B.y, C.x, C.y);
  
  // Label vertices
  fill(0);
  textSize(20);
  textAlign(CENTER);
  text("A", A.x - 15, A.y + 25);
  text("B", B.x + 15, B.y + 25);
  text("C", C.x - 15, C.y - 15);
  
  // Draw angle arcs and labels
  // Angle A = 45°
  noFill();
  stroke(255, 0, 0);
  strokeWeight(2);
  arc(A.x, A.y, 60, 60, radians(0), radians(45));
  fill(255, 0, 0);
  textSize(16);
  textAlign(LEFT);
  text("45°", A.x + 25, A.y - 10);
  
  // Angle B = 65°
  noFill();
  stroke(0, 150, 0);
  strokeWeight(2);
  arc(B.x, B.y, 60, 60, radians(115), radians(180));
  fill(0, 150, 0);
  textAlign(RIGHT);
  text("65°", B.x - 25, B.y - 10);
  
  // Angle C marker (without the answer)
  noFill();
  stroke(0, 0, 255);
  strokeWeight(2);
  arc(C.x, C.y, 60, 60, radians(220), radians(320));
  fill(0, 0, 255);
  textAlign(CENTER);
  text("?", C.x, C.y + 35);
  
  // Add reminder about triangle angle sum
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("Remember: The sum of angles in a triangle = 180°", 20, height - 40);
  
  noLoop();
}
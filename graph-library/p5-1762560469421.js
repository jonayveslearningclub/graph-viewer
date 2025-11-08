function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  textSize(16);
  fill(0);
  text("Triangle ABC has angles measuring 45&#176;, 65&#176;, and x&#176;. Find the value of x.", 20, 30);
  
  // Draw triangle
  let ax = 200;
  let ay = 400;
  let bx = 500;
  let by = 400;
  let cx = 300;
  let cy = 200;
  
  stroke(0);
  strokeWeight(2);
  noFill();
  triangle(ax, ay, bx, by, cx, cy);
  
  // Label vertices
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(18);
  text("A", ax - 20, ay + 15);
  text("B", bx + 20, by + 15);
  text("C", cx, cy - 20);
  
  // Label angles
  textSize(16);
  fill(255, 0, 0);
  text("45&#176;", ax + 35, ay - 20);
  text("65&#176;", bx - 35, by - 20);
  text("x&#176;", cx, cy + 25);
  
  // Draw angle arcs
  stroke(255, 0, 0);
  strokeWeight(2);
  noFill();
  
  // Angle at A
  let angleA1 = atan2(cy - ay, cx - ax);
  let angleA2 = atan2(by - ay, bx - ax);
  arc(ax, ay, 60, 60, angleA2, angleA1);
  
  // Angle at B
  let angleB1 = atan2(ay - by, ax - bx);
  let angleB2 = atan2(cy - by, cx - bx);
  arc(bx, by, 60, 60, angleB2, angleB1);
  
  // Angle at C
  let angleC1 = atan2(ay - cy, ax - cx);
  let angleC2 = atan2(by - cy, bx - cx);
  arc(cx, cy, 60, 60, angleC1, angleC2);
  
  // Reminder text
  fill(0);
  textSize(14);
  textAlign(LEFT, CENTER);
  text("Remember: The sum of angles in a triangle equals 180&#176;", 50, 500);
  
  noLoop();
}
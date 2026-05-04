function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Display question
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("Triangle PQR has angles measuring 45°, 60°, and x°. Find the value of x.", 20, 30);
  
  // Draw triangle
  let centerX = width / 2;
  let centerY = height / 2 + 50;
  
  // Triangle vertices
  let px = centerX - 120;
  let py = centerY + 80;
  let qx = centerX + 150;
  let qy = centerY + 80;
  let rx = centerX - 20;
  let ry = centerY - 100;
  
  // Draw triangle outline
  stroke(0);
  strokeWeight(2);
  noFill();
  triangle(px, py, qx, qy, rx, ry);
  
  // Label vertices
  fill(0);
  textAlign(CENTER);
  textSize(18);
  text("P", px - 15, py + 5);
  text("Q", qx + 15, qy + 5);
  text("R", rx, ry - 15);
  
  // Label angles
  textSize(16);
  text("45°", px + 25, py - 10);
  text("60°", qx - 25, qy - 10);
  text("x°", rx - 10, ry + 25);
  
  // Draw angle arcs
  stroke(255, 0, 0);
  strokeWeight(2);
  noFill();
  
  // Angle at P
  arc(px, py, 40, 40, radians(315), radians(360));
  
  // Angle at Q
  arc(qx, qy, 40, 40, radians(180), radians(240));
  
  // Angle at R
  arc(rx, ry, 40, 40, radians(60), radians(120));
  
  noLoop();
}
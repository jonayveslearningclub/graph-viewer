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
  text("Find the area of triangle PQR with vertices P(2, 5), Q(7, 3), and R(4, 1)", 20, 30);
  
  // Set up coordinate system
  let centerX = width / 2;
  let centerY = height / 2;
  let scale = 25;
  
  // Draw grid lines
  stroke(220);
  strokeWeight(1);
  for (let i = -10; i <= 10; i++) {
    // Vertical lines
    line(centerX + i * scale, centerY - 10 * scale, centerX + i * scale, centerY + 10 * scale);
    // Horizontal lines
    line(centerX - 10 * scale, centerY + i * scale, centerX + 10 * scale, centerY + i * scale);
  }
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(centerX - 10 * scale, centerY, centerX + 10 * scale, centerY); // x-axis
  line(centerX, centerY - 10 * scale, centerX, centerY + 10 * scale); // y-axis
  
  // Label axes
  fill(0);
  textSize(14);
  textAlign(CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      // x-axis labels
      text(i, centerX + i * scale, centerY + 20);
      // y-axis labels
      text(-i, centerX - 20, centerY + i * scale + 5);
    }
  }
  text("0", centerX - 15, centerY + 15);
  
  // Plot triangle vertices
  let P = {x: 2, y: 5};
  let Q = {x: 7, y: 3};
  let R = {x: 4, y: 1};
  
  // Draw triangle
  stroke(255, 0, 0);
  strokeWeight(3);
  noFill();
  beginShape();
  vertex(centerX + P.x * scale, centerY - P.y * scale);
  vertex(centerX + Q.x * scale, centerY - Q.y * scale);
  vertex(centerX + R.x * scale, centerY - R.y * scale);
  endShape(CLOSE);
  
  // Plot and label points
  fill(255, 0, 0);
  noStroke();
  circle(centerX + P.x * scale, centerY - P.y * scale, 8);
  circle(centerX + Q.x * scale, centerY - Q.y * scale, 8);
  circle(centerX + R.x * scale, centerY - R.y * scale, 8);
  
  // Label points
  fill(0);
  textSize(16);
  textAlign(CENTER);
  text("P(2, 5)", centerX + P.x * scale - 25, centerY - P.y * scale - 10);
  text("Q(7, 3)", centerX + Q.x * scale + 25, centerY - Q.y * scale - 10);
  text("R(4, 1)", centerX + R.x * scale, centerY - R.y * scale + 25);
  
  noLoop();
}
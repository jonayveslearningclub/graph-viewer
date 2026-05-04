function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Display question
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("Find the area of triangle ABC with vertices A(2, 5), B(-3, 1), and C(4, -2)", 20, 30);
  
  // Set up coordinate system
  let centerX = width / 2;
  let centerY = height / 2;
  let scale = 20;
  
  // Draw grid lines
  stroke(220);
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
  textAlign(CENTER);
  textSize(12);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      // x-axis labels
      text(i, centerX + i * scale, centerY + 15);
      // y-axis labels
      text(i, centerX - 15, centerY - i * scale + 5);
    }
  }
  
  // Plot triangle vertices
  let ax = 2, ay = 5;
  let bx = -3, by = 1;
  let cx = 4, cy = -2;
  
  // Draw triangle
  stroke(255, 0, 0);
  strokeWeight(3);
  fill(255, 0, 0, 50);
  triangle(centerX + ax * scale, centerY - ay * scale,
          centerX + bx * scale, centerY - by * scale,
          centerX + cx * scale, centerY - cy * scale);
  
  // Plot and label vertices
  fill(255, 0, 0);
  noStroke();
  circle(centerX + ax * scale, centerY - ay * scale, 8);
  circle(centerX + bx * scale, centerY - by * scale, 8);
  circle(centerX + cx * scale, centerY - cy * scale, 8);
  
  fill(0);
  textAlign(CENTER);
  textSize(14);
  text("A(2, 5)", centerX + ax * scale + 15, centerY - ay * scale - 10);
  text("B(-3, 1)", centerX + bx * scale - 20, centerY - by * scale - 10);
  text("C(4, -2)", centerX + cx * scale + 15, centerY - cy * scale + 20);
  
  noLoop();
}
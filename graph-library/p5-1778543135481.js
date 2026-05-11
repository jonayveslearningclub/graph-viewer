function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("1. Triangle ABC has vertices at A(2, 5), B(-3, 1), and C(4, -2).", 20, 30);
  text("Plot the triangle and find its perimeter.", 20, 50);
  
  // Set up coordinate system
  let centerX = width / 2;
  let centerY = height / 2;
  let scale = 20;
  
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
  textSize(12);
  textAlign(CENTER, CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      // x-axis labels
      text(i, centerX + i * scale, centerY + 15);
      // y-axis labels
      text(-i, centerX - 15, centerY + i * scale);
    }
  }
  text("0", centerX - 12, centerY + 12);
  
  // Plot triangle vertices
  let Ax = 2, Ay = 5;
  let Bx = -3, By = 1;
  let Cx = 4, Cy = -2;
  
  // Convert to screen coordinates
  let screenAx = centerX + Ax * scale;
  let screenAy = centerY - Ay * scale;
  let screenBx = centerX + Bx * scale;
  let screenBy = centerY - By * scale;
  let screenCx = centerX + Cx * scale;
  let screenCy = centerY - Cy * scale;
  
  // Draw triangle
  stroke(255, 0, 0);
  strokeWeight(2);
  fill(255, 0, 0, 50);
  triangle(screenAx, screenAy, screenBx, screenBy, screenCx, screenCy);
  
  // Draw and label vertices
  fill(255, 0, 0);
  noStroke();
  circle(screenAx, screenAy, 8);
  circle(screenBx, screenBy, 8);
  circle(screenCx, screenCy, 8);
  
  fill(0);
  textSize(14);
  text("A(2, 5)", screenAx + 15, screenAy - 10);
  text("B(-3, 1)", screenBx - 20, screenBy - 10);
  text("C(4, -2)", screenCx + 15, screenCy + 15);
  
  noLoop();
}
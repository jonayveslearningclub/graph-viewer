function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  textSize(16);
  fill(0);
  text("Find the area of triangle ABC with vertices A(2, 4), B(-3, 1), and C(5, -2)", 20, 30);
  
  // Set up coordinate system
  let centerX = width / 2;
  let centerY = height / 2;
  let scale = 20;
  
  // Draw grid
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
  textSize(12);
  fill(0);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, centerX + i * scale - 5, centerY + 15);
      text(i, centerX - 15, centerY - i * scale + 5);
    }
  }
  text("0", centerX - 10, centerY + 15);
  
  // Plot triangle vertices
  let pointA = [2, 4];
  let pointB = [-3, 1];
  let pointC = [5, -2];
  
  // Draw triangle
  stroke(0);
  strokeWeight(2);
  fill(100, 150, 255, 100);
  triangle(
    centerX + pointA[0] * scale, centerY - pointA[1] * scale,
    centerX + pointB[0] * scale, centerY - pointB[1] * scale,
    centerX + pointC[0] * scale, centerY - pointC[1] * scale
  );
  
  // Mark and label vertices
  fill(255, 0, 0);
  noStroke();
  ellipse(centerX + pointA[0] * scale, centerY - pointA[1] * scale, 8, 8);
  ellipse(centerX + pointB[0] * scale, centerY - pointB[1] * scale, 8, 8);
  ellipse(centerX + pointC[0] * scale, centerY - pointC[1] * scale, 8, 8);
  
  fill(0);
  textSize(14);
  text("A(2, 4)", centerX + pointA[0] * scale + 10, centerY - pointA[1] * scale - 10);
  text("B(-3, 1)", centerX + pointB[0] * scale - 35, centerY - pointB[1] * scale - 10);
  text("C(5, -2)", centerX + pointC[0] * scale + 10, centerY - pointC[1] * scale + 20);
  
  noLoop();
}
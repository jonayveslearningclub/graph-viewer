function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  fill(0);
  textSize(16);
  text("9. Given the coordinates of the following triangle, verify that", 20, 25);
  text("   a. the triangle is isosceles", 20, 45);
  text("   b. the median from B to AC is ⊥ to AC", 20, 65);
  
  // Set up coordinate system
  let centerX = width / 2;
  let centerY = height / 2 + 30;
  let scale = 15;
  
  // Draw grid
  stroke(220);
  strokeWeight(1);
  for (let i = -10; i <= 10; i++) {
    line(centerX + i * scale, centerY - 10 * scale, centerX + i * scale, centerY + 10 * scale);
    line(centerX - 10 * scale, centerY + i * scale, centerX + 10 * scale, centerY + i * scale);
  }
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(centerX - 10 * scale, centerY, centerX + 10 * scale, centerY);
  line(centerX, centerY - 10 * scale, centerX, centerY + 10 * scale);
  
  // Label axes
  fill(0);
  textSize(12);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, centerX + i * scale - 5, centerY + 15);
      text(i, centerX - 15, centerY - i * scale + 5);
    }
  }
  text("0", centerX - 10, centerY + 15);
  text("x", centerX + 10 * scale + 10, centerY + 5);
  text("y", centerX - 10, centerY - 10 * scale - 10);
  
  // Triangle vertices
  let A = {x: 2, y: 8};
  let B = {x: -3, y: 3};
  let C = {x: 7, y: 3};
  
  // Draw triangle
  stroke(0);
  strokeWeight(2);
  fill(200, 200, 255, 100);
  triangle(centerX + A.x * scale, centerY - A.y * scale,
           centerX + B.x * scale, centerY - B.y * scale,
           centerX + C.x * scale, centerY - C.y * scale);
  
  // Mark vertices
  fill(255, 0, 0);
  noStroke();
  circle(centerX + A.x * scale, centerY - A.y * scale, 8);
  circle(centerX + B.x * scale, centerY - B.y * scale, 8);
  circle(centerX + C.x * scale, centerY - C.y * scale, 8);
  
  // Label vertices
  fill(0);
  textSize(14);
  text("A(2, 8)", centerX + A.x * scale + 10, centerY - A.y * scale - 5);
  text("B(-3, 3)", centerX + B.x * scale - 25, centerY - B.y * scale - 10);
  text("C(7, 3)", centerX + C.x * scale + 10, centerY - C.y * scale - 10);
  
  noLoop();
}
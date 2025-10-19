function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  // Question text
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("Triangle ABC has vertices at A(3, 4), B(7, 4), and C(5, 8).", 50, 40);
  text("What type of triangle is ABC?", 50, 65);
  
  // Multiple choice options
  textSize(16);
  text("A) Equilateral", 50, 100);
  text("B) Isosceles", 50, 125);
  text("C) Scalene", 50, 150);
  text("D) Right", 50, 175);
  
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
  textAlign(CENTER);
  textSize(14);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      // X-axis labels
      text(i, centerX + i * scale, centerY + 20);
      // Y-axis labels
      text(-i, centerX - 20, centerY + i * scale + 5);
    }
  }
  text("0", centerX - 15, centerY + 15);
  
  // Plot triangle vertices
  let Ax = centerX + 3 * scale;
  let Ay = centerY - 4 * scale;
  let Bx = centerX + 7 * scale;
  let By = centerY - 4 * scale;
  let Cx = centerX + 5 * scale;
  let Cy = centerY - 8 * scale;
  
  // Draw triangle
  stroke(0, 0, 255);
  strokeWeight(2);
  fill(200, 200, 255, 100);
  triangle(Ax, Ay, Bx, By, Cx, Cy);
  
  // Plot vertices
  fill(255, 0, 0);
  stroke(0);
  strokeWeight(2);
  ellipse(Ax, Ay, 8, 8);
  ellipse(Bx, By, 8, 8);
  ellipse(Cx, Cy, 8, 8);
  
  // Label vertices
  fill(0);
  textAlign(CENTER);
  textSize(16);
  text("A(3, 4)", Ax, Ay + 20);
  text("B(7, 4)", Bx, By + 20);
  text("C(5, 8)", Cx, Cy - 15);
  
  noLoop();
}
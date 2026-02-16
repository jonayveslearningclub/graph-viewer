function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  // Question text
  fill(0);
  textSize(18);
  text("1. Triangle ABC has vertices at A(2, 3), B(5, 7), and C(8, 4).", 20, 30);
  text("In which quadrant will triangle A'B'C' be located after reflection across the Y-axis?", 20, 55);
  
  // Set up coordinate system
  let centerX = width / 2;
  let centerY = height / 2;
  let scale = 25;
  
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
  fill(0);
  textSize(14);
  textAlign(CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, centerX + i * scale, centerY + 20);
      text(i, centerX - 20, centerY - i * scale + 5);
    }
  }
  text("0", centerX - 15, centerY + 15);
  
  // Draw original triangle ABC
  fill(100, 150, 255, 150);
  stroke(0);
  strokeWeight(2);
  
  let Ax = centerX + 2 * scale;
  let Ay = centerY - 3 * scale;
  let Bx = centerX + 5 * scale;
  let By = centerY - 7 * scale;
  let Cx = centerX + 8 * scale;
  let Cy = centerY - 4 * scale;
  
  triangle(Ax, Ay, Bx, By, Cx, Cy);
  
  // Label vertices
  fill(0);
  textAlign(CENTER);
  text("A(2, 3)", Ax, Ay - 15);
  text("B(5, 7)", Bx, By - 15);
  text("C(8, 4)", Cx + 20, Cy);
  
  noLoop();
}
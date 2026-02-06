function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  textSize(16);
  fill(0);
  text("Reflect triangle DEF across the y-axis. D(-4, 3), E(-1, 6), F(-5, 1)", 20, 30);
  
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
  
  // Original triangle vertices
  let pointD = [-4, 3];
  let pointE = [-1, 6];
  let pointF = [-5, 1];
  
  // Draw original triangle
  stroke(255, 0, 0);
  strokeWeight(2);
  fill(255, 100, 100, 100);
  triangle(
    centerX + pointD[0] * scale, centerY - pointD[1] * scale,
    centerX + pointE[0] * scale, centerY - pointE[1] * scale,
    centerX + pointF[0] * scale, centerY - pointF[1] * scale
  );
  
  // Mark and label original vertices
  fill(255, 0, 0);
  noStroke();
  ellipse(centerX + pointD[0] * scale, centerY - pointD[1] * scale, 8, 8);
  ellipse(centerX + pointE[0] * scale, centerY - pointE[1] * scale, 8, 8);
  ellipse(centerX + pointF[0] * scale, centerY - pointF[1] * scale, 8, 8);
  
  fill(255, 0, 0);
  textSize(14);
  text("D(-4, 3)", centerX + pointD[0] * scale - 40, centerY - pointD[1] * scale - 10);
  text("E(-1, 6)", centerX + pointE[0] * scale - 30, centerY - pointE[1] * scale - 10);
  text("F(-5, 1)", centerX + pointF[0] * scale - 40, centerY - pointF[1] * scale + 20);
  
  // Highlight y-axis for reflection
  stroke(0, 0, 255);
  strokeWeight(3);
  line(centerX, centerY - 10 * scale, centerX, centerY + 10 * scale);
  
  noLoop();
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  // Question text
  fill(0);
  textSize(18);
  text("2. Rectangle DEFG has vertices at D(-6, -2), E(-6, -8), F(-3, -8), and G(-3, -2).", 20, 30);
  text("In which quadrant will rectangle D'E'F'G' be located after reflection across the X-axis?", 20, 55);
  
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
  
  // Draw original rectangle DEFG
  fill(255, 150, 100, 150);
  stroke(0);
  strokeWeight(2);
  
  let Dx = centerX + (-6) * scale;
  let Dy = centerY - (-2) * scale;
  let Ex = centerX + (-6) * scale;
  let Ey = centerY - (-8) * scale;
  let Fx = centerX + (-3) * scale;
  let Fy = centerY - (-8) * scale;
  let Gx = centerX + (-3) * scale;
  let Gy = centerY - (-2) * scale;
  
  quad(Dx, Dy, Ex, Ey, Fx, Fy, Gx, Gy);
  
  // Label vertices
  fill(0);
  textAlign(CENTER);
  text("D(-6, -2)", Dx - 30, Dy);
  text("E(-6, -8)", Ex - 30, Ey);
  text("F(-3, -8)", Fx, Fy + 20);
  text("G(-3, -2)", Gx, Gy - 15);
  
  noLoop();
}
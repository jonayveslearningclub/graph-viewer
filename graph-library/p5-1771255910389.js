function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  // Question text
  fill(0);
  textSize(18);
  text("3. Square PQRS has vertices at P(1, 5), Q(4, 5), R(4, 8), and S(1, 8).", 20, 30);
  text("In which quadrant will square P''Q''R''S'' be located after reflection across", 20, 55);
  text("both the X-axis AND the Y-axis?", 20, 80);
  
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
  
  // Draw original square PQRS
  fill(150, 255, 150, 150);
  stroke(0);
  strokeWeight(2);
  
  let Px = centerX + 1 * scale;
  let Py = centerY - 5 * scale;
  let Qx = centerX + 4 * scale;
  let Qy = centerY - 5 * scale;
  let Rx = centerX + 4 * scale;
  let Ry = centerY - 8 * scale;
  let Sx = centerX + 1 * scale;
  let Sy = centerY - 8 * scale;
  
  quad(Px, Py, Qx, Qy, Rx, Ry, Sx, Sy);
  
  // Label vertices
  fill(0);
  textAlign(CENTER);
  text("P(1, 5)", Px - 25, Py);
  text("Q(4, 5)", Qx + 25, Qy);
  text("R(4, 8)", Rx + 25, Ry);
  text("S(1, 8)", Sx - 25, Sy);
  
  noLoop();
}
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("Rectangle PQRS is rotated 90° clockwise about the origin, then translated", 20, 25);
  text("5 units left and 2 units down. Find the coordinates of Q''.", 20, 45);
  
  // Set up coordinate system
  let centerX = width / 2;
  let centerY = height / 2;
  let gridSize = 20;
  
  // Draw grid
  stroke(220);
  strokeWeight(1);
  for (let x = -10; x <= 10; x++) {
    line(centerX + x * gridSize, centerY - 10 * gridSize, centerX + x * gridSize, centerY + 10 * gridSize);
  }
  for (let y = -10; y <= 10; y++) {
    line(centerX - 10 * gridSize, centerY - y * gridSize, centerX + 10 * gridSize, centerY - y * gridSize);
  }
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(centerX - 10 * gridSize, centerY, centerX + 10 * gridSize, centerY);
  line(centerX, centerY - 10 * gridSize, centerX, centerY + 10 * gridSize);
  
  // Label axes
  fill(0);
  textSize(12);
  textAlign(CENTER);
  for (let x = -10; x <= 10; x++) {
    if (x !== 0) {
      text(x, centerX + x * gridSize, centerY + 15);
    }
  }
  textAlign(CENTER);
  for (let y = -10; y <= 10; y++) {
    if (y !== 0) {
      text(y, centerX - 15, centerY - y * gridSize + 5);
    }
  }
  text("0", centerX - 10, centerY + 15);
  
  // Original rectangle PQRS
  stroke(0);
  strokeWeight(2);
  fill(255, 200, 150);
  let Px = centerX + 2 * gridSize;
  let Py = centerY - 3 * gridSize;
  let Qx = centerX + 5 * gridSize;
  let Qy = centerY - 3 * gridSize;
  let Rx = centerX + 5 * gridSize;
  let Ry = centerY - 1 * gridSize;
  let Sx = centerX + 2 * gridSize;
  let Sy = centerY - 1 * gridSize;
  
  quad(Px, Py, Qx, Qy, Rx, Ry, Sx, Sy);
  
  // Label original points
  fill(0);
  textSize(14);
  textAlign(CENTER);
  text("P(2, 3)", Px - 20, Py - 10);
  text("Q(5, 3)", Qx + 20, Qy - 10);
  text("R(5, 1)", Rx + 20, Ry + 20);
  text("S(2, 1)", Sx - 20, Sy + 20);
  
  noLoop();
}
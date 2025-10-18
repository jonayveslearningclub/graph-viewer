function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("Triangle DEF is reflected across the x-axis, then rotated 180° about", 20, 25);
  text("the origin, then translated 3 units right. What are the coordinates of E''?", 20, 45);
  
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
  
  // Original triangle DEF
  stroke(0);
  strokeWeight(2);
  fill(200, 255, 150);
  let Dx = centerX + (-4) * gridSize;
  let Dy = centerY - 2 * gridSize;
  let Ex = centerX + (-1) * gridSize;
  let Ey = centerY - 4 * gridSize;
  let Fx = centerX + (-2) * gridSize;
  let Fy = centerY - 1 * gridSize;
  
  triangle(Dx, Dy, Ex, Ey, Fx, Fy);
  
  // Label original points
  fill(0);
  textSize(14);
  textAlign(CENTER);
  text("D(-4, 2)", Dx - 25, Dy - 10);
  text("E(-1, 4)", Ex, Ey - 15);
  text("F(-2, 1)", Fx - 25, Fy + 20);
  
  noLoop();
}
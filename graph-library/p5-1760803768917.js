function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("Triangle ABC is translated 4 units right and 3 units up, then reflected", 20, 25);
  text("across the y-axis. What are the coordinates of A''?", 20, 45);
  
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
  
  // Original triangle ABC
  stroke(0);
  strokeWeight(2);
  fill(150, 200, 255);
  let Ax = centerX + (-6) * gridSize;
  let Ay = centerY - (-2) * gridSize;
  let Bx = centerX + (-3) * gridSize;
  let By = centerY - (-5) * gridSize;
  let Cx = centerX + (-1) * gridSize;
  let Cy = centerY - (-1) * gridSize;
  
  triangle(Ax, Ay, Bx, By, Cx, Cy);
  
  // Label original points
  fill(0);
  textSize(14);
  textAlign(CENTER);
  text("A(-6, -2)", Ax - 25, Ay - 10);
  text("B(-3, -5)", Bx, By + 20);
  text("C(-1, -1)", Cx + 25, Cy - 10);
  
  noLoop();
}
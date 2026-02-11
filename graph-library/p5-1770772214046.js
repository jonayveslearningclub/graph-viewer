function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Display question
  fill(0);
  textSize(16);
  text("3. Find the coordinates of point D if ABCD forms a rectangle", 20, 30);
  text("with A(-6, 4), B(3, 4), and C(3, -1).", 20, 50);
  
  // Set up coordinate system centered on canvas
  let centerX = width / 2;
  let centerY = height / 2;
  let scale = 20;
  
  // Draw grid lines
  stroke(200);
  strokeWeight(0.5);
  for (let i = -10; i <= 10; i++) {
    // Vertical grid lines
    line(centerX + i * scale, centerY - 10 * scale, centerX + i * scale, centerY + 10 * scale);
    // Horizontal grid lines
    line(centerX - 10 * scale, centerY + i * scale, centerX + 10 * scale, centerY + i * scale);
  }
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(centerX - 10 * scale, centerY, centerX + 10 * scale, centerY); // x-axis
  line(centerX, centerY - 10 * scale, centerX, centerY + 10 * scale); // y-axis
  
  // Label axes
  fill(0);
  textSize(12);
  textAlign(CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, centerX + i * scale, centerY + 15); // x-axis labels
      text(i, centerX - 15, centerY - i * scale + 5); // y-axis labels
    }
  }
  text("0", centerX - 10, centerY + 15);
  
  // Add axis titles
  textSize(14);
  text("x", centerX + 10 * scale + 10, centerY + 5);
  text("y", centerX - 5, centerY - 10 * scale - 10);
  
  // Plot given points
  fill(255, 0, 0);
  strokeWeight(1);
  
  // Point A(-6, 4)
  let ax = centerX + (-6) * scale;
  let ay = centerY - 4 * scale;
  circle(ax, ay, 8);
  fill(0);
  text("A(-6, 4)", ax - 25, ay - 10);
  
  // Point B(3, 4)
  fill(255, 0, 0);
  let bx = centerX + 3 * scale;
  let by = centerY - 4 * scale;
  circle(bx, by, 8);
  fill(0);
  text("B(3, 4)", bx + 15, by - 10);
  
  // Point C(3, -1)
  fill(255, 0, 0);
  let cx = centerX + 3 * scale;
  let cy = centerY - (-1) * scale;
  circle(cx, cy, 8);
  fill(0);
  text("C(3, -1)", cx + 15, cy + 15);
  
  noLoop();
}
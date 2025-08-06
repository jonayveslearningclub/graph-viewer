function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Display the question
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("Find the slope of the line passing through points M(-3, 2) and N(5, -4)", 20, 30);
  
  // Set up coordinate system
  let centerX = width / 2;
  let centerY = height / 2;
  let scale = 20;
  
  // Draw grid lines
  stroke(220);
  strokeWeight(1);
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
      // X-axis labels
      text(i, centerX + i * scale, centerY + 15);
      // Y-axis labels
      text(i, centerX - 15, centerY - i * scale + 5);
    }
  }
  
  // Label origin
  text("0", centerX - 10, centerY + 15);
  
  // Draw coordinate plane labels
  textAlign(LEFT);
  text("x", centerX + 10 * scale + 5, centerY + 5);
  text("y", centerX - 5, centerY - 10 * scale - 5);
  
  // Plot the points
  stroke(255, 0, 0);
  strokeWeight(1);
  fill(255, 0, 0);
  
  // Point M(-3, 2)
  let mx = centerX + (-3) * scale;
  let my = centerY - 2 * scale;
  circle(mx, my, 8);
  fill(0);
  text("M(-3, 2)", mx - 25, my - 10);
  
  // Point N(5, -4)
  fill(255, 0, 0);
  let nx = centerX + 5 * scale;
  let ny = centerY - (-4) * scale;
  circle(nx, ny, 8);
  fill(0);
  text("N(5, -4)", nx + 10, ny + 15);
  
  noLoop();
}
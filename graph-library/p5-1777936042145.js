function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Display question
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("Graph the function y = -2x + 3 and identify the y-intercept", 20, 30);
  
  // Set up coordinate system
  let centerX = width / 2;
  let centerY = height / 2;
  let scale = 20;
  
  // Draw grid lines
  stroke(220);
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
  textSize(12);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      // x-axis labels
      text(i, centerX + i * scale, centerY + 15);
      // y-axis labels
      text(i, centerX - 15, centerY - i * scale + 5);
    }
  }
  text("0", centerX - 10, centerY + 15);
  
  // Draw function y = -2x + 3
  stroke(0, 0, 255);
  strokeWeight(3);
  for (let x = -10; x <= 10; x += 0.1) {
    let y = -2 * x + 3;
    if (y >= -10 && y <= 10) {
      point(centerX + x * scale, centerY - y * scale);
    }
  }
  
  // Mark y-intercept point
  fill(255, 0, 0);
  noStroke();
  circle(centerX, centerY - 3 * scale, 10);
  
  // Label function
  fill(0, 0, 255);
  textAlign(LEFT);
  textSize(14);
  text("y = -2x + 3", centerX + 4 * scale, centerY - 5 * scale);
  
  noLoop();
}
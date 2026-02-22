function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background(255);
  
  // Display question
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("Graph the line y = -2x + 6 and find where it intersects the x-axis and y-axis", 20, 30);
  
  // Set up coordinate system
  let centerX = width / 2;
  let centerY = height / 2;
  let scale = 25;
  
  // Draw grid lines
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
      // x-axis labels
      text(i, centerX + i * scale, centerY + 20);
      // y-axis labels
      text(-i, centerX - 20, centerY + i * scale + 5);
    }
  }
  text("0", centerX - 15, centerY + 15);
  
  // Draw the line y = -2x + 6
  stroke(0, 0, 255);
  strokeWeight(3);
  let x1 = -2;
  let y1 = -2 * x1 + 6; // y = 10
  let x2 = 8;
  let y2 = -2 * x2 + 6; // y = -10
  
  line(centerX + x1 * scale, centerY - y1 * scale, centerX + x2 * scale, centerY - y2 * scale);
  
  // Mark y-intercept (0, 6)
  fill(255, 0, 0);
  noStroke();
  circle(centerX, centerY - 6 * scale, 8);
  fill(0);
  textAlign(LEFT);
  text("y-intercept (0, 6)", centerX + 15, centerY - 6 * scale + 5);
  
  // Mark x-intercept (3, 0)
  fill(255, 0, 0);
  noStroke();
  circle(centerX + 3 * scale, centerY, 8);
  fill(0);
  textAlign(CENTER);
  text("x-intercept (3, 0)", centerX + 3 * scale, centerY - 15);
  
  // Label the line
  fill(0, 0, 255);
  textSize(16);
  textAlign(LEFT);
  text("y = -2x + 6", centerX - 4 * scale, centerY - 7 * scale);
  
  noLoop();
}
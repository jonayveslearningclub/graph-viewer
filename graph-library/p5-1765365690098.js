function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(240);
  
  // Question text
  textSize(18);
  fill(0);
  text("Money Earned by Sarah", 50, 30);
  text("How much does Sarah earn in 3 hours? 1 hour? 2.5 hours? 6 hours?", 50, 55);
  
  // Set up coordinate system
  let centerX = width / 2;
  let centerY = height / 2 + 50;
  let scale = 20;
  
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
  
  // Axis labels
  textAlign(CENTER, CENTER);
  textSize(12);
  fill(0);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      // X-axis labels
      text(i, centerX + i * scale, centerY + 15);
      // Y-axis labels  
      text(i, centerX - 15, centerY - i * scale);
    }
  }
  
  // Origin
  text("0", centerX - 10, centerY + 10);
  
  // Axis titles
  textAlign(CENTER);
  textSize(14);
  text("Hours Worked", centerX, height - 30);
  
  push();
  translate(30, centerY);
  rotate(-PI/2);
  text("Money Earned ($)", 0, 0);
  pop();
  
  // Plot data points
  fill(0, 0, 255);
  stroke(0);
  strokeWeight(2);
  let points = [[2, 30], [4, 60], [5, 75], [8, 120]];
  
  for (let point of points) {
    let x = centerX + point[0] * scale;
    let y = centerY - point[1] * scale;
    circle(x, y, 8);
  }
  
  noLoop();
}
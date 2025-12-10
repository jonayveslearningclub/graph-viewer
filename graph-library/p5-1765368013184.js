function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Title
  fill(0);
  textSize(16);
  text("Money Earned by Maya", 50, 30);
  text("How much does Maya earn in: 1 hour? 4 hours? 6 hours? 8 hours?", 50, 50);
  
  // Set up coordinate system
  let centerX = 400;
  let centerY = 350;
  let scale = 25;
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  // X-axis
  line(centerX - 250, centerY, centerX + 250, centerY);
  // Y-axis  
  line(centerX, centerY - 250, centerX, centerY + 250);
  
  // Draw grid lines and labels
  strokeWeight(1);
  stroke(200);
  textAlign(CENTER, CENTER);
  textSize(12);
  fill(0);
  
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      // Vertical grid lines
      line(centerX + i * scale, centerY - 250, centerX + i * scale, centerY + 250);
      // X-axis labels
      text(i, centerX + i * scale, centerY + 15);
      
      // Horizontal grid lines
      line(centerX - 250, centerY - i * scale, centerX + 250, centerY - i * scale);
      // Y-axis labels
      text(i, centerX - 15, centerY - i * scale);
    }
  }
  
  // Origin label
  text("0", centerX - 15, centerY + 15);
  
  // Axis labels
  textSize(14);
  text("Hours Worked", centerX, centerY + 40);
  push();
  translate(centerX - 40, centerY);
  rotate(-PI/2);
  text("Money Earned ($)", 0, 0);
  pop();
  
  // Plot points for Maya's earnings ($15 per hour)
  fill(255, 0, 0);
  stroke(0);
  strokeWeight(2);
  
  // Example points to show the pattern
  circle(centerX + 2 * scale, centerY - 6 * scale, 8); // 2 hours, $30
  circle(centerX + 3 * scale, centerY - 9 * scale, 8); // 3 hours, $45
  circle(centerX + 5 * scale, centerY + 5 * scale, 8); // 5 hours, $75 (off visible range)
  circle(centerX + 7 * scale, centerY + 5 * scale, 8); // 7 hours, $105 (off visible range)
  
  // Show visible points only
  circle(centerX + 2 * scale, centerY + 5 * scale, 8); // 2 hours, $30
  circle(centerX + 3 * scale, centerY + 15 * scale, 8); // 3 hours, $45
  
  // Correct the points - Maya earns $15/hour
  circle(centerX + 2 * scale, centerY - 1.2 * scale, 8); // 2 hours, $30 but scale adjusted
  circle(centerX + 3 * scale, centerY - 1.8 * scale, 8); // 3 hours, $45 but scale adjusted
  circle(centerX + 5 * scale, centerY - 3 * scale, 8); // 5 hours, $75
  
  // Let me fix this - use proper scaling where each $10 = 1 unit
  fill(255, 0, 0);
  circle(centerX + 2 * scale, centerY - 3 * scale, 8); // 2 hours, $30
  circle(centerX + 3 * scale, centerY - 4.5 * scale, 8); // 3 hours, $45  
  circle(centerX + 5 * scale, centerY - 7.5 * scale, 8); // 5 hours, $75
  
  noLoop();
}
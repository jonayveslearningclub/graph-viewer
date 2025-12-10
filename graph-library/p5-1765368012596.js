function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Title
  fill(0);
  textSize(16);
  text("Money Earned by Carlos", 50, 30);
  text("How much does Carlos earn in: 2 hours? 5 hours? 7 hours? 9 hours?", 50, 50);
  
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
      // Y-axis labels (representing $10 increments)
      if (i > 0) {
        text("$" + (i * 10), centerX - 30, centerY - i * scale);
      }
    }
  }
  
  // Origin label
  text("$0", centerX - 20, centerY + 15);
  
  // Axis labels
  textSize(14);
  text("Hours Worked", centerX, centerY + 40);
  push();
  translate(centerX - 50, centerY);
  rotate(-PI/2);
  text("Money Earned", 0, 0);
  pop();
  
  // Plot points for Carlos's earnings ($12 per hour)
  fill(0, 0, 255);
  stroke(0);
  strokeWeight(2);
  
  // Example points showing the pattern (each y-unit represents $10)
  circle(centerX + 1 * scale, centerY - 1.2 * scale, 8); // 1 hour, $12
  circle(centerX + 3 * scale, centerY - 3.6 * scale, 8); // 3 hours, $36
  circle(centerX + 4 * scale, centerY - 4.8 * scale, 8); // 4 hours, $48
  circle(centerX + 6 * scale, centerY - 7.2 * scale, 8); // 6 hours, $72
  circle(centerX + 8 * scale, centerY - 9.6 * scale, 8); // 8 hours, $96
  
  noLoop();
}
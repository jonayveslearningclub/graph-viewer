function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Title
  fill(0);
  textSize(16);
  text("Money Earned by Sarah", 50, 30);
  text("How much does Sarah earn in: 1 hour? 3 hours? 6 hours? 10 hours?", 50, 50);
  
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
      // Y-axis labels (representing $5 increments)
      if (i > 0) {
        text("$" + (i * 5), centerX - 25, centerY - i * scale);
      }
    }
  }
  
  // Origin label
  text("$0", centerX - 18, centerY + 15);
  
  // Axis labels
  textSize(14);
  text("Hours Worked", centerX, centerY + 40);
  push();
  translate(centerX - 50, centerY);
  rotate(-PI/2);
  text("Money Earned", 0, 0);
  pop();
  
  // Plot points for Sarah's earnings ($8 per hour, each y-unit = $5)
  fill(0, 150, 0);
  stroke(0);
  strokeWeight(2);
  
  // Example points showing the pattern
  circle(centerX + 2 * scale, centerY - 3.2 * scale, 8); // 2 hours, $16
  circle(centerX + 4 * scale, centerY - 6.4 * scale, 8); // 4 hours, $32
  circle(centerX + 5 * scale, centerY - 8 * scale, 8); // 5 hours, $40
  circle(centerX + 7 * scale, centerY - 11.2 * scale, 8); // 7 hours, $56 (off visible)
  circle(centerX + 8 * scale, centerY - 12.8 * scale, 8); // 8 hours, $64 (off visible)
  
  // Keep only visible points and fix scale (each unit = $5)
  circle(centerX + 2 * scale, centerY - 3.2 * scale, 8); // 2 hours, $16
  circle(centerX + 4 * scale, centerY - 6.4 * scale, 8); // 4 hours, $32  
  circle(centerX + 5 * scale, centerY - 8 * scale, 8); // 5 hours, $40
  circle(centerX + 9 * scale, centerY - 14.4 * scale, 8); // 9 hours, $72 (may be off screen)
  
  noLoop();
}
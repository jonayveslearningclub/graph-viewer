function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(18);
  text("What time is shown on this analog clock?", 50, 30);
  
  // Clock center and size
  let centerX = 400;
  let centerY = 320;
  let radius = 120;
  
  // Draw clock face
  stroke(0);
  strokeWeight(3);
  fill(255);
  circle(centerX, centerY, radius * 2);
  
  // Draw hour numbers
  fill(0);
  textSize(16);
  textAlign(CENTER, CENTER);
  for (let i = 1; i <= 12; i++) {
    let angle = (i * 30 - 90) * PI / 180;
    let x = centerX + cos(angle) * (radius - 20);
    let y = centerY + sin(angle) * (radius - 20);
    text(i, x, y);
  }
  
  // Draw minute marks
  stroke(0);
  strokeWeight(1);
  for (let i = 0; i < 60; i++) {
    let angle = (i * 6 - 90) * PI / 180;
    let startRadius = radius - 10;
    let endRadius = radius - 5;
    if (i % 5 === 0) {
      startRadius = radius - 15;
    }
    let x1 = centerX + cos(angle) * startRadius;
    let y1 = centerY + sin(angle) * startRadius;
    let x2 = centerX + cos(angle) * endRadius;
    let y2 = centerY + sin(angle) * endRadius;
    line(x1, y1, x2, y2);
  }
  
  // Hour hand (6:00 - hour hand points directly at 6)
  strokeWeight(6);
  let hourAngle = (6 * 30 - 90) * PI / 180;
  let hourX = centerX + cos(hourAngle) * 60;
  let hourY = centerY + sin(hourAngle) * 60;
  line(centerX, centerY, hourX, hourY);
  
  // Minute hand (0 minutes - points to 12)
  strokeWeight(4);
  let minuteAngle = (0 * 6 - 90) * PI / 180;
  let minuteX = centerX + cos(minuteAngle) * 90;
  let minuteY = centerY + sin(minuteAngle) * 90;
  line(centerX, centerY, minuteX, minuteY);
  
  // Center dot
  fill(0);
  noStroke();
  circle(centerX, centerY, 12);
  
  // PM indicator
  fill(0);
  textSize(14);
  textAlign(LEFT);
  text("PM", centerX + 140, centerY + 20);
  
  noLoop();
}
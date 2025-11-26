function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(20);
  text("The function f(x) = -2x + 6 is graphed below.", 20, 30);
  text("a) What is the y-intercept of this line?", 20, 60);
  text("b) What is the x-intercept of this line?", 20, 90);
  text("c) What is the slope of the line?", 20, 120);
  text("d) Write the equation in slope-intercept form.", 20, 150);
  
  // Set up coordinate system
  let centerX = width / 2;
  let centerY = height / 2 + 50;
  let scale = 25;
  
  // Draw grid
  stroke(220);
  strokeWeight(1);
  for (let i = -10; i <= 10; i++) {
    line(centerX + i * scale, centerY - 10 * scale, centerX + i * scale, centerY + 10 * scale);
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
      text(i, centerX + i * scale, centerY + 20);
      text(i, centerX - 15, centerY - i * scale + 5);
    }
  }
  text("0", centerX - 10, centerY + 15);
  
  // Draw function f(x) = -2x + 6
  stroke(255, 0, 0);
  strokeWeight(3);
  let x1 = -10;
  let y1 = -2 * x1 + 6;
  let x2 = 10;
  let y2 = -2 * x2 + 6;
  
  // Clamp to visible range
  if (y1 > 10) {
    y1 = 10;
    x1 = (y1 - 6) / (-2);
  }
  if (y1 < -10) {
    y1 = -10;
    x1 = (y1 - 6) / (-2);
  }
  if (y2 > 10) {
    y2 = 10;
    x2 = (y2 - 6) / (-2);
  }
  if (y2 < -10) {
    y2 = -10;
    x2 = (y2 - 6) / (-2);
  }
  
  line(centerX + x1 * scale, centerY - y1 * scale, centerX + x2 * scale, centerY - y2 * scale);
  
  // Mark key points
  fill(0, 0, 255);
  noStroke();
  // Y-intercept at (0, 6)
  circle(centerX, centerY - 6 * scale, 8);
  // X-intercept at (3, 0)
  circle(centerX + 3 * scale, centerY, 8);
  
  // Label key points
  fill(0);
  textAlign(LEFT);
  text("(0, 6)", centerX + 10, centerY - 6 * scale - 5);
  text("(3, 0)", centerX + 3 * scale + 10, centerY + 15);
  
  noLoop();
}
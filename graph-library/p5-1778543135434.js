function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("2. The quadratic function f(x) = x&#178; - 4x + 3 is graphed below.", 20, 30);
  text("Find the x-intercepts of the parabola.", 20, 50);
  
  // Set up coordinate system
  let centerX = width / 2;
  let centerY = height / 2;
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
  
  // Label axes
  fill(0);
  textSize(12);
  textAlign(CENTER, CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      // x-axis labels
      text(i, centerX + i * scale, centerY + 15);
      // y-axis labels
      text(-i, centerX - 15, centerY + i * scale);
    }
  }
  text("0", centerX - 12, centerY + 12);
  
  // Draw parabola y = x^2 - 4x + 3
  stroke(0, 0, 255);
  strokeWeight(3);
  noFill();
  beginShape();
  for (let x = -2; x <= 6; x += 0.1) {
    let y = x * x - 4 * x + 3;
    if (y >= -10 && y <= 10) {
      let screenX = centerX + x * scale;
      let screenY = centerY - y * scale;
      vertex(screenX, screenY);
    }
  }
  endShape();
  
  // Mark key points on parabola
  fill(0, 0, 255);
  noStroke();
  
  // Vertex at (2, -1)
  circle(centerX + 2 * scale, centerY - (-1) * scale, 6);
  
  // y-intercept at (0, 3)
  circle(centerX + 0 * scale, centerY - 3 * scale, 6);
  
  // Label function
  fill(0);
  textSize(14);
  text("f(x) = x&#178; - 4x + 3", centerX + 3 * scale, centerY - 6 * scale);
  
  noLoop();
}
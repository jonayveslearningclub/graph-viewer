function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  // Question text
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("What is the slope of the line passing through points A(2, 5) and B(8, 11)?", 50, 40);
  
  // Multiple choice options
  textSize(16);
  text("A) 1", 50, 70);
  text("B) 2", 50, 95);
  text("C) 3", 50, 120);
  text("D) 6", 50, 145);
  
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
  textAlign(CENTER);
  textSize(14);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      // X-axis labels
      text(i, centerX + i * scale, centerY + 20);
      // Y-axis labels
      text(-i, centerX - 20, centerY + i * scale + 5);
    }
  }
  text("0", centerX - 15, centerY + 15);
  
  // Plot points A and B
  fill(255, 0, 0);
  stroke(0);
  strokeWeight(2);
  let pointAx = centerX + 2 * scale;
  let pointAy = centerY - 5 * scale;
  let pointBx = centerX + 8 * scale;
  let pointBy = centerY - 11 * scale;
  
  ellipse(pointAx, pointAy, 8, 8);
  ellipse(pointBx, pointBy, 8, 8);
  
  // Label points
  fill(0);
  textAlign(CENTER);
  textSize(16);
  text("A(2, 5)", pointAx, pointAy - 15);
  text("B(8, 11)", pointBx, pointBy - 15);
  
  // Draw line through points
  stroke(0, 0, 255);
  strokeWeight(2);
  line(centerX - 10 * scale, centerY - (-7) * scale, centerX + 10 * scale, centerY - 17 * scale);
  
  noLoop();
}
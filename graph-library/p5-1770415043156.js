function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  textSize(16);
  fill(0);
  text("What is the slope of the line passing through points M(3, 7) and N(-2, 1)?", 20, 30);
  
  // Set up coordinate system
  let centerX = width / 2;
  let centerY = height / 2;
  let scale = 20;
  
  // Draw grid
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
  textSize(12);
  fill(0);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, centerX + i * scale - 5, centerY + 15);
      text(i, centerX - 15, centerY - i * scale + 5);
    }
  }
  text("0", centerX - 10, centerY + 15);
  
  // Points
  let pointM = [3, 7];
  let pointN = [-2, 1];
  
  // Draw line through points
  stroke(0, 150, 0);
  strokeWeight(2);
  line(
    centerX + pointM[0] * scale, centerY - pointM[1] * scale,
    centerX + pointN[0] * scale, centerY - pointN[1] * scale
  );
  
  // Mark and label points
  fill(0, 0, 255);
  noStroke();
  ellipse(centerX + pointM[0] * scale, centerY - pointM[1] * scale, 10, 10);
  ellipse(centerX + pointN[0] * scale, centerY - pointN[1] * scale, 10, 10);
  
  fill(0);
  textSize(14);
  text("M(3, 7)", centerX + pointM[0] * scale + 10, centerY - pointM[1] * scale - 10);
  text("N(-2, 1)", centerX + pointN[0] * scale - 40, centerY - pointN[1] * scale - 10);
  
  noLoop();
}
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Display the question
  fill(0);
  textSize(16);
  text("Find the slope of the line passing through points A(2, 5) and B(8, 11).", 20, 30);
  
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
  textAlign(CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i != 0) {
      text(i, centerX + i * scale, centerY + 15); // x-axis labels
      text(i, centerX - 15, centerY - i * scale + 5); // y-axis labels
    }
  }
  
  // Plot points A and B
  fill(255, 0, 0);
  strokeWeight(1);
  stroke(0);
  let pointAX = centerX + 2 * scale;
  let pointAY = centerY - 5 * scale;
  let pointBX = centerX + 8 * scale;
  let pointBY = centerY - 11 * scale;
  
  ellipse(pointAX, pointAY, 8, 8);
  ellipse(pointBX, pointBY, 8, 8);
  
  // Label points
  fill(0);
  textAlign(LEFT);
  text("A(2, 5)", pointAX + 10, pointAY - 5);
  text("B(8, 11)", pointBX + 10, pointBY - 5);
  
  // Draw line through points
  stroke(0, 0, 255);
  strokeWeight(2);
  line(centerX - 10 * scale, centerY - (-7) * scale, centerX + 10 * scale, centerY - 17 * scale);
  
  noLoop();
}
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Draw question
  fill(0);
  textSize(16);
  text("2. What are the coordinates of points E, F, G, and H shown on the grid?", 20, 30);
  
  // Set up coordinate system
  let centerX = width / 2;
  let centerY = height / 2;
  let scale = 20;
  
  // Draw grid lines
  stroke(200);
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
  text("0", centerX - 10, centerY + 10);
  
  // Plot points for students to identify
  fill(0, 0, 255);
  stroke(0, 0, 255);
  strokeWeight(6);
  
  // Point E at (-4, 5)
  point(centerX + (-4) * scale, centerY + (-5) * scale);
  fill(0);
  textSize(14);
  text("E", centerX + (-4) * scale - 15, centerY + (-5) * scale - 15);
  
  // Point F at (6, -3)
  fill(0, 0, 255);
  point(centerX + 6 * scale, centerY + 3 * scale);
  fill(0);
  text("F", centerX + 6 * scale + 15, centerY + 3 * scale - 15);
  
  // Point G at (-7, -8)
  fill(0, 0, 255);
  point(centerX + (-7) * scale, centerY + 8 * scale);
  fill(0);
  text("G", centerX + (-7) * scale - 15, centerY + 8 * scale + 15);
  
  // Point H at (9, 4)
  fill(0, 0, 255);
  point(centerX + 9 * scale, centerY + (-4) * scale);
  fill(0);
  text("H", centerX + 9 * scale + 15, centerY + (-4) * scale - 15);
  
  noLoop();
}
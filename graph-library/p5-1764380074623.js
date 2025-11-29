function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Display question
  fill(0);
  textSize(18);
  text("Triangle PQR has vertices at P(1, 4), Q(6, 2), and R(3, 8). What are the", 20, 30);
  text("coordinates of triangle P'Q'R' after a reflection across the y-axis?", 20, 55);
  
  // Set up coordinate system
  let centerX = width / 2;
  let centerY = height / 2;
  let gridSize = 25;
  
  // Draw grid lines
  stroke(220);
  strokeWeight(1);
  for (let i = -10; i <= 10; i++) {
    // Vertical lines
    line(centerX + i * gridSize, centerY - 10 * gridSize, centerX + i * gridSize, centerY + 10 * gridSize);
    // Horizontal lines
    line(centerX - 10 * gridSize, centerY + i * gridSize, centerX + 10 * gridSize, centerY + i * gridSize);
  }
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(centerX, centerY - 10 * gridSize, centerX, centerY + 10 * gridSize); // y-axis
  line(centerX - 10 * gridSize, centerY, centerX + 10 * gridSize, centerY); // x-axis
  
  // Label axes
  fill(0);
  textSize(14);
  textAlign(CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      // X-axis labels
      text(i, centerX + i * gridSize, centerY + 20);
      // Y-axis labels
      text(i, centerX - 20, centerY - i * gridSize + 5);
    }
  }
  text("0", centerX - 15, centerY + 15);
  
  // Plot original triangle PQR
  let P_x = centerX + 1 * gridSize;
  let P_y = centerY - 4 * gridSize;
  let Q_x = centerX + 6 * gridSize;
  let Q_y = centerY - 2 * gridSize;
  let R_x = centerX + 3 * gridSize;
  let R_y = centerY - 8 * gridSize;
  
  // Draw triangle PQR
  stroke(255, 0, 0);
  strokeWeight(2);
  fill(255, 0, 0, 50);
  triangle(P_x, P_y, Q_x, Q_y, R_x, R_y);
  
  // Plot and label vertices
  fill(255, 0, 0);
  stroke(0);
  strokeWeight(1);
  circle(P_x, P_y, 6);
  circle(Q_x, Q_y, 6);
  circle(R_x, R_y, 6);
  
  fill(0);
  textAlign(CENTER);
  text("P(1, 4)", P_x - 20, P_y - 10);
  text("Q(6, 2)", Q_x + 20, Q_y + 15);
  text("R(3, 8)", R_x + 20, R_y - 10);
  
  noLoop();
}
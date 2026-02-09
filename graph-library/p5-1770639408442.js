function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  // Draw the coordinate plane
  let centerX = width / 2;
  let centerY = height / 2;
  let gridSize = min(width, height) * 0.03;
  
  // Draw grid lines
  stroke(200);
  strokeWeight(0.5);
  for (let i = -10; i <= 10; i++) {
    line(centerX + i * gridSize, centerY - 10 * gridSize, centerX + i * gridSize, centerY + 10 * gridSize);
    line(centerX - 10 * gridSize, centerY + i * gridSize, centerX + 10 * gridSize, centerY + i * gridSize);
  }
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(centerX - 10 * gridSize, centerY, centerX + 10 * gridSize, centerY); // x-axis
  line(centerX, centerY - 10 * gridSize, centerX, centerY + 10 * gridSize); // y-axis
  
  // Label axes
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(14);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, centerX + i * gridSize, centerY + 20);
      text(i, centerX - 20, centerY - i * gridSize);
    }
  }
  text("0", centerX - 15, centerY + 15);
  
  // Plot points
  fill(255, 0, 0);
  noStroke();
  let pointA = {x: 3, y: 5};
  let pointB = {x: -2, y: 1};
  let pointC = {x: 6, y: -4};
  let pointD = {x: -5, y: -3};
  
  circle(centerX + pointA.x * gridSize, centerY - pointA.y * gridSize, 8);
  circle(centerX + pointB.x * gridSize, centerY - pointB.y * gridSize, 8);
  circle(centerX + pointC.x * gridSize, centerY - pointC.y * gridSize, 8);
  circle(centerX + pointD.x * gridSize, centerY - pointD.y * gridSize, 8);
  
  // Label points
  fill(0);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("A", centerX + pointA.x * gridSize + 15, centerY - pointA.y * gridSize - 15);
  text("B", centerX + pointB.x * gridSize - 15, centerY - pointB.y * gridSize + 15);
  text("C", centerX + pointC.x * gridSize + 15, centerY - pointC.y * gridSize + 15);
  text("D", centerX + pointD.x * gridSize - 15, centerY - pointD.y * gridSize - 15);
  
  // Question text
  textAlign(LEFT, TOP);
  textSize(18);
  text("1. Write the coordinates of points A, B, C, and D.", 20, 20);
  
  noLoop();
}
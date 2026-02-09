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
  
  // Draw line segment from P to Q
  stroke(0, 0, 255);
  strokeWeight(3);
  let pointP = {x: -4, y: 2};
  let pointQ = {x: 7, y: -3};
  line(centerX + pointP.x * gridSize, centerY - pointP.y * gridSize, 
       centerX + pointQ.x * gridSize, centerY - pointQ.y * gridSize);
  
  // Plot points
  fill(255, 0, 0);
  noStroke();
  circle(centerX + pointP.x * gridSize, centerY - pointP.y * gridSize, 8);
  circle(centerX + pointQ.x * gridSize, centerY - pointQ.y * gridSize, 8);
  
  // Label points
  fill(0);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("P", centerX + pointP.x * gridSize - 15, centerY - pointP.y * gridSize + 15);
  text("Q", centerX + pointQ.x * gridSize + 15, centerY - pointQ.y * gridSize - 15);
  
  // Question text
  textAlign(LEFT, TOP);
  textSize(18);
  text("2. Find the slope of the line segment PQ where P(-4, 2) and Q(7, -3).", 20, 20);
  
  noLoop();
}
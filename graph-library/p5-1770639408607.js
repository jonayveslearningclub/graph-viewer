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
  
  // Draw original triangle
  stroke(0, 0, 255);
  strokeWeight(2);
  fill(200, 200, 255, 100);
  let triA = {x: 1, y: 4};
  let triB = {x: 4, y: 6};
  let triC = {x: 3, y: 1};
  
  triangle(centerX + triA.x * gridSize, centerY - triA.y * gridSize,
           centerX + triB.x * gridSize, centerY - triB.y * gridSize,
           centerX + triC.x * gridSize, centerY - triC.y * gridSize);
  
  // Plot vertices of original triangle
  fill(255, 0, 0);
  noStroke();
  circle(centerX + triA.x * gridSize, centerY - triA.y * gridSize, 8);
  circle(centerX + triB.x * gridSize, centerY - triB.y * gridSize, 8);
  circle(centerX + triC.x * gridSize, centerY - triC.y * gridSize, 8);
  
  // Label vertices
  fill(0);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("A", centerX + triA.x * gridSize - 15, centerY - triA.y * gridSize);
  text("B", centerX + triB.x * gridSize + 15, centerY - triB.y * gridSize);
  text("C", centerX + triC.x * gridSize + 15, centerY - triC.y * gridSize - 15);
  
  // Question text
  textAlign(LEFT, TOP);
  textSize(18);
  text("3. Plot the reflection of triangle ABC across the y-axis and label the new vertices A', B', C'.", 20, 20);
  
  noLoop();
}
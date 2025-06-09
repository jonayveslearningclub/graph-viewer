function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  // Question text
  fill(0);
  textSize(18);
  text("Find the distance from School to Library if you walk along the path shown.", 20, 30);
  
  // Draw coordinate grid from -10 to 10
  stroke(200);
  strokeWeight(1);
  
  let centerX = width / 2;
  let centerY = height / 2;
  let gridSize = 25;
  
  // Vertical grid lines
  for (let i = -10; i <= 10; i++) {
    let x = centerX + i * gridSize;
    line(x, centerY - 10 * gridSize, x, centerY + 10 * gridSize);
  }
  
  // Horizontal grid lines
  for (let i = -10; i <= 10; i++) {
    let y = centerY - i * gridSize;
    line(centerX - 10 * gridSize, y, centerX + 10 * gridSize, y);
  }
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(centerX - 10 * gridSize, centerY, centerX + 10 * gridSize, centerY); // x-axis
  line(centerX, centerY - 10 * gridSize, centerX, centerY + 10 * gridSize); // y-axis
  
  // Label axes
  fill(0);
  textSize(12);
  textAlign(CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      let x = centerX + i * gridSize;
      text(i, x, centerY + 15);
    }
  }
  
  textAlign(CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      let y = centerY - i * gridSize;
      text(i, centerX - 15, y + 5);
    }
  }
  
  // Draw path from School to Library
  stroke(255, 0, 0);
  strokeWeight(3);
  
  let schoolX = centerX - 6 * gridSize;
  let schoolY = centerY + 4 * gridSize;
  let libraryX = centerX + 5 * gridSize;
  let libraryY = centerY - 3 * gridSize;
  
  // Path: School → (-2, 4) → (2, 1) → Library
  line(schoolX, schoolY, centerX - 2 * gridSize, centerY + 4 * gridSize);
  line(centerX - 2 * gridSize, centerY + 4 * gridSize, centerX + 2 * gridSize, centerY - 1 * gridSize);
  line(centerX + 2 * gridSize, centerY - 1 * gridSize, libraryX, libraryY);
  
  // Mark locations
  fill(0, 0, 255);
  noStroke();
  ellipse(schoolX, schoolY, 8, 8);
  ellipse(libraryX, libraryY, 8, 8);
  
  // Labels
  fill(0);
  textSize(14);
  textAlign(LEFT);
  text("School", schoolX - 40, schoolY - 10);
  text("Library", libraryX + 10, libraryY - 10);
  
  noLoop();
}
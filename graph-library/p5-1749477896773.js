function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  // Question text
  fill(0);
  textSize(18);
  text("If you walk 3 blocks north from School, then 8 blocks east to reach Library,", 20, 30);
  text("how much longer is this path compared to walking directly?", 20, 55);
  
  // Draw coordinate grid from -10 to 10
  stroke(200);
  strokeWeight(1);
  
  let centerX = width / 2;
  let centerY = height / 2;
  let gridSize =25;
  
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
  
  // Mark locations
  let schoolX = centerX - 4 * gridSize;
  let schoolY = centerY + 3 * gridSize;
  let cornerX = centerX - 4 * gridSize;
  let cornerY = centerY;
  let libraryX = centerX + 4 * gridSize;
  let libraryY = centerY;
  
  // Draw L-shaped path
  stroke(0, 150, 0);
  strokeWeight(4);
  line(schoolX, schoolY, cornerX, cornerY); // North 3 blocks
  line(cornerX, cornerY, libraryX, libraryY); // East 8 blocks
  
  // Draw direct path (dashed)
  stroke(255, 0, 0);
  strokeWeight(2);
  drawingContext.setLineDash([8, 4]);
  line(schoolX, schoolY, libraryX, libraryY);
  drawingContext.setLineDash([]);
  
  // Mark points
  fill(0, 0, 255);
  noStroke();
  ellipse(schoolX, schoolY, 8, 8);
  ellipse(libraryX, libraryY, 8, 8);
  ellipse(cornerX, cornerY, 6, 6);
  
  // Labels
  fill(0);
  textSize(14);
  textAlign(LEFT);
  text("School", schoolX - 40, schoolY + 20);
  text("Library", libraryX + 10, libraryY - 10);
  text("3 blocks", schoolX - 60, schoolY + gridSize);
  text("8 blocks", centerX - gridSize, cornerY - 10);
  
  noLoop();
}
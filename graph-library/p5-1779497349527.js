function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background(255);
  
  // Display the question
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("Graph the line: y = 2x + 3", 20, 30);
  
  // Calculate grid dimensions
  let gridWidth = width - 200;
  let gridHeight = height - 150;
  let gridX = 100;
  let gridY = 75;
  
  // Draw coordinate plane
  stroke(200);
  strokeWeight(1);
  
  // Draw grid lines
  for (let i = 0; i <= 20; i++) {
    let x = gridX + (i * gridWidth / 20);
    line(x, gridY, x, gridY + gridHeight);
  }
  
  for (let i = 0; i <= 20; i++) {
    let y = gridY + (i * gridHeight / 20);
    line(gridX, y, gridX + gridWidth, y);
  }
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(gridX + gridWidth/2, gridY, gridX + gridWidth/2, gridY + gridHeight); // y-axis
  line(gridX, gridY + gridHeight/2, gridX + gridWidth, gridY + gridHeight/2); // x-axis
  
  // Label axes
  fill(0);
  textSize(14);
  textAlign(CENTER);
  
  // X-axis labels
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      let x = gridX + gridWidth/2 + (i * gridWidth/20);
      text(i, x, gridY + gridHeight/2 + 20);
    }
  }
  
  // Y-axis labels
  textAlign(CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      let y = gridY + gridHeight/2 - (i * gridHeight/20);
      text(i, gridX + gridWidth/2 - 25, y + 5);
    }
  }
  
  // Origin label
  text("0", gridX + gridWidth/2 - 15, gridY + gridHeight/2 + 20);
  
  // Axis labels
  textSize(16);
  text("x", gridX + gridWidth - 15, gridY + gridHeight/2 + 20);
  text("y", gridX + gridWidth/2 - 25, gridY + 15);
  
  noLoop();
}
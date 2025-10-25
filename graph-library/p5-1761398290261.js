function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(16);
  text("Create a tessellation pattern using hexagon MNOPQR on the coordinate plane.", 20, 30);
  
  // Set up coordinate system
  let centerX = width / 2;
  let centerY = height / 2;
  let gridSize = 25;
  
  // Draw grid lines
  stroke(200);
  strokeWeight(1);
  
  // Vertical lines
  for (let x = centerX - 10 * gridSize; x <= centerX + 10 * gridSize; x += gridSize) {
    line(x, 60, x, height - 40);
  }
  
  // Horizontal lines
  for (let y = centerY - 10 * gridSize; y <= centerY + 10 * gridSize; y += gridSize) {
    line(50, y, width - 50, y);
  }
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(50, centerY, width - 50, centerY); // x-axis
  line(centerX, 60, centerX, height - 40); // y-axis
  
  // Label axes
  fill(0);
  textSize(12);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, centerX + i * gridSize - 5, centerY + 15);
      text(i, centerX - 15, centerY - i * gridSize + 5);
    }
  }
  text("0", centerX - 10, centerY + 15);
  
  // Draw sample hexagon MNOPQR
  fill(255, 200, 150, 100);
  stroke(0);
  strokeWeight(2);
  let hexX = centerX - 2 * gridSize;
  let hexY = centerY - 1 * gridSize;
  let hexSize = gridSize;
  
  beginShape();
  vertex(hexX, hexY - hexSize);          // M
  vertex(hexX + hexSize, hexY - hexSize/2); // N
  vertex(hexX + hexSize, hexY + hexSize/2); // O
  vertex(hexX, hexY + hexSize);          // P
  vertex(hexX - hexSize, hexY + hexSize/2); // Q
  vertex(hexX - hexSize, hexY - hexSize/2); // R
  endShape(CLOSE);
  
  // Label vertices
  fill(0);
  textSize(12);
  text("M", hexX - 5, hexY - hexSize - 5);
  text("N", hexX + hexSize + 5, hexY - hexSize/2);
  text("O", hexX + hexSize + 5, hexY + hexSize/2 + 5);
  text("P", hexX - 5, hexY + hexSize + 15);
  text("Q", hexX - hexSize - 15, hexY + hexSize/2 + 5);
  text("R", hexX - hexSize - 15, hexY - hexSize/2);
  
  // Instructions
  textSize(11);
  text("Use translations to create a tessellation pattern with this hexagon.", 20, height - 40);
  text("Show how multiple copies fit together without gaps or overlaps.", 20, height - 25);
  
  noLoop();
}
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(18);
  text("2. If this hexagon tessellation continues, how many hexagons will be in row 6?", 20, 30);
  
  // Draw hexagon tessellation pattern
  let hexSize = 20;
  let startX = 100;
  let startY = 100;
  
  stroke(0);
  strokeWeight(2);
  fill(150, 200, 255);
  
  // Row labels
  textSize(14);
  fill(0);
  text("Row 1", 20, startY + 15);
  text("Row 2", 20, startY + 60);
  text("Row 3", 20, startY + 105);
  text("Row 4", 20, startY + 150);
  text("Row 5", 20, startY + 195);
  
  fill(150, 200, 255);
  
  // Row 1: 2 hexagons
  drawHexagon(startX, startY, hexSize);
  drawHexagon(startX + 45, startY, hexSize);
  
  // Row 2: 4 hexagons
  drawHexagon(startX - 20, startY + 45, hexSize);
  drawHexagon(startX + 25, startY + 45, hexSize);
  drawHexagon(startX + 70, startY + 45, hexSize);
  drawHexagon(startX + 115, startY + 45, hexSize);
  
  // Row 3: 6 hexagons
  drawHexagon(startX - 40, startY + 90, hexSize);
  drawHexagon(startX + 5, startY + 90, hexSize);
  drawHexagon(startX + 50, startY + 90, hexSize);
  drawHexagon(startX + 95, startY + 90, hexSize);
  drawHexagon(startX + 140, startY + 90, hexSize);
  drawHexagon(startX + 185, startY + 90, hexSize);
  
  // Row 4: 8 hexagons
  drawHexagon(startX - 60, startY + 135, hexSize);
  drawHexagon(startX - 15, startY + 135, hexSize);
  drawHexagon(startX + 30, startY + 135, hexSize);
  drawHexagon(startX + 75, startY + 135, hexSize);
  drawHexagon(startX + 120, startY + 135, hexSize);
  drawHexagon(startX + 165, startY + 135, hexSize);
  drawHexagon(startX + 210, startY + 135, hexSize);
  drawHexagon(startX + 255, startY + 135, hexSize);
  
  // Row 5: 10 hexagons
  drawHexagon(startX - 80, startY + 180, hexSize);
  drawHexagon(startX - 35, startY + 180, hexSize);
  drawHexagon(startX + 10, startY + 180, hexSize);
  drawHexagon(startX + 55, startY + 180, hexSize);
  drawHexagon(startX + 100, startY + 180, hexSize);
  drawHexagon(startX + 145, startY + 180, hexSize);
  drawHexagon(startX + 190, startY + 180, hexSize);
  drawHexagon(startX + 235, startY + 180, hexSize);
  drawHexagon(startX + 280, startY + 180, hexSize);
  drawHexagon(startX + 325, startY + 180, hexSize);
  
  // Pattern count display
  fill(0);
  textSize(16);
  text("Hexagon Count:", 50, 400);
  text("Row 1: 2 hexagons", 50, 430);
  text("Row 2: 4 hexagons", 50, 450);
  text("Row 3: 6 hexagons", 50, 470);
  text("Row 4: 8 hexagons", 50, 490);
  text("Row 5: 10 hexagons", 50, 510);
  text("Row 6: ? hexagons", 50, 530);
  
  noLoop();
}

function drawHexagon(x, y, size) {
  beginShape();
  for (let i = 0; i < 6; i++) {
    let angle = TWO_PI / 6 * i;
    let xPos = x + cos(angle) * size;
    let yPos = y + sin(angle) * size;
    vertex(xPos, yPos);
  }
  endShape(CLOSE);
}
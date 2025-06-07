function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(18);
  text("3. How many small triangles will be in the 7th figure of this triangular pattern?", 20, 30);
  
  // Draw triangular tessellation pattern
  let triSize = 30;
  let startX = 400;
  let startY = 100;
  
  stroke(0);
  strokeWeight(2);
  fill(255, 200, 150);
  
  // Figure labels
  textSize(14);
  fill(0);
  text("Figure 1", startX - 80, startY + 80);
  text("Figure 2", startX - 40, startY + 150);
  text("Figure 3", startX, startY + 220);
  text("Figure 4", startX + 40, startY + 290);
  
  fill(255, 200, 150);
  
  // Figure 1: 1 triangle
  drawTriangle(startX - 60, startY, triSize);
  
  // Figure 2: 4 triangles (2x2 arrangement)
  drawTriangle(startX - 20, startY + 70, triSize);
  drawTriangle(startX - 35, startY + 95, triSize/2);
  drawTriangle(startX - 5, startY + 95, triSize/2);
  drawTriangle(startX - 20, startY + 110, triSize/2);
  
  // Figure 3: 9 triangles (3x3 arrangement)
  // Top row
  drawTriangle(startX + 20, startY + 140, triSize);
  // Second row
  drawTriangle(startX + 5, startY + 165, triSize/2);
  drawTriangle(startX + 35, startY + 165, triSize/2);
  drawTriangle(startX + 20, startY + 180, triSize/2);
  // Third row
  drawTriangle(startX, startY + 195, triSize/3);
  drawTriangle(startX + 15, startY + 195, triSize/3);
  drawTriangle(startX + 30, startY + 195, triSize/3);
  drawTriangle(startX + 45, startY + 195, triSize/3);
  drawTriangle(startX + 22, startY + 205, triSize/3);
  
  // Figure 4: 16 triangles (4x4 arrangement)
  // Multiple rows of small triangles
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col <= row; col++) {
      drawTriangle(startX + 60 + col * 15 - row * 7, startY + 210 + row * 15, triSize/4);
    }
  }
  
  // Pattern count display
  fill(0);
  textSize(16);
  text("Triangle Count Pattern:", 50, 400);
  text("Figure 1: 1 triangle = 1&#178;", 50, 430);
  text("Figure 2: 4 triangles = 2&#178;", 50, 450);
  text("Figure 3: 9 triangles = 3&#178;", 50, 470);
  text("Figure 4: 16 triangles = 4&#178;", 50, 490);
  text("Figure 5: 25 triangles = 5&#178;", 50, 510);
  text("Figure 6: 36 triangles = 6&#178;", 50, 530);
  text("Figure 7: ? triangles = 7&#178;", 50, 550);
  
  noLoop();
}

function drawTriangle(x, y, size) {
  triangle(x, y - size/2, x - size/2, y + size/2, x + size/2, y + size/2);
}
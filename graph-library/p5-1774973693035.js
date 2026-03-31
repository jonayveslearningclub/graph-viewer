function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("Find the area of the front face of this triangular prism.", 20, 30);
  text("Base = 12 units, Height of triangle = 9 units, Depth = 7 units", 20, 50);
  
  // Draw 3D triangular prism
  stroke(0);
  strokeWeight(2);
  
  // Front triangular face (what we need to find area of)
  fill(255, 220, 220);
  triangle(300, 350, 200, 200, 400, 200);
  
  // Top rectangular face
  fill(220, 255, 220);
  quad(200, 200, 240, 140, 440, 140, 400, 200);
  
  // Right rectangular face
  fill(220, 220, 255);
  quad(300, 350, 340, 290, 440, 140, 400, 200);
  
  // Bottom rectangular face
  fill(200, 200, 200);
  quad(300, 350, 340, 290, 240, 290, 200, 350);
  
  // Labels
  fill(0);
  textSize(14);
  text("Base = 12", 270, 380);
  text("Height = 9", 150, 280);
  text("Depth = 7", 420, 280);
  
  // Arrow pointing to front face
  stroke(255, 0, 0);
  strokeWeight(3);
  line(120, 250, 180, 250);
  fill(255, 0, 0);
  triangle(190, 245, 180, 250, 190, 255);
  
  fill(255, 0, 0);
  textSize(14);
  text("Find area of", 30, 245);
  text("this face", 30, 265);
  
  noLoop();
}
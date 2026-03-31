function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("Find the area of the bottom face of this triangular prism.", 20, 30);
  text("Base = 12 units, Height of triangle = 9 units", 20, 55);
  
  // Draw 3D triangular prism
  stroke(0);
  strokeWeight(2);
  
  // Bottom face (triangle - the one we need area of)
  fill(255, 200, 200);
  triangle(200, 350, 320, 350, 260, 230);
  
  // Back face (triangle)
  fill(200, 180, 180);
  triangle(260, 280, 380, 280, 320, 160);
  
  // Connecting edges and rectangular faces
  fill(220, 190, 190);
  quad(200, 350, 260, 280, 380, 280, 320, 350);
  
  fill(210, 180, 180);
  quad(320, 350, 380, 280, 320, 160, 260, 230);
  
  fill(230, 200, 200);
  quad(200, 350, 260, 280, 320, 160, 260, 230);
  
  // Labels
  fill(255, 0, 0);
  textSize(16);
  textAlign(CENTER);
  text("BOTTOM FACE", 260, 370);
  
  fill(0);
  textSize(14);
  text("12 units", 260, 390);
  
  textAlign(CENTER);
  translate(180, 290);
  rotate(-PI/3);
  text("9 units", 0, 0);
  
  noLoop();
}
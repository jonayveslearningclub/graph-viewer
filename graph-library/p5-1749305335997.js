function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  fill(0);
  textSize(16);
  text("Find the volume of a triangular prism with base = 8 units, height = 3 units, and length = 12 units.", 20, 30);
  
  // Draw triangular prism
  stroke(0);
  strokeWeight(2);
  fill(255, 200, 200, 150);
  
  // Front triangular face
  triangle(200, 350, 300, 350, 250, 250);
  
  // Back triangular face (offset for 3D effect)
  triangle(280, 300, 380, 300, 330, 200);
  
  // Connect corresponding vertices
  line(200, 350, 280, 300);
  line(300, 350, 380, 300);
  line(250, 250, 330, 200);
  
  // Fill visible faces
  fill(255, 180, 180, 120);
  quad(200, 350, 300, 350, 380, 300, 280, 300);
  
  fill(255, 160, 160, 120);
  quad(250, 250, 330, 200, 380, 300, 300, 350);
  
  // Redraw edges
  stroke(0);
  strokeWeight(2);
  noFill();
  triangle(200, 350, 300, 350, 250, 250);
  triangle(280, 300, 380, 300, 330, 200);
  line(200, 350, 280, 300);
  line(300, 350, 380, 300);
  line(250, 250, 330, 200);
  
  // Labels
  fill(0);
  textSize(14);
  text("base = 8", 220, 370);
  text("height = 3", 180, 300);
  text("length = 12", 320, 330);
  
  // Dimension lines
  stroke(255, 0, 0);
  strokeWeight(1);
  line(200, 360, 300, 360);
  line(195, 355, 205, 365);
  line(295, 355, 305, 365);
  
  line(190, 250, 190, 350);
  line(185, 245, 195, 255);
  line(185, 345, 195, 355);
  
  noLoop();
}
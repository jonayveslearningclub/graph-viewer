function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  fill(0);
  textSize(16);
  text("Find the volume of a rectangular prism with length = 7 units, width = 4 units, and height = 5 units.", 20, 30);
  
  // Draw 3D rectangular prism
  stroke(0);
  strokeWeight(2);
  fill(200, 220, 255, 150);
  
  // Front face
  quad(150, 200, 300, 200, 300, 350, 150, 350);
  
  // Top face
  quad(150, 200, 200, 150, 350, 150, 300, 200);
  
  // Right face
  quad(300, 200, 350, 150, 350, 300, 300, 350);
  
  // Labels
  fill(0);
  textSize(14);
  text("length = 7", 200, 380);
  text("width = 4", 380, 225);
  text("height = 5", 120, 275);
  
  // Dimension arrows
  stroke(255, 0, 0);
  strokeWeight(1);
  line(150, 360, 300, 360);
  line(145, 355, 155, 365);
  line(295, 355, 305, 365);
  
  line(360, 150, 360, 300);
  line(355, 145, 365, 155);
  line(355, 295, 365, 305);
  
  line(140, 200, 140, 350);
  line(135, 195, 145, 205);
  line(135, 345, 145, 355);
  
  noLoop();
}
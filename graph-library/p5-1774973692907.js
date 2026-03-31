function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("Find the area of the top face of this rectangular prism.", 20, 30);
  text("Length = 8 units, Width = 5 units, Height = 6 units", 20, 50);
  
  // Draw 3D rectangular prism
  stroke(0);
  strokeWeight(2);
  fill(220, 220, 255);
  
  // Front face
  rect(200, 200, 200, 150);
  
  // Top face (what we need to find area of)
  fill(255, 220, 220);
  quad(200, 200, 260, 140, 360, 140, 300, 200);
  
  // Right face
  fill(200, 200, 200);
  quad(300, 200, 360, 140, 360, 290, 300, 350);
  
  // Labels
  fill(0);
  textSize(14);
  text("Length = 8", 240, 380);
  text("Width = 5", 120, 270);
  text("Height = 6", 320, 280);
  
  // Arrow pointing to top face
  stroke(255, 0, 0);
  strokeWeight(3);
  line(450, 160, 330, 170);
  fill(255, 0, 0);
  triangle(320, 165, 330, 170, 320, 175);
  
  fill(255, 0, 0);
  textSize(14);
  text("Find area of this face", 460, 165);
  
  noLoop();
}
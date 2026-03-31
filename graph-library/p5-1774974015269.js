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
  text("Find the area of the front face of this rectangular prism.", 20, 30);
  text("Length = 8 units, Height = 5 units", 20, 55);
  
  // Draw 3D rectangular prism
  stroke(0);
  strokeWeight(2);
  fill(200, 220, 255);
  
  // Front face (the one we need to find area of)
  rect(150, 150, 240, 150); // 8 units × 5 units scaled
  
  // Top face
  fill(180, 200, 235);
  quad(150, 150, 210, 90, 330, 90, 270, 150);
  
  // Right face  
  fill(160, 180, 215);
  quad(270, 150, 330, 90, 330, 240, 270, 300);
  
  // Labels
  fill(255, 0, 0);
  textSize(16);
  textAlign(CENTER);
  text("FRONT FACE", 210, 135);
  
  fill(0);
  textSize(14);
  text("8 units", 210, 320);
  
  textAlign(CENTER);
  translate(130, 225);
  rotate(-PI/2);
  text("5 units", 0, 0);
  
  noLoop();
}
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("Find the area of the bottom face of this cube.", 20, 30);
  text("Each edge = 11 units", 20, 50);
  
  // Draw 3D cube
  stroke(0);
  strokeWeight(2);
  
  // Front face
  fill(220, 220, 255);
  rect(200, 180, 180, 180);
  
  // Top face
  fill(255, 255, 220);
  quad(200, 180, 260, 120, 440, 120, 380, 180);
  
  // Right face
  fill(200, 200, 200);
  quad(380, 180, 440, 120, 440, 300, 380, 360);
  
  // Bottom face (hidden but indicated)
  stroke(255, 0, 0);
  strokeWeight(4);
  noFill();
  quad(200, 360, 260, 300, 440, 300, 380, 360);
  
  // Labels
  stroke(0);
  strokeWeight(1);
  fill(0);
  textSize(14);
  text("Edge = 11", 240, 400);
  text("Edge = 11", 120, 270);
  text("Edge = 11", 450, 220);
  
  // Arrow pointing to bottom (hidden face)
  stroke(255, 0, 0);
  strokeWeight(3);
  line(320, 450, 320, 380);
  fill(255, 0, 0);
  triangle(315, 390, 320, 380, 325, 390);
  
  fill(255, 0, 0);
  textSize(14);
  text("Find area of bottom face", 220, 480);
  text("(not visible from this view)", 220, 500);
  
  noLoop();
}
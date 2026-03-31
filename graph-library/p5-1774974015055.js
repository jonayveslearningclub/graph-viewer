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
  text("Find the area of the left side face of this rectangular prism.", 20, 30);
  text("Width = 6 units, Height = 7 units", 20, 55);
  
  // Draw 3D rectangular prism  
  stroke(0);
  strokeWeight(2);
  
  // Front face
  fill(220, 220, 255);
  rect(200, 150, 200, 210); // 10 units × 7 units (length × height)
  
  // Top face
  fill(200, 200, 235);
  quad(200, 150, 260, 90, 460, 90, 400, 150);
  
  // Right face
  fill(180, 180, 215);
  quad(400, 150, 460, 90, 460, 300, 400, 360);
  
  // Left side face (the one we need area of)
  fill(255, 200, 200);
  quad(200, 150, 260, 90, 260, 300, 200, 360);
  
  // Labels
  fill(255, 0, 0);
  textSize(16);
  textAlign(CENTER);
  text("LEFT SIDE", 230, 380);
  text("FACE", 230, 400);
  
  fill(0);
  textSize(14);
  text("6 units", 150, 120);
  
  textAlign(CENTER);
  translate(170, 255);
  rotate(-PI/2);
  text("7 units", 0, 0);
  
  noLoop();
}
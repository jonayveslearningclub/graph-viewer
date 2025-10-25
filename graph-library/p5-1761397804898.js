function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(16);
  text("1. Which shape can tessellate (tile) the plane without gaps or overlaps?", 20, 30);
  text("Circle the correct answer:", 20, 55);
  
  // Draw three shapes as options
  
  // Option A: Regular Pentagon
  fill(200, 150, 255);
  stroke(0);
  strokeWeight(2);
  push();
  translate(150, 200);
  beginShape();
  for (let i = 0; i < 5; i++) {
    let angle = TWO_PI * i / 5 - PI/2;
    let x = cos(angle) * 40;
    let y = sin(angle) * 40;
    vertex(x, y);
  }
  endShape(CLOSE);
  pop();
  
  fill(0);
  textSize(14);
  text("A) Regular Pentagon", 90, 270);
  
  // Option B: Regular Hexagon
  fill(150, 255, 200);
  stroke(0);
  strokeWeight(2);
  push();
  translate(400, 200);
  beginShape();
  for (let i = 0; i < 6; i++) {
    let angle = TWO_PI * i / 6;
    let x = cos(angle) * 40;
    let y = sin(angle) * 40;
    vertex(x, y);
  }
  endShape(CLOSE);
  pop();
  
  fill(0);
  textSize(14);
  text("B) Regular Hexagon", 340, 270);
  
  // Option C: Regular Octagon
  fill(255, 200, 150);
  stroke(0);
  strokeWeight(2);
  push();
  translate(650, 200);
  beginShape();
  for (let i = 0; i < 8; i++) {
    let angle = TWO_PI * i / 8;
    let x = cos(angle) * 40;
    let y = sin(angle) * 40;
    vertex(x, y);
  }
  endShape(CLOSE);
  pop();
  
  fill(0);
  textSize(14);
  text("C) Regular Octagon", 590, 270);
  
  // Instructions
  fill(0);
  textSize(14);
  text("Hint: Think about the interior angles and how they fit together at each vertex.", 20, 350);
  text("A tessellation requires that angles around each vertex sum to 360°.", 20, 375);
  
  noLoop();
}
function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(16);
  text("Design a tessellation using triangle PQR. Show at least 6 copies of the triangle.", 20, 30);
  
  // Draw dot grid
  fill(0);
  let dotSpacing = 20;
  let startX = 80;
  let startY = 70;
  
  for (let x = startX; x < width - 40; x += dotSpacing) {
    for (let y = startY; y < height - 40; y += dotSpacing) {
      circle(x, y, 3);
    }
  }
  
  // Draw sample triangle PQR
  fill(200, 255, 200, 120);
  stroke(0);
  strokeWeight(2);
  beginShape();
  vertex(180, 150);  // P
  vertex(240, 130);  // Q
  vertex(220, 190);  // R
  endShape(CLOSE);
  
  // Label vertices
  fill(0);
  textSize(14);
  text("P", 175, 145);
  text("Q", 245, 125);
  text("R", 225, 200);
  
  // Instructions
  textSize(12);
  text("Copy this triangle and arrange copies to tessellate (tile) the dot grid.", 20, height - 55);
  text("Make sure there are no gaps between triangles and no overlapping.", 20, height - 40);
  text("Your tessellation should show a repeating pattern.", 20, height - 25);
  
  noLoop();
}
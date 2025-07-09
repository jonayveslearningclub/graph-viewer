function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("2. Which net can be folded to make a triangular prism?", 20, 30);
  
  // Net A - Rectangle with triangles (triangular prism net)
  fill(0);
  textSize(16);
  text("Net A", 80, 80);
  
  fill(200);
  stroke(0);
  strokeWeight(2);
  
  // Main rectangle
  rect(100, 100, 120, 60);
  
  // Triangle on top
  triangle(100, 100, 160, 70, 220, 100);
  
  // Triangle on bottom
  triangle(100, 160, 160, 190, 220, 160);
  
  // Net B - Square with triangles (not triangular prism)
  fill(0);
  text("Net B", 280, 80);
  
  fill(220);
  // Square base
  rect(300, 120, 80, 80);
  
  // Four triangles around square
  triangle(300, 120, 340, 80, 380, 120);  // top
  triangle(380, 120, 420, 140, 380, 200); // right
  triangle(380, 200, 340, 240, 300, 200); // bottom
  triangle(300, 200, 260, 140, 300, 120); // left
  
  // Net C - Rectangle only (incomplete)
  fill(0);
  text("Net C", 480, 80);
  
  fill(180);
  rect(500, 120, 100, 70);
  rect(500, 190, 100, 30);
  
  noLoop();
}
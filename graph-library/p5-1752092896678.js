function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("3. Which net will fold into a rectangular pyramid?", 20, 30);
  
  // Net A - Rectangle with 4 triangles (rectangular pyramid net)
  fill(0);
  textSize(16);
  text("Net A", 80, 80);
  
  fill(200);
  stroke(0);
  strokeWeight(2);
  
  // Rectangle base
  rect(120, 140, 80, 60);
  
  // Four triangles attached to each side
  triangle(120, 140, 90, 110, 120, 110);   // left triangle
  triangle(200, 140, 230, 110, 200, 110);  // right triangle
  triangle(120, 140, 90, 140, 120, 200);   // top triangle
  triangle(200, 200, 230, 200, 200, 140);  // bottom triangle
  
  // Net B - Pentagon shape (not rectangular pyramid)
  fill(0);
  text("Net B", 280, 80);
  
  fill(220);
  // Pentagon
  beginShape();
  vertex(340, 120);
  vertex(380, 120);
  vertex(400, 150);
  vertex(360, 180);
  vertex(320, 150);
  endShape(CLOSE);
  
  // Triangle attached
  triangle(340, 120, 360, 90, 380, 120);
  
  // Net C - Cross pattern (not rectangular pyramid)
  fill(0);
  text("Net C", 480, 80);
  
  fill(180);
  rect(520, 120, 40, 40);
  rect(480, 160, 40, 40);
  rect(520, 160, 40, 40);
  rect(560, 160, 40, 40);
  rect(520, 200, 40, 40);
  
  noLoop();
}
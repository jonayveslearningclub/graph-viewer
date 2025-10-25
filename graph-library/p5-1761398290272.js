function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(16);
  text("Create a tessellation using the quadrilateral ABCD on the dot grid below.", 20, 30);
  
  // Draw dot grid
  fill(0);
  let dotSpacing = 25;
  let startX = 100;
  let startY = 80;
  
  for (let x = startX; x < width - 50; x += dotSpacing) {
    for (let y = startY; y < height - 50; y += dotSpacing) {
      circle(x, y, 4);
    }
  }
  
  // Draw sample quadrilateral ABCD
  fill(150, 200, 255, 100);
  stroke(0);
  strokeWeight(2);
  beginShape();
  vertex(200, 180);  // A
  vertex(275, 155);  // B
  vertex(300, 230);  // C
  vertex(225, 255);  // D
  endShape(CLOSE);
  
  // Label vertices
  fill(0);
  textSize(14);
  text("A", 195, 175);
  text("B", 280, 150);
  text("C", 305, 235);
  text("D", 220, 270);
  
  // Instructions
  textSize(12);
  text("Use this quadrilateral as your base shape to create a tessellation pattern.", 20, height - 40);
  text("Copy and arrange the shape to fill the space with no gaps or overlaps.", 20, height - 25);
  
  noLoop();
}
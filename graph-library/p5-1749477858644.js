function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("How many lines of symmetry does this regular hexagon have?", 20, 30);
  
  // Draw regular hexagon
  push();
  translate(400, 350);
  
  // Hexagon
  fill(200, 220, 255);
  stroke(0);
  strokeWeight(3);
  beginShape();
  for (let i = 0; i < 6; i++) {
    let angle = TWO_PI / 6 * i;
    let x = cos(angle) * 120;
    let y = sin(angle) * 120;
    vertex(x, y);
  }
  endShape(CLOSE);
  
  // Label vertices
  fill(0);
  textSize(14);
  textAlign(CENTER, CENTER);
  for (let i = 0; i < 6; i++) {
    let angle = TWO_PI / 6 * i;
    let x = cos(angle) * 140;
    let y = sin(angle) * 140;
    text(String.fromCharCode(65 + i), x, y);
  }
  
  pop();
  
  noLoop();
}
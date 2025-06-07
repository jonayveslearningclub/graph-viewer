function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Display question
  fill(0);
  textSize(16);
  text("3. Triangle DEF has vertices D(-4, -1), E(-2, -5), and F(-6, -3).", 20, 25);
  text("What are the coordinates after a 90° clockwise rotation about the origin?", 20, 45);
  
  // Set up coordinate system
  translate(400, 300);
  
  // Draw grid
  stroke(220);
  strokeWeight(1);
  for (let i = -10; i <= 10; i++) {
    line(i * 30, -300, i * 30, 300);
    line(-400, i * 30, 400, i * 30);
  }
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(-400, 0, 400, 0); // x-axis
  line(0, -300, 0, 300); // y-axis
  
  // Label axes
  fill(0);
  textSize(12);
  textAlign(CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, i * 30, 15);
      text(i, -15, -i * 30 + 5);
    }
  }
  text("0", -10, 15);
  
  // Draw original triangle DEF
  stroke(150, 0, 150);
  strokeWeight(3);
  fill(150, 0, 150, 100);
  beginShape();
  vertex(-4 * 30, 1 * 30);  // D(-4, -1)
  vertex(-2 * 30, 5 * 30);  // E(-2, -5)
  vertex(-6 * 30, 3 * 30);  // F(-6, -3)
  endShape(CLOSE);
  
  // Label original triangle vertices
  fill(150, 0, 150);
  textAlign(CENTER);
  textSize(14);
  text("D(-4, -1)", -4 * 30 - 20, 1 * 30);
  text("E(-2, -5)", -2 * 30 + 20, 5 * 30 + 15);
  text("F(-6, -3)", -6 * 30 - 20, 3 * 30);
  
  // Draw rotation center (origin)
  fill(255, 0, 0);
  stroke(255, 0, 0);
  strokeWeight(2);
  ellipse(0, 0, 8, 8);
  
  // Label origin
  fill(255, 0, 0);
  textAlign(LEFT);
  textSize(12);
  text("Origin (0, 0)", 10, -10);
  
  // Draw rotation arc to show 90° clockwise
  stroke(0, 100, 200);
  strokeWeight(2);
  noFill();
  arc(0, 0, 100, 100, 0, PI/2);
  
  // Label rotation
  fill(0, 100, 200);
  textAlign(LEFT);
  textSize(12);
  text("90° clockwise", 60, -60);
  
  noLoop();
}
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Display question
  fill(0);
  textSize(16);
  text("1. Triangle ABC has vertices A(2, 3), B(5, 1), and C(1, -2).", 20, 25);
  text("What are the coordinates of triangle A'B'C' after a reflection across the y-axis?", 20, 45);
  
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
  
  // Draw original triangle ABC
  stroke(255, 0, 0);
  strokeWeight(3);
  fill(255, 0, 0, 100);
  beginShape();
  vertex(2 * 30, -3 * 30); // A(2, 3)
  vertex(5 * 30, -1 * 30); // B(5, 1)
  vertex(1 * 30, 2 * 30);  // C(1, -2)
  endShape(CLOSE);
  
  // Label original triangle vertices
  fill(255, 0, 0);
  textAlign(CENTER);
  textSize(14);
  text("A(2, 3)", 2 * 30 + 15, -3 * 30 - 10);
  text("B(5, 1)", 5 * 30 + 15, -1 * 30 - 10);
  text("C(1, -2)", 1 * 30 + 15, 2 * 30 + 20);
  
  // Draw y-axis reflection line (emphasized)
  stroke(0, 0, 255);
  strokeWeight(4);
  line(0, -300, 0, 300);
  
  fill(0, 0, 255);
  textAlign(LEFT);
  textSize(14);
  text("y-axis", 10, -280);
  
  noLoop();
}
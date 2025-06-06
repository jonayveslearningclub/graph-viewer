function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Display question
  fill(0);
  textSize(16);
  text("Quadrilateral PQRS has vertices P(1, 3), Q(5, 1), R(7, 5), and S(3, 7).", 20, 30);
  text("Graph quadrilateral PQRS and its reflection across the x-axis.", 20, 50);
  text("Label all vertices of both figures.", 20, 70);
  
  // Set up coordinate system
  translate(width/2, height/2);
  
  // Draw grid
  stroke(220);
  strokeWeight(1);
  for (let i = -10; i <= 10; i++) {
    // Vertical lines
    line(i * 30, -300, i * 30, 300);
    // Horizontal lines
    line(-300, i * 30, 300, i * 30);
  }
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(-300, 0, 300, 0); // x-axis
  line(0, -300, 0, 300); // y-axis
  
  // Label axes
  fill(0);
  textSize(14);
  textAlign(CENTER, CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, i * 30, 15); // x-axis labels
      text(-i, -15, i * 30); // y-axis labels (negative because y increases downward)
    }
  }
  text("0", -15, 15);
  
  // Original quadrilateral PQRS
  stroke(0, 0, 255);
  strokeWeight(3);
  fill(0, 0, 255, 100);
  beginShape();
  vertex(1 * 30, -3 * 30); // P(1, 3)
  vertex(5 * 30, -1 * 30); // Q(5, 1)
  vertex(7 * 30, -5 * 30); // R(7, 5)
  vertex(3 * 30, -7 * 30); // S(3, 7)
  endShape(CLOSE);
  
  // Label original vertices
  fill(0, 0, 255);
  textAlign(CENTER, CENTER);
  textSize(14);
  text("P(1, 3)", 1 * 30 - 25, -3 * 30 - 15);
  text("Q(5, 1)", 5 * 30 + 25, -1 * 30 - 15);
  text("R(7, 5)", 7 * 30 + 25, -5 * 30 - 15);
  text("S(3, 7)", 3 * 30 - 25, -7 * 30 - 15);
  
  // Plot original vertices
  fill(0, 0, 255);
  noStroke();
  ellipse(1 * 30, -3 * 30, 8, 8); // P
  ellipse(5 * 30, -1 * 30, 8, 8); // Q
  ellipse(7 * 30, -5 * 30, 8, 8); // R
  ellipse(3 * 30, -7 * 30, 8, 8); // S
  
  noLoop();
}
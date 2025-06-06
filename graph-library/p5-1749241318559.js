function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Display question
  fill(0);
  textSize(16);
  text("Triangle ABC has vertices A(2, 4), B(6, 2), and C(4, 8).", 20, 30);
  text("Graph triangle ABC and its reflection across the y-axis.", 20, 50);
  text("Label all vertices clearly.", 20, 70);
  
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
  
  // Original triangle ABC
  stroke(255, 0, 0);
  strokeWeight(3);
  fill(255, 0, 0, 100);
  beginShape();
  vertex(2 * 30, -4 * 30); // A(2, 4)
  vertex(6 * 30, -2 * 30); // B(6, 2)
  vertex(4 * 30, -8 * 30); // C(4, 8)
  endShape(CLOSE);
  
  // Label original vertices
  fill(255, 0, 0);
  textAlign(CENTER, CENTER);
  textSize(16);
  text("A(2, 4)", 2 * 30 + 25, -4 * 30 - 15);
  text("B(6, 2)", 6 * 30 + 25, -2 * 30 - 15);
  text("C(4, 8)", 4 * 30 + 25, -8 * 30 - 15);
  
  // Plot original vertices
  fill(255, 0, 0);
  noStroke();
  ellipse(2 * 30, -4 * 30, 8, 8); // A
  ellipse(6 * 30, -2 * 30, 8, 8); // B
  ellipse(4 * 30, -8 * 30, 8, 8); // C
  
  noLoop();
}
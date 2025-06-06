function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Display question
  fill(0);
  textSize(16);
  text("Pentagon LMNOP has vertices L(2, 1), M(4, 3), N(6, 2), O(5, -1), and P(1, -2).", 20, 30);
  text("Graph pentagon LMNOP and translate it 3 units left and 4 units up.", 20, 50);
  text("Label all vertices of both the original and translated figures.", 20, 70);
  
  // Set up coordinate system
  translate(width/2, height/2);
  
  // Draw grid
  stroke(220);
  strokeWeight(1);
  for (let i = -10; i <= 10; i++) {
    // Vertical lines
    line(i * 30, -250, i * 30, 250);
    // Horizontal lines
    line(-300, i * 30, 300, i * 30);
  }
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(-300, 0, 300, 0); // x-axis
  line(0, -250, 0, 250); // y-axis
  
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
  
  // Original pentagon LMNOP
  stroke(0, 150, 0);
  strokeWeight(3);
  fill(0, 150, 0, 100);
  beginShape();
  vertex(2 * 30, -1 * 30); // L(2, 1)
  vertex(4 * 30, -3 * 30); // M(4, 3)
  vertex(6 * 30, -2 * 30); // N(6, 2)
  vertex(5 * 30, 1 * 30);  // O(5, -1)
  vertex(1 * 30, 2 * 30);  // P(1, -2)
  endShape(CLOSE);
  
  // Label original vertices
  fill(0, 150, 0);
  textAlign(CENTER, CENTER);
  textSize(12);
  text("L(2, 1)", 2 * 30 - 25, -1 * 30 - 15);
  text("M(4, 3)", 4 * 30 + 20, -3 * 30 - 15);
  text("N(6, 2)", 6 * 30 + 25, -2 * 30 - 15);
  text("O(5, -1)", 5 * 30 + 25, 1 * 30 + 15);
  text("P(1, -2)", 1 * 30 - 25, 2 * 30 + 15);
  
  // Plot original vertices
  fill(0, 150, 0);
  noStroke();
  ellipse(2 * 30, -1 * 30, 8, 8); // L
  ellipse(4 * 30, -3 * 30, 8, 8); // M
  ellipse(6 * 30, -2 * 30, 8, 8); // N
  ellipse(5 * 30, 1 * 30, 8, 8);  // O
  ellipse(1 * 30, 2 * 30, 8, 8);  // P
  
  noLoop();
}
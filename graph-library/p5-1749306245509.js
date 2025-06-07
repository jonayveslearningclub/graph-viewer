function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Display question
  fill(0);
  textSize(16);
  text("2. Quadrilateral PQRS has vertices P(-3, 4), Q(-1, 6), R(2, 4), and S(0, 1).", 20, 25);
  text("What are the coordinates after translating 5 units right and 3 units down?", 20, 45);
  
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
  
  // Draw original quadrilateral PQRS
  stroke(0, 150, 0);
  strokeWeight(3);
  fill(0, 150, 0, 100);
  beginShape();
  vertex(-3 * 30, -4 * 30); // P(-3, 4)
  vertex(-1 * 30, -6 * 30); // Q(-1, 6)
  vertex(2 * 30, -4 * 30);  // R(2, 4)
  vertex(0 * 30, -1 * 30);  // S(0, 1)
  endShape(CLOSE);
  
  // Label original quadrilateral vertices
  fill(0, 150, 0);
  textAlign(CENTER);
  textSize(14);
  text("P(-3, 4)", -3 * 30, -4 * 30 - 15);
  text("Q(-1, 6)", -1 * 30, -6 * 30 - 15);
  text("R(2, 4)", 2 * 30, -4 * 30 - 15);
  text("S(0, 1)", 0 * 30 - 20, -1 * 30);
  
  // Draw translation vector arrow
  stroke(255, 100, 0);
  strokeWeight(3);
  line(-3 * 30, -4 * 30, -3 * 30 + 5 * 30, -4 * 30 + 3 * 30);
  
  // Arrow head
  fill(255, 100, 0);
  noStroke();
  triangle(-3 * 30 + 5 * 30, -4 * 30 + 3 * 30, 
           -3 * 30 + 5 * 30 - 8, -4 * 30 + 3 * 30 - 5,
           -3 * 30 + 5 * 30 - 8, -4 * 30 + 3 * 30 + 5);
  
  // Label translation
  fill(255, 100, 0);
  textAlign(LEFT);
  textSize(12);
  text("Translation: 5 right, 3 down", 3 * 30, -8 * 30);
  
  noLoop();
}
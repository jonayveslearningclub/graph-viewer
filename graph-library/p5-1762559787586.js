function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  textSize(16);
  fill(0);
  text("3. Rectangle PQRS is rotated 90&#176; clockwise around the origin.", 10, 25);
  text("What are the coordinates of the rotated rectangle P'Q'R'S'?", 10, 45);
  
  // Set up coordinate system
  translate(400, 300);
  
  // Draw grid
  stroke(200);
  strokeWeight(1);
  for (let i = -10; i <= 10; i++) {
    line(i * 30, -300, i * 30, 300);
    line(-300, i * 30, 300, i * 30);
  }
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(-300, 0, 300, 0);
  line(0, -300, 0, 300);
  
  // Label axes
  fill(0);
  textSize(12);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, i * 30 - 3, 15);
      text(i, -15, -i * 30 + 3);
    }
  }
  text("0", -8, 15);
  
  // Draw original rectangle PQRS
  stroke(0, 150, 0);
  strokeWeight(2);
  fill(0, 150, 0, 100);
  rect(-6 * 30, -8 * 30, 4 * 30, 3 * 30);
  
  // Label original rectangle vertices
  fill(0, 150, 0);
  textSize(14);
  text("P(-6, 8)", -6 * 30 - 25, -8 * 30 - 5);
  text("Q(-2, 8)", -2 * 30 + 5, -8 * 30 - 5);
  text("R(-2, 5)", -2 * 30 + 5, -5 * 30 + 20);
  text("S(-6, 5)", -6 * 30 - 25, -5 * 30 + 20);
  
  // Draw points
  fill(0, 150, 0);
  ellipse(-6 * 30, -8 * 30, 8, 8);
  ellipse(-2 * 30, -8 * 30, 8, 8);
  ellipse(-2 * 30, -5 * 30, 8, 8);
  ellipse(-6 * 30, -5 * 30, 8, 8);
  
  noLoop();
}
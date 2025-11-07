function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  textSize(16);
  fill(0);
  text("1. Triangle ABC is reflected across the y-axis to form triangle A'B'C'.", 10, 25);
  text("What are the coordinates of A', B', and C'?", 10, 45);
  
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
  
  // Draw original triangle ABC
  stroke(255, 0, 0);
  strokeWeight(2);
  fill(255, 0, 0, 100);
  triangle(2 * 30, -3 * 30, 5 * 30, -1 * 30, 1 * 30, -6 * 30);
  
  // Label original triangle vertices
  fill(255, 0, 0);
  textSize(14);
  text("A(2, 3)", 2 * 30 + 5, -3 * 30 - 5);
  text("B(5, 1)", 5 * 30 + 5, -1 * 30 - 5);
  text("C(1, 6)", 1 * 30 + 5, -6 * 30 - 5);
  
  // Draw points
  fill(255, 0, 0);
  ellipse(2 * 30, -3 * 30, 8, 8);
  ellipse(5 * 30, -1 * 30, 8, 8);
  ellipse(1 * 30, -6 * 30, 8, 8);
  
  noLoop();
}
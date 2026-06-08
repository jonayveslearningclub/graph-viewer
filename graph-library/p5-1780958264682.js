function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Question text
  fill(0);
  textSize(16);
  text("Reflect triangle DEF across the y-axis. D(-6, 3), E(-4, 8), F(-1, 5).", 20, 30);
  
  // Set up coordinate plane
  translate(width/2, height/2);
  
  // Draw grid lines
  stroke(220);
  for (let i = -10; i <= 10; i++) {
    line(i * 25, -250, i * 25, 250);
    line(-250, i * 25, 250, i * 25);
  }
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(-250, 0, 250, 0); // x-axis
  line(0, -250, 0, 250); // y-axis
  
  // Label axes
  strokeWeight(1);
  textAlign(CENTER, CENTER);
  textSize(12);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, i * 25, 15);
      text(-i, -15, i * 25);
    }
  }
  text("0", -15, 15);
  
  // Original triangle vertices
  let D = [-6 * 25, -3 * 25];
  let E = [-4 * 25, -8 * 25];
  let F = [-1 * 25, -5 * 25];
  
  // Draw original triangle
  stroke(0);
  strokeWeight(2);
  fill(200, 255, 200, 100);
  beginShape();
  vertex(D[0], D[1]);
  vertex(E[0], E[1]);
  vertex(F[0], F[1]);
  endShape(CLOSE);
  
  // Plot and label original points
  fill(0, 0, 255);
  noStroke();
  circle(D[0], D[1], 8);
  circle(E[0], E[1], 8);
  circle(F[0], F[1], 8);
  
  fill(0);
  textAlign(RIGHT, BOTTOM);
  text("D(-6, 3)", D[0] - 5, D[1] - 5);
  text("E(-4, 8)", E[0] - 5, E[1] - 5);
  text("F(-1, 5)", F[0] - 5, F[1] - 5);
  
  noLoop();
}
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("3. Rectangle PQRS has vertices P(-4, 3), Q(5, 3), R(5, -1), and S(-4, -1).", 20, 30);
  text("   Plot the rectangle and find its perimeter in units.", 20, 50);
  
  // Set up coordinate system
  translate(400, 300);
  
  // Draw grid
  stroke(220);
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
  textAlign(CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, i * 30, 15);
      text(-i, -8, i * 30 + 4);
    }
  }
  text("0", -8, 15);
  
  // Plot rectangle vertices
  let P = [-4 * 30, -3 * 30];
  let Q = [5 * 30, -3 * 30];
  let R = [5 * 30, 1 * 30];
  let S = [-4 * 30, 1 * 30];
  
  // Draw rectangle
  stroke(0);
  strokeWeight(2);
  fill(255, 200, 150, 100);
  quad(P[0], P[1], Q[0], Q[1], R[0], R[1], S[0], S[1]);
  
  // Mark vertices
  fill(255, 0, 0);
  noStroke();
  ellipse(P[0], P[1], 8, 8);
  ellipse(Q[0], Q[1], 8, 8);
  ellipse(R[0], R[1], 8, 8);
  ellipse(S[0], S[1], 8, 8);
  
  // Label vertices
  fill(0);
  textSize(14);
  textAlign(CENTER);
  text("P(-4, 3)", P[0] - 25, P[1] - 15);
  text("Q(5, 3)", Q[0] + 20, Q[1] - 15);
  text("R(5, -1)", R[0] + 20, R[1] + 20);
  text("S(-4, -1)", S[0] - 25, S[1] + 20);
  
  noLoop();
}
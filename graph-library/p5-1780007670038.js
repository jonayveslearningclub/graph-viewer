function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  textSize(18);
  fill(0);
  text("Quadrilateral PQRS has vertices P(-4, 2), Q(-1, 5), R(4, 3), and S(1, -2).", 20, 30);
  text("Plot the quadrilateral and determine if it is a parallelogram.", 20, 55);
  
  // Set up coordinate system
  translate(400, 300);
  
  // Draw grid
  stroke(220);
  strokeWeight(1);
  for(let i = -10; i <= 10; i++) {
    line(i * 30, -300, i * 30, 300);
    line(-400, i * 30, 400, i * 30);
  }
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(-400, 0, 400, 0); // x-axis
  line(0, -300, 0, 300); // y-axis
  
  // Draw axis labels
  textSize(14);
  fill(0);
  for(let i = -10; i <= 10; i++) {
    if(i !== 0) {
      text(i, i * 30 - 5, 18);
      text(i, 8, -i * 30 + 5);
    }
  }
  text("0", 5, 15);
  
  // Plot quadrilateral vertices
  let P = [-4, 2];
  let Q = [-1, 5];
  let R = [4, 3];
  let S = [1, -2];
  
  // Draw quadrilateral
  stroke(0, 150, 0);
  strokeWeight(3);
  fill(150, 255, 150, 100);
  beginShape();
  vertex(P[0] * 30, -P[1] * 30);
  vertex(Q[0] * 30, -Q[1] * 30);
  vertex(R[0] * 30, -R[1] * 30);
  vertex(S[0] * 30, -S[1] * 30);
  endShape(CLOSE);
  
  // Label vertices
  fill(255, 0, 0);
  noStroke();
  ellipse(P[0] * 30, -P[1] * 30, 8, 8);
  ellipse(Q[0] * 30, -Q[1] * 30, 8, 8);
  ellipse(R[0] * 30, -R[1] * 30, 8, 8);
  ellipse(S[0] * 30, -S[1] * 30, 8, 8);
  
  fill(0);
  textSize(16);
  text("P(-4, 2)", P[0] * 30 - 35, -P[1] * 30 - 10);
  text("Q(-1, 5)", Q[0] * 30 - 15, -Q[1] * 30 - 15);
  text("R(4, 3)", R[0] * 30 + 10, -R[1] * 30 - 10);
  text("S(1, -2)", S[0] * 30 + 10, -S[1] * 30 + 20);
  
  noLoop();
}
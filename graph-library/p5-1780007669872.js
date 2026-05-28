function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  textSize(18);
  fill(0);
  text("Pentagon MNOPQ has vertices M(-3, -4), N(-6, 1), O(-2, 6), P(3, 4), and Q(5, -1).", 20, 30);
  text("Graph the pentagon and find the length of side MN.", 20, 55);
  
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
  
  // Plot pentagon vertices
  let M = [-3, -4];
  let N = [-6, 1];
  let O = [-2, 6];
  let P = [3, 4];
  let Q = [5, -1];
  
  // Draw pentagon
  stroke(150, 0, 150);
  strokeWeight(3);
  fill(255, 150, 255, 100);
  beginShape();
  vertex(M[0] * 30, -M[1] * 30);
  vertex(N[0] * 30, -N[1] * 30);
  vertex(O[0] * 30, -O[1] * 30);
  vertex(P[0] * 30, -P[1] * 30);
  vertex(Q[0] * 30, -Q[1] * 30);
  endShape(CLOSE);
  
  // Highlight side MN
  stroke(255, 0, 0);
  strokeWeight(5);
  line(M[0] * 30, -M[1] * 30, N[0] * 30, -N[1] * 30);
  
  // Label vertices
  fill(255, 0, 0);
  noStroke();
  ellipse(M[0] * 30, -M[1] * 30, 8, 8);
  ellipse(N[0] * 30, -N[1] * 30, 8, 8);
  ellipse(O[0] * 30, -O[1] * 30, 8, 8);
  ellipse(P[0] * 30, -P[1] * 30, 8, 8);
  ellipse(Q[0] * 30, -Q[1] * 30, 8, 8);
  
  fill(0);
  textSize(16);
  text("M(-3, -4)", M[0] * 30 - 15, -M[1] * 30 + 25);
  text("N(-6, 1)", N[0] * 30 - 45, -N[1] * 30 + 5);
  text("O(-2, 6)", O[0] * 30 - 15, -O[1] * 30 - 15);
  text("P(3, 4)", P[0] * 30 + 10, -P[1] * 30 - 10);
  text("Q(5, -1)", Q[0] * 30 + 10, -Q[1] * 30 + 20);
  
  noLoop();
}
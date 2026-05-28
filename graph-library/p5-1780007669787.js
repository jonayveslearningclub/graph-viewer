function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  textSize(18);
  fill(0);
  text("Triangle ABC has vertices at A(3, 7), B(-2, 4), and C(6, -1).", 20, 30);
  text("Graph triangle ABC and find its area.", 20, 55);
  
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
  
  // Plot triangle vertices
  let A = [3, 7];
  let B = [-2, 4];
  let C = [6, -1];
  
  // Draw triangle
  stroke(0, 0, 255);
  strokeWeight(3);
  fill(150, 200, 255, 100);
  beginShape();
  vertex(A[0] * 30, -A[1] * 30);
  vertex(B[0] * 30, -B[1] * 30);
  vertex(C[0] * 30, -C[1] * 30);
  endShape(CLOSE);
  
  // Label vertices
  fill(255, 0, 0);
  noStroke();
  ellipse(A[0] * 30, -A[1] * 30, 8, 8);
  ellipse(B[0] * 30, -B[1] * 30, 8, 8);
  ellipse(C[0] * 30, -C[1] * 30, 8, 8);
  
  fill(0);
  textSize(16);
  text("A(3, 7)", A[0] * 30 + 10, -A[1] * 30 - 10);
  text("B(-2, 4)", B[0] * 30 - 30, -B[1] * 30 - 10);
  text("C(6, -1)", C[0] * 30 + 10, -C[1] * 30 + 20);
  
  noLoop();
}
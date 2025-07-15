function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("Find the length of side BC using the Law of Sines.", 20, 30);
  text("Given: Triangle ABC with angle A = 65°, angle B = 45°, and side AC = 12", 20, 50);
  
  // Draw triangle ABC
  stroke(0);
  strokeWeight(2);
  fill(255);
  
  // Triangle vertices
  let A = {x: 400, y: 150};
  let B = {x: 200, y: 400};
  let C = {x: 600, y: 400};
  
  // Draw triangle
  triangle(A.x, A.y, B.x, B.y, C.x, C.y);
  
  // Label vertices
  fill(0);
  textSize(18);
  text("A", A.x - 10, A.y - 15);
  text("B", B.x - 20, B.y + 20);
  text("C", C.x + 10, C.y + 20);
  
  // Label angles
  textSize(14);
  text("65°", A.x - 15, A.y + 25);
  text("45°", B.x + 15, B.y - 15);
  
  // Label side AC
  text("AC = 12", (A.x + C.x)/2 - 50, (A.y + C.y)/2 - 20);
  
  // Label the side we need to find
  fill(255, 0, 0);
  text("BC = ?", (B.x + C.x)/2, (B.y + C.y)/2 + 20);
  
  noLoop();
}
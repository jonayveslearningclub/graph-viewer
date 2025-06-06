function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Draw coordinate grid
  stroke(200);
  strokeWeight(1);
  
  // Grid lines
  for (let i = -10; i <= 10; i++) {
    line(40 + i * 30, 50, 40 + i * 30, 550);
    line(40, 50 + i * 25, 640, 50 + i * 25);
  }
  
  // Axes
  stroke(0);
  strokeWeight(2);
  line(40, 300, 640, 300); // x-axis
  line(340, 50, 340, 550); // y-axis
  
  // Axis labels
  fill(0);
  textAlign(CENTER);
  textSize(12);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, 40 + (i + 10) * 30, 320);
      text(i, 325, 300 - i * 25 + 5);
    }
  }
  text("0", 325, 320);
  
  // Question
  textAlign(LEFT);
  textSize(14);
  fill(0);
  text("Given the coordinates of the following triangle, verify that:", 50, 25);
  text("a. the triangle is isosceles", 50, 42);
  text("b. the median from B to AC is ⊥ to AC", 50, 59);
  
  // Triangle vertices
  let A = {x: 340 + 3 * 30, y: 300 - 5 * 25}; // (3, 5)
  let B = {x: 340 + (-2) * 30, y: 300 - 1 * 25}; // (-2, 1)
  let C = {x: 340 + 1 * 30, y: 300 - (-3) * 25}; // (1, -3)
  
  // Draw triangle
  stroke(0);
  strokeWeight(2);
  fill(255, 200, 200, 100);
  triangle(A.x, A.y, B.x, B.y, C.x, C.y);
  
  // Draw vertices
  fill(255, 0, 0);
  noStroke();
  circle(A.x, A.y, 8);
  circle(B.x, B.y, 8);
  circle(C.x, C.y, 8);
  
  // Label vertices
  fill(0);
  textAlign(CENTER);
  textSize(14);
  text("A(3, 5)", A.x + 20, A.y - 10);
  text("B(-2, 1)", B.x - 25, B.y - 10);
  text("C(1, -3)", C.x + 20, C.y + 20);
  
  // Draw median from B to AC
  let midAC = {x: (A.x + C.x) / 2, y: (A.y + C.y) / 2};
  stroke(0, 0, 255);
  strokeWeight(2);
  line(B.x, B.y, midAC.x, midAC.y);
  
  // Mark midpoint
  fill(0, 0, 255);
  noStroke();
  circle(midAC.x, midAC.y, 6);
  
  // Label midpoint
  fill(0, 0, 255);
  textAlign(CENTER);
  text("M", midAC.x + 15, midAC.y - 5);
  
  noLoop();
}
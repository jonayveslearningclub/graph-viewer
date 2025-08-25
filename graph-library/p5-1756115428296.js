function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  textSize(16);
  fill(0);
  text("2. Triangle DEF has a right angle at E. If DE = 9 and EF = x, and DF = 15, find x for the perimeter.", 20, 30);
  
  // Draw triangle
  stroke(0);
  strokeWeight(2);
  fill(255, 200, 200);
  
  // Triangle vertices
  let D = [200, 450];
  let E = [200, 250];
  let F = [450, 250];
  
  // Draw triangle
  triangle(D[0], D[1], E[0], E[1], F[0], F[1]);
  
  // Right angle indicator
  noFill();
  rect(E[0], E[1], 20, 20);
  
  // Labels
  fill(0);
  textSize(14);
  text("D", D[0] - 20, D[1] + 10);
  text("E", E[0] - 20, E[1] - 10);
  text("F", F[0] + 10, F[1] - 10);
  
  // Side lengths
  text("9", D[0] - 25, (D[1] + E[1])/2);
  text("x", (E[0] + F[0])/2, E[1] - 15);
  text("15", (D[0] + F[0])/2 + 20, (D[1] + F[1])/2 - 20);
  
  // Formula reminder
  textSize(12);
  text("Remember: leg&#178; + leg&#178; = hypotenuse&#178;", 500, 400);
  text("Perimeter = DE + EF + DF", 500, 420);
  
  noLoop();
}
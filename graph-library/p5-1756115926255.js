function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("Triangle DEF has a right angle at E. If DE = 24 and EF = x,", 20, 30);
  text("and the hypotenuse DF = 26, find x to calculate the perimeter.", 20, 50);
  
  // Draw right triangle DEF
  stroke(0);
  strokeWeight(2);
  fill(255);
  
  // Triangle vertices
  let D = {x: 200, y: 400};
  let E = {x: 200, y: 200};
  let F = {x: 400, y: 400};
  
  // Draw triangle
  triangle(D.x, D.y, E.x, E.y, F.x, F.y);
  
  // Mark right angle at E
  stroke(0);
  strokeWeight(1);
  line(E.x, E.y + 15, E.x + 15, E.y + 15);
  line(E.x + 15, E.y + 15, E.x + 15, E.y);
  
  // Labels
  fill(0);
  textSize(14);
  text("D", D.x - 15, D.y + 15);
  text("E", E.x - 15, E.y - 10);
  text("F", F.x + 5, F.y + 15);
  
  // Side labels
  text("24", E.x - 25, (D.y + E.y)/2);
  text("x", (E.x + F.x)/2, F.y + 25);
  text("26", (D.x + F.x)/2 - 10, (D.y + F.y)/2 - 10);
  
  // Right angle symbol
  fill(255, 0, 0);
  textSize(12);
  text("90°", E.x + 20, E.y + 35);
  
  noLoop();
}
function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("Find angle D using the Law of Sines.", 20, 30);
  text("Given: Triangle DEF with angle E = 38°, side DF = 15, and side EF = 9", 20, 50);
  
  // Draw triangle DEF
  stroke(0);
  strokeWeight(2);
  fill(255);
  
  // Triangle vertices
  let D = {x: 180, y: 300};
  let E = {x: 520, y: 180};
  let F = {x: 600, y: 420};
  
  // Draw triangle
  triangle(D.x, D.y, E.x, E.y, F.x, F.y);
  
  // Label vertices
  fill(0);
  textSize(18);
  text("D", D.x - 20, D.y + 5);
  text("E", E.x, E.y - 15);
  text("F", F.x + 10, F.y + 5);
  
  // Label known angle E
  textSize(14);
  text("38°", E.x - 30, E.y + 20);
  
  // Label known sides
  text("DF = 15", (D.x + F.x)/2 - 30, (D.y + F.y)/2 + 20);
  text("EF = 9", (E.x + F.x)/2 + 10, (E.y + F.y)/2 - 10);
  
  // Label the angle we need to find
  fill(255, 0, 0);
  text("∠D = ?", D.x + 15, D.y - 15);
  
  noLoop();
}
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Title
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("Find the area of a rectangle with length 12 units and width 7 units.", 50, 40);
  
  // Draw rectangle
  stroke(0);
  strokeWeight(2);
  fill(200, 220, 255);
  rect(200, 150, 360, 210); // 12 units × 7 units scaled up
  
  // Labels
  fill(0);
  textSize(16);
  textAlign(CENTER);
  text("12 units", 380, 135); // length label above
  
  textAlign(CENTER);
  push();
  translate(180, 255);
  rotate(-PI/2);
  text("7 units", 0, 0); // width label on left side
  pop();
  
  // Corner labels
  textSize(14);
  textAlign(LEFT);
  text("A", 185, 145);
  text("B", 570, 145);
  text("C", 570, 370);
  text("D", 185, 370);
  
  noLoop();
}
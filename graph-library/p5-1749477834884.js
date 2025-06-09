function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("2. Rectangle PQRS is congruent to rectangle WXYZ. If PQ = 12 units and QR = 8 units,", 20, 30);
  text("what is the length of side YZ?", 20, 50);
  
  // Draw first rectangle PQRS
  stroke(0);
  strokeWeight(2);
  fill(200, 255, 200);
  rect(100, 150, 180, 120);
  
  // Label rectangle PQRS
  fill(0);
  textSize(14);
  text("P", 90, 145);
  text("Q", 285, 145);
  text("R", 285, 280);
  text("S", 90, 280);
  text("12 units", 160, 135);
  text("8 units", 290, 200);
  
  // Draw second rectangle WXYZ
  stroke(0);
  strokeWeight(2);
  fill(255, 200, 255);
  rect(450, 150, 180, 120);
  
  // Label rectangle WXYZ
  fill(0);
  textSize(14);
  text("W", 440, 145);
  text("X", 635, 145);
  text("Y", 635, 280);
  text("Z", 440, 280);
  text("?", 520, 285);
  
  // Congruence notation
  textSize(16);
  text("Rectangle PQRS ≅ Rectangle WXYZ", 250, 350);
  
  noLoop();
}
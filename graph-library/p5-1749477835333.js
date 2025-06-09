function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("3. Pentagon ABCDE is congruent to pentagon FGHIJ. If the perimeter of pentagon ABCDE", 20, 30);
  text("is 35 units and AB = 8 units, BC = 6 units, CD = 7 units, DE = 9 units, what is FG?", 20, 50);
  
  // Draw first pentagon ABCDE
  stroke(0);
  strokeWeight(2);
  fill(255, 255, 200);
  beginShape();
  vertex(200, 100);
  vertex(280, 120);
  vertex(290, 200);
  vertex(230, 250);
  vertex(150, 220);
  endShape(CLOSE);
  
  // Label pentagon ABCDE
  fill(0);
  textSize(14);
  text("A", 195, 90);
  text("B", 285, 115);
  text("C", 295, 205);
  text("D", 235, 260);
  text("E", 140, 225);
  text("8", 240, 100);
  text("6", 290, 160);
  text("7", 265, 230);
  text("9", 190, 240);
  
  // Draw second pentagon FGHIJ
  stroke(0);
  strokeWeight(2);
  fill(200, 255, 255);
  beginShape();
  vertex(500, 100);
  vertex(580, 120);
  vertex(590, 200);
  vertex(530, 250);
  vertex(450, 220);
  endShape(CLOSE);
  
  // Label pentagon FGHIJ
  fill(0);
  textSize(14);
  text("F", 495, 90);
  text("G", 585, 115);
  text("H", 595, 205);
  text("I", 535, 260);
  text("J", 440, 225);
  text("?", 540, 100);
  
  // Congruence notation
  textSize(16);
  text("Pentagon ABCDE ≅ Pentagon FGHIJ", 250, 350);
  
  noLoop();
}
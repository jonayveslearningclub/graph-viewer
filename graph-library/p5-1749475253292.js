function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("3. Find the difference between the area of rectangle WXYZ and triangle MNP.", 20, 30);
  text("Rectangle WXYZ is 6 units by 11 units. Triangle MNP has base 15 and height 7.", 20, 50);
  
  // Draw rectangle WXYZ
  stroke(0);
  strokeWeight(2);
  fill(255, 200, 150);
  rect(100, 150, 220, 120); // 11 units × 6 units scaled by 20
  
  // Label rectangle vertices
  fill(0);
  textSize(14);
  text("W", 90, 145);
  text("X", 330, 145);
  text("Y", 330, 285);
  text("Z", 90, 285);
  
  // Label rectangle dimensions
  text("11", 200, 140);
  text("6", 80, 210);
  
  // Draw triangle MNP
  stroke(0);
  strokeWeight(2);
  fill(200, 255, 200);
  triangle(420, 300, 720, 300, 570, 160); // Triangle with base 15, height 7
  
  // Label triangle vertices
  fill(0);
  textSize(14);
  text("M", 410, 315);
  text("N", 725, 315);
  text("P", 575, 150);
  
  // Label triangle measurements
  text("15", 565, 325);
  text("7", 540, 230);
  
  noLoop();
}
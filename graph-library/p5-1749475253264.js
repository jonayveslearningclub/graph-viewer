function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("1. Compare the perimeter of rectangle ABCD with the perimeter of triangle EFG.", 20, 30);
  text("Rectangle ABCD has length 8 and width 5. Triangle EFG has sides 7, 9, and 6.", 20, 50);
  
  // Draw rectangle ABCD
  stroke(0);
  strokeWeight(2);
  fill(200, 220, 255);
  rect(100, 150, 160, 100); // 8 units × 5 units scaled by 20
  
  // Label rectangle vertices
  fill(0);
  textSize(14);
  text("A", 90, 145);
  text("B", 270, 145);
  text("C", 270, 265);
  text("D", 90, 265);
  
  // Label rectangle dimensions
  text("8", 170, 140);
  text("5", 80, 200);
  
  // Draw triangle EFG
  stroke(0);
  strokeWeight(2);
  fill(255, 220, 200);
  triangle(450, 250, 590, 250, 520, 130); // Triangle with sides 7, 9, 6
  
  // Label triangle vertices
  fill(0);
  textSize(14);
  text("E", 440, 265);
  text("F", 595, 265);
  text("G", 525, 120);
  
  // Label triangle sides
  text("7", 520, 270);
  text("9", 470, 190);
  text("6", 565, 190);
  
  noLoop();
}
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("1. Compare the areas: Rectangle ABCD has length 8 units and width 5 units.", 20, 30);
  text("Triangle PQR has base 12 units and height 7 units. Which shape has the larger area?", 20, 50);
  
  // Draw rectangle
  stroke(0);
  strokeWeight(2);
  fill(200, 220, 255);
  rect(100, 120, 160, 100); // 8 units × 5 units scaled by 20
  
  // Label rectangle
  fill(0);
  textSize(14);
  text("A", 95, 115);
  text("B", 265, 115);
  text("C", 265, 230);
  text("D", 95, 230);
  text("Rectangle ABCD", 130, 250);
  text("Length: 8 units", 130, 270);
  text("Width: 5 units", 130, 290);
  
  // Draw triangle
  stroke(0);
  strokeWeight(2);
  fill(255, 220, 200);
  triangle(450, 190, 450 + 120, 190, 450 + 60, 190 - 70); // base 12, height 7 scaled by 10
  
  // Label triangle
  fill(0);
  textSize(14);
  text("P", 445, 205);
  text("Q", 575, 205);
  text("R", 505, 115);
  text("Triangle PQR", 480, 220);
  text("Base: 12 units", 480, 240);
  text("Height: 7 units", 480, 260);
  
  // Dimension lines for rectangle
  stroke(100);
  strokeWeight(1);
  line(100, 240, 260, 240);
  line(100, 235, 100, 245);
  line(260, 235, 260, 245);
  text("8", 175, 255);
  
  line(85, 120, 85, 220);
  line(80, 120, 90, 120);
  line(80, 220, 90, 220);
  text("5", 70, 175);
  
  // Dimension lines for triangle
  line(450, 205, 570, 205);
  line(450, 200, 450, 210);
  line(570, 200, 570, 210);
  text("12", 505, 220);
  
  line(435, 190, 435, 120);
  line(430, 190, 440, 190);
  line(430, 120, 440, 120);
  text("7", 420, 155);
  
  noLoop();
}
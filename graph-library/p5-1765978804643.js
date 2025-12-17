function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  textSize(18);
  fill(0);
  text("Find the area and perimeter of rectangle ABCD with length 8 units and width 5 units.", 50, 30);
  
  // Draw rectangle
  stroke(0);
  strokeWeight(2);
  fill(220, 240, 255);
  rect(250, 100, 320, 200); // 8:5 ratio scaled up
  
  // Label vertices
  textSize(16);
  fill(255, 0, 0);
  text("A", 240, 95);
  text("B", 575, 95);
  text("C", 575, 320);
  text("D", 240, 320);
  
  // Dimension labels
  fill(0);
  textSize(14);
  text("8 units", 380, 85);
  text("5 units", 200, 200);
  
  // Draw dimension arrows
  stroke(100);
  strokeWeight(1);
  line(250, 70, 570, 70);
  line(245, 70, 250, 75);
  line(565, 70, 570, 75);
  line(245, 70, 250, 65);
  line(565, 70, 570, 65);
  
  line(220, 100, 220, 300);
  line(215, 105, 220, 100);
  line(225, 105, 220, 100);
  line(215, 295, 220, 300);
  line(225, 295, 220, 300);
  
  // Formulas
  textSize(16);
  fill(0, 0, 150);
  text("Area = length × width", 100, 400);
  text("Perimeter = 2(length + width)", 100, 430);
  
  noLoop();
}
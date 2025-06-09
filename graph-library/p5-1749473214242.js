function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("2. Find the perimeter: Rectangle WXYZ has length 9 units and width 4 units.", 20, 30);
  text("Triangle ABC is equilateral with each side measuring 8 units. Which has the greater perimeter?", 20, 50);
  
  // Draw rectangle
  stroke(0);
  strokeWeight(2);
  fill(220, 255, 220);
  rect(80, 100, 180, 80); // 9 units × 4 units scaled by 20
  
  // Label rectangle
  fill(0);
  textSize(14);
  text("W", 75, 95);
  text("X", 265, 95);
  text("Y", 265, 190);
  text("Z", 75, 190);
  text("Rectangle WXYZ", 120, 210);
  text("Length: 9 units", 120, 230);
  text("Width: 4 units", 120, 250);
  
  // Draw equilateral triangle
  stroke(0);
  strokeWeight(2);
  fill(255, 255, 200);
  let side = 120; // 8 units scaled by 15
  let height = side * sqrt(3) / 2;
  triangle(500, 180, 500 + side, 180, 500 + side/2, 180 - height);
  
  // Label triangle
  fill(0);
  textSize(14);
  text("A", 495, 195);
  text("B", 625, 195);
  text("C", 555, 75);
  text("Triangle ABC", 520, 210);
  text("Equilateral", 520, 230);
  text("Each side: 8 units", 520, 250);
  
  // Dimension lines for rectangle
  stroke(100);
  strokeWeight(1);
  line(80, 195, 260, 195);
  line(80, 190, 80, 200);
  line(260, 190, 260, 200);
  text("9", 165, 210);
  
  line(65, 100, 65, 180);
  line(60, 100, 70, 100);
  line(60, 180, 70, 180);
  text("4", 50, 145);
  
  // Side labels for triangle
  text("8", 485, 150);
  text("8", 590, 150);
  text("8", 540, 195);
  
  noLoop();
}
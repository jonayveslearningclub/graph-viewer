function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("3. Calculate and compare: Rectangle MNOP has dimensions 6 units by 11 units.", 20, 30);
  text("Right triangle DEF has legs of 9 units and 8 units. Which shape covers more area?", 20, 50);
  
  // Draw rectangle
  stroke(0);
  strokeWeight(2);
  fill(255, 200, 255);
  rect(60, 120, 120, 220); // 6 units × 11 units scaled by 20
  
  // Label rectangle
  fill(0);
  textSize(14);
  text("M", 55, 115);
  text("N", 185, 115);
  text("O", 185, 350);
  text("P", 55, 350);
  text("Rectangle MNOP", 80, 370);
  text("Width: 6 units", 80, 390);
  text("Length: 11 units", 80, 410);
  
  // Draw right triangle
  stroke(0);
  strokeWeight(2);
  fill(200, 255, 255);
  triangle(350, 280, 350 + 135, 280, 350, 280 - 120); // legs 9 and 8 units scaled by 15
  
  // Label triangle
  fill(0);
  textSize(14);
  text("D", 345, 295);
  text("E", 490, 295);
  text("F", 345, 155);
  text("Right Triangle DEF", 380, 320);
  text("Leg 1: 9 units", 380, 340);
  text("Leg 2: 8 units", 380, 360);
  
  // Dimension lines for rectangle
  stroke(100);
  strokeWeight(1);
  line(60, 355, 180, 355);
  line(60, 350, 60, 360);
  line(180, 350, 180, 360);
  text("6", 115, 370);
  
  line(45, 120, 45, 340);
  line(40, 120, 50, 120);
  line(40, 340, 50, 340);
  text("11", 25, 235);
  
  // Dimension lines for triangle
  line(350, 295, 485, 295);
  line(350, 290, 350, 300);
  line(485, 290, 485, 300);
  text("9", 410, 310);
  
  line(335, 280, 335, 160);
  line(330, 280, 340, 280);
  line(330, 160, 340, 160);
  text("8", 315, 225);
  
  // Right angle indicator
  stroke(0);
  strokeWeight(1);
  line(350, 270, 360, 270);
  line(360, 270, 360, 280);
  
  noLoop();
}
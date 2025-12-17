function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  textSize(18);
  fill(0);
  text("Find the area and perimeter of triangle PQR with base 12 units and height 7 units.", 50, 30);
  
  // Draw triangle
  stroke(0);
  strokeWeight(2);
  fill(255, 220, 220);
  triangle(200, 350, 560, 350, 380, 210); // Base 12, height 7 scaled
  
  // Label vertices
  textSize(16);
  fill(255, 0, 0);
  text("P", 190, 365);
  text("Q", 565, 365);
  text("R", 385, 195);
  
  // Base label
  fill(0);
  textSize(14);
  text("12 units", 360, 375);
  
  // Height label and line
  text("7 units", 340, 280);
  stroke(150);
  strokeWeight(1);
  line(380, 210, 380, 350);
  
  // Height indicator arrows
  line(375, 215, 380, 210);
  line(385, 215, 380, 210);
  line(375, 345, 380, 350);
  line(385, 345, 380, 350);
  
  // Base arrows
  line(200, 370, 560, 370);
  line(205, 365, 200, 370);
  line(205, 375, 200, 370);
  line(555, 365, 560, 370);
  line(555, 375, 560, 370);
  
  // Formulas
  textSize(16);
  fill(0, 0, 150);
  text("Area = (1/2) × base × height", 100, 450);
  text("Perimeter = sum of all three sides", 100, 480);
  
  noLoop();
}
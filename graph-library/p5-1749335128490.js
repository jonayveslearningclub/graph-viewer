function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  textSize(16);
  fill(0);
  text("2. What is the area of a triangle with base 12 units and height 7 units?", 20, 30);
  
  // Draw triangle
  stroke(0);
  strokeWeight(2);
  noFill();
  triangle(150, 400, 450, 400, 300, 200);
  
  // Draw height line (dashed)
  stroke(100);
  strokeWeight(1);
  for(let i = 200; i < 400; i += 10) {
    line(300, i, 300, i + 5);
  }
  
  // Label base
  stroke(0);
  textSize(14);
  fill(0);
  text("12 units", 280, 430);
  
  // Label height
  text("7 units", 310, 300);
  
  // Add arrows for measurements
  stroke(0);
  strokeWeight(1);
  // Base arrow
  line(150, 420, 450, 420);
  line(145, 415, 155, 425);
  line(445, 415, 455, 425);
  
  // Height arrow
  line(320, 200, 320, 400);
  line(315, 195, 325, 205);
  line(315, 395, 325, 405);
  
  noLoop();
}
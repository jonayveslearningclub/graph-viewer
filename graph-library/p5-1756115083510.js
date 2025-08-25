function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(18);
  text("Calculate the perimeter of this triangle with sides 6 cm, 9 cm, and 7 cm.", 20, 30);
  
  // Draw triangle
  stroke(0);
  strokeWeight(2);
  fill(255, 200, 200);
  triangle(200, 400, 500, 400, 350, 200);
  
  // Label sides
  fill(0);
  textSize(16);
  text("9 cm", 330, 420);
  text("6 cm", 160, 320);
  text("7 cm", 440, 320);
  
  // Add small marks to show measurements
  stroke(0);
  strokeWeight(1);
  // Bottom side marks
  line(200, 380, 500, 380);
  line(200, 375, 200, 385);
  line(500, 375, 500, 385);
  
  // Left side marks
  line(180, 400, 330, 200);
  
  // Right side marks  
  line(520, 400, 370, 200);
  
  noLoop();
}
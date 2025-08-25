function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(18);
  text("Find the perimeter of this rectangle with length 8 units and width 5 units.", 20, 30);
  
  // Draw rectangle
  stroke(0);
  strokeWeight(2);
  fill(200, 220, 255);
  rect(150, 100, 240, 150);
  
  // Label dimensions
  fill(0);
  textSize(16);
  text("8 units", 240, 90);
  text("5 units", 100, 180);
  
  // Add measurement marks
  stroke(0);
  strokeWeight(1);
  // Top measurement line
  line(150, 80, 390, 80);
  line(150, 75, 150, 85);
  line(390, 75, 390, 85);
  
  // Left measurement line
  line(130, 100, 130, 250);
  line(125, 100, 135, 100);
  line(125, 250, 135, 250);
  
  noLoop();
}
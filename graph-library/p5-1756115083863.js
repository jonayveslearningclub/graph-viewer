function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(18);
  text("What is the perimeter of this square with side length 12 units?", 20, 30);
  
  // Draw square
  stroke(0);
  strokeWeight(2);
  fill(220, 255, 220);
  rect(250, 150, 180, 180);
  
  // Label all four sides
  fill(0);
  textSize(16);
  text("12 units", 310, 140);
  text("12 units", 310, 350);
  text("12 units", 200, 250);
  text("12 units", 450, 250);
  
  // Add measurement marks for all sides
  stroke(0);
  strokeWeight(1);
  
  // Top measurement line
  line(250, 130, 430, 130);
  line(250, 125, 250, 135);
  line(430, 125, 430, 135);
  
  // Bottom measurement line  
  line(250, 350, 430, 350);
  line(250, 345, 250, 355);
  line(430, 345, 430, 355);
  
  // Left measurement line
  line(230, 150, 230, 330);
  line(225, 150, 235, 150);
  line(225, 330, 235, 330);
  
  // Right measurement line
  line(450, 150, 450, 330);
  line(445, 150, 455, 150);
  line(445, 330, 455, 330);
  
  noLoop();
}
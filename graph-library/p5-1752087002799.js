function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Question text
  fill(0);
  textSize(16);
  text("Estimate the length of the red line using the 2 cm crayon for reference.", 20, 30);
  
  // Draw the 2 cm crayon reference
  fill(100, 100, 255);
  rect(50, 80, 80, 15);
  fill(0);
  textSize(12);
  text("2 cm crayon", 55, 75);
  
  // Draw the red line to estimate
  stroke(200, 0, 0);
  strokeWeight(3);
  line(50, 150, 130, 150);
  
  // Reset stroke
  stroke(0);
  strokeWeight(1);
  fill(0);
  text("Red line", 50, 140);
  
  noLoop();
}
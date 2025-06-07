function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  textSize(16);
  fill(0);
  text("3. Find the circumference of a circle with radius 6 units.", 20, 30);
  
  // Draw circle
  stroke(0);
  strokeWeight(2);
  noFill();
  circle(400, 300, 240); // radius 120 pixels = 6 units scaled
  
  // Draw radius line
  stroke(0);
  strokeWeight(1);
  line(400, 300, 400, 180);
  
  // Mark center
  fill(0);
  circle(400, 300, 6);
  
  // Label radius
  textSize(14);
  fill(0);
  text("6 units", 350, 240);
  
  // Add arrow for radius
  stroke(0);
  strokeWeight(1);
  line(400, 270, 400, 190);
  line(395, 195, 405, 185);
  line(395, 265, 405, 275);
  
  // Label center
  text("Center", 410, 305);
  
  noLoop();
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  
  // Title
  fill(0);
  textSize(24);
  textAlign(LEFT);
  text("2. Compare the areas of these three rooms. Which room is smallest?", 50, 40);
  
  // Draw floor plan section
  stroke(0);
  strokeWeight(3);
  
  // Master Bedroom
  fill(200, 255, 200);
  rect(120, 100, 180, 140);
  fill(0);
  textSize(18);
  textAlign(CENTER);
  text("Master Bedroom", 210, 160);
  text("18 ft × 14 ft", 210, 185);
  
  // Dining Room
  fill(255, 200, 200);
  rect(320, 100, 160, 110);
  fill(0);
  text("Dining Room", 400, 150);
  text("16 ft × 11 ft", 400, 175);
  
  // Office
  fill(200, 200, 255);
  rect(500, 100, 130, 100);
  fill(0);
  text("Office", 565, 145);
  text("13 ft × 10 ft", 565, 170);
  
  // Draw borders
  stroke(0);
  strokeWeight(3);
  noFill();
  rect(120, 100, 180, 140);
  rect(320, 100, 160, 110);
  rect(500, 100, 130, 100);
  
  // Add measurement lines
  stroke(100);
  strokeWeight(1);
  
  // Master bedroom measurements
  line(120, 90, 300, 90);
  line(120, 85, 120, 95);
  line(300, 85, 300, 95);
  text("18 ft", 210, 85);
  
  line(110, 100, 110, 240);
  line(105, 100, 115, 100);
  line(105, 240, 115, 240);
  textAlign(CENTER);
  push();
  translate(95, 170);
  rotate(-PI/2);
  text("14 ft", 0, 0);
  pop();
  
  noLoop();
}
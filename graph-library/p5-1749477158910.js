function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  fill(0);
  textSize(16);
  text("2. Compare the areas of these three rooms. Which room is smallest?", 20, 30);
  
  // Draw apartment floor plan
  stroke(0);
  strokeWeight(3);
  
  // Master Bedroom
  fill(180, 255, 180);
  rect(150, 80, 180, 140);
  fill(0);
  textSize(14);
  text("Master Bedroom", 170, 105);
  text("18 ft × 14 ft", 170, 125);
  
  // Guest Room
  fill(255, 180, 180);
  rect(350, 80, 140, 140);
  fill(0);
  text("Guest Room", 370, 105);
  text("14 ft × 14 ft", 370, 125);
  
  // Office
  fill(180, 180, 255);
  rect(150, 240, 160, 110);
  fill(0);
  text("Office", 190, 265);
  text("16 ft × 11 ft", 190, 285);
  
  // Common Area
  fill(255, 255, 180);
  rect(330, 240, 160, 110);
  fill(0);
  text("Common Area", 360, 265);
  text("16 ft × 11 ft", 360, 285);
  
  // Dimensions labels
  stroke(100);
  strokeWeight(1);
  
  // Outer boundary
  stroke(0);
  strokeWeight(2);
  noFill();
  rect(150, 80, 340, 270);
  
  // Scale reference
  fill(0);
  textSize(10);
  text("Scale: Each square = 2 ft", 20, 550);
  
  noLoop();
}
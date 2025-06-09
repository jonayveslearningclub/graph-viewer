function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  fill(0);
  textSize(16);
  text("3. In this house layout, what is the total area of all bedrooms combined?", 20, 30);
  
  // Draw house floor plan
  stroke(0);
  strokeWeight(2);
  
  // Bedroom A
  fill(255, 200, 200);
  rect(80, 80, 140, 120);
  fill(0);
  textSize(12);
  text("Bedroom A", 110, 105);
  text("14 ft × 12 ft", 110, 120);
  
  // Bedroom B
  fill(200, 255, 200);
  rect(240, 80, 160, 120);
  fill(0);
  text("Bedroom B", 270, 105);
  text("16 ft × 12 ft", 270, 120);
  
  // Bedroom C
  fill(200, 200, 255);
  rect(420, 80, 120, 120);
  fill(0);
  text("Bedroom C", 440, 105);
  text("12 ft × 12 ft", 440, 120);
  
  // Living Area
  fill(255, 255, 200);
  rect(80, 220, 180, 160);
  fill(0);
  text("Living Area", 120, 245);
  text("18 ft × 16 ft", 120, 260);
  
  // Kitchen
  fill(255, 200, 255);
  rect(280, 220, 140, 100);
  fill(0);
  text("Kitchen", 310, 245);
  text("14 ft × 10 ft", 310, 260);
  
  // Dining Room
  fill(200, 255, 255);
  rect(280, 340, 140, 80);
  fill(0);
  text("Dining Room", 310, 365);
  text("14 ft × 8 ft", 310, 380);
  
  // Utility Room
  fill(220, 220, 220);
  rect(440, 220, 100, 120);
  fill(0);
  text("Utility", 460, 245);
  text("10 ft × 12 ft", 460, 260);
  
  // Garage
  fill(180, 180, 180);
  rect(440, 360, 100, 100);
  fill(0);
  text("Garage", 465, 385);
  text("10 ft × 10 ft", 465, 400);
  
  // Highlight bedrooms with thicker border
  stroke(255, 0, 0);
  strokeWeight(3);
  noFill();
  rect(80, 80, 140, 120);
  rect(240, 80, 160, 120);
  rect(420, 80, 120, 120);
  
  noLoop();
}
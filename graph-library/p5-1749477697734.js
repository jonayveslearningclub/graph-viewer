function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Title
  fill(0);
  textSize(16);
  text("Which room has the largest area? Calculate the area of each room.", 20, 30);
  
  // Draw floor plan
  stroke(0);
  strokeWeight(2);
  fill(255);
  
  // Living Room
  rect(100, 80, 180, 120);
  fill(0);
  textSize(12);
  text("Living Room", 130, 100);
  text("15 ft × 8 ft", 135, 115);
  
  // Kitchen
  fill(255);
  rect(280, 80, 140, 120);
  fill(0);
  text("Kitchen", 320, 100);
  text("10 ft × 8 ft", 315, 115);
  
  // Bedroom 1
  fill(255);
  rect(100, 200, 120, 100);
  fill(0);
  text("Bedroom 1", 125, 220);
  text("12 ft × 6 ft", 125, 235);
  
  // Bedroom 2
  fill(255);
  rect(220, 200, 100, 100);
  fill(0);
  text("Bedroom 2", 240, 220);
  text("9 ft × 6 ft", 245, 235);
  
  // Bathroom
  fill(255);
  rect(320, 200, 80, 60);
  fill(0);
  text("Bathroom", 330, 220);
  text("7 ft × 4 ft", 330, 235);
  
  // Hallway
  fill(255);
  rect(320, 260, 80, 40);
  fill(0);
  text("Hallway", 335, 275);
  text("7 ft × 3 ft", 335, 290);
  
  // Instructions
  fill(0);
  textSize(14);
  text("Calculate the area of each room using length × width", 100, 350);
  text("Then determine which room has the greatest area.", 100, 370);
  
  noLoop();
}
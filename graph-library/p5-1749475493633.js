function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  
  // Title
  fill(0);
  textSize(24);
  textAlign(LEFT);
  text("1. Which room has the largest area in this floor plan?", 50, 40);
  
  // Draw floor plan
  stroke(0);
  strokeWeight(3);
  fill(220, 240, 255);
  
  // Living Room
  rect(100, 80, 200, 150);
  fill(0);
  textSize(16);
  textAlign(CENTER);
  text("Living Room", 200, 140);
  text("20 ft × 15 ft", 200, 160);
  
  // Kitchen
  fill(255, 220, 220);
  rect(300, 80, 120, 100);
  fill(0);
  text("Kitchen", 360, 120);
  text("12 ft × 10 ft", 360, 140);
  
  // Bedroom 1
  fill(220, 255, 220);
  rect(100, 230, 140, 120);
  fill(0);
  text("Bedroom 1", 170, 280);
  text("14 ft × 12 ft", 170, 300);
  
  // Bedroom 2
  fill(255, 255, 200);
  rect(240, 230, 130, 120);
  fill(0);
  text("Bedroom 2", 305, 280);
  text("13 ft × 12 ft", 305, 300);
  
  // Bathroom
  fill(240, 220, 255);
  rect(370, 230, 80, 80);
  fill(0);
  text("Bathroom", 410, 265);
  text("8 ft × 8 ft", 410, 285);
  
  // Hallway
  fill(200, 200, 200);
  rect(300, 180, 120, 50);
  fill(0);
  text("Hallway", 360, 200);
  text("12 ft × 5 ft", 360, 220);
  
  stroke(0);
  strokeWeight(3);
  noFill();
  rect(100, 80, 350, 270);
  
  noLoop();
}
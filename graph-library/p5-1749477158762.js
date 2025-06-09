function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  fill(0);
  textSize(16);
  text("1. Which room has the largest area in this floor plan?", 20, 30);
  
  // Draw floor plan
  stroke(0);
  strokeWeight(2);
  fill(200, 220, 255);
  
  // Living Room
  rect(100, 80, 200, 150);
  fill(0);
  textSize(12);
  text("Living Room", 120, 100);
  text("20 ft × 15 ft", 120, 115);
  
  // Kitchen
  fill(255, 220, 200);
  rect(300, 80, 120, 150);
  fill(0);
  text("Kitchen", 320, 100);
  text("12 ft × 15 ft", 320, 115);
  
  // Bedroom 1
  fill(220, 255, 200);
  rect(100, 230, 150, 120);
  fill(0);
  text("Bedroom 1", 120, 250);
  text("15 ft × 12 ft", 120, 265);
  
  // Bedroom 2
  fill(255, 200, 220);
  rect(250, 230, 170, 120);
  fill(0);
  text("Bedroom 2", 270, 250);
  text("17 ft × 12 ft", 270, 265);
  
  // Bathroom
  fill(200, 255, 255);
  rect(100, 350, 80, 100);
  fill(0);
  text("Bathroom", 110, 370);
  text("8 ft × 10 ft", 110, 385);
  
  // Hallway
  fill(255, 255, 200);
  rect(180, 350, 240, 60);
  fill(0);
  text("Hallway", 220, 370);
  text("24 ft × 6 ft", 220, 385);
  
  // Grid lines for measurement reference
  stroke(150);
  strokeWeight(1);
  for(let i = 100; i <= 420; i += 20) {
    line(i, 80, i, 410);
  }
  for(let j = 80; j <= 410; j += 20) {
    line(100, j, 420, j);
  }
  
  noLoop();
}
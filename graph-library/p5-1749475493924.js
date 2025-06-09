function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  
  // Title
  fill(0);
  textSize(24);
  textAlign(LEFT);
  text("3. Calculate the total area of all bedrooms in this apartment floor plan.", 50, 40);
  
  // Draw apartment floor plan
  stroke(0);
  strokeWeight(3);
  
  // Bedroom A
  fill(255, 220, 220);
  rect(150, 100, 140, 120);
  fill(0);
  textSize(16);
  textAlign(CENTER);
  text("Bedroom A", 220, 150);
  text("14 ft × 12 ft", 220, 170);
  
  // Bedroom B
  fill(220, 255, 220);
  rect(290, 100, 130, 110);
  fill(0);
  text("Bedroom B", 355, 145);
  text("13 ft × 11 ft", 355, 165);
  
  // Bedroom C
  fill(220, 220, 255);
  rect(420, 100, 120, 100);
  fill(0);
  text("Bedroom C", 480, 145);
  text("12 ft × 10 ft", 480, 165);
  
  // Living Area
  fill(240, 240, 240);
  rect(150, 220, 270, 100);
  fill(0);
  text("Living Area", 285, 265);
  text("27 ft × 10 ft", 285, 285);
  
  // Kitchen
  fill(255, 255, 200);
  rect(420, 220, 120, 100);
  fill(0);
  text("Kitchen", 480, 265);
  text("12 ft × 10 ft", 480, 285);
  
  // Bathroom
  fill(200, 255, 255);
  rect(540, 150, 80, 70);
  fill(0);
  text("Bathroom", 580, 180);
  text("8 ft × 7 ft", 580, 200);
  
  // Draw outer walls
  stroke(0);
  strokeWeight(4);
  noFill();
  rect(150, 100, 470, 220);
  
  // Draw internal walls
  strokeWeight(2);
  line(290, 100, 290, 220);
  line(420, 100, 420, 320);
  line(540, 150, 540, 220);
  line(150, 220, 420, 220);
  
  noLoop();
}
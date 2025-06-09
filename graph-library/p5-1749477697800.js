function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Title
  fill(0);
  textSize(16);
  text("Compare the perimeters of these three rooms. Which has the longest perimeter?", 20, 30);
  
  // Draw three different rooms
  stroke(0);
  strokeWeight(2);
  fill(255);
  
  // Room A - Office
  rect(80, 80, 160, 100);
  fill(0);
  textSize(12);
  text("Office", 140, 100);
  text("16 ft × 9 ft", 135, 115);
  
  // Room B - Dining Room
  fill(255);
  rect(280, 80, 140, 140);
  fill(0);
  text("Dining Room", 320, 110);
  text("11 ft × 11 ft", 320, 125);
  
  // Room C - Study
  fill(255);
  rect(460, 80, 200, 80);
  fill(0);
  text("Study", 540, 105);
  text("18 ft × 7 ft", 535, 120);
  
  // Add dimensions on the outside of each room
  fill(0);
  textSize(10);
  
  // Office dimensions
  text("16 ft", 130, 70);
  text("9 ft", 50, 135);
  
  // Dining Room dimensions  
  text("11 ft", 330, 70);
  text("11 ft", 250, 155);
  
  // Study dimensions
  text("18 ft", 535, 70);
  text("7 ft", 430, 125);
  
  // Instructions
  fill(0);
  textSize(14);
  text("Find the perimeter of each room using: Perimeter = 2 × (length + width)", 80, 280);
  text("Then identify which room requires the most baseboard trim.", 80, 300);
  
  noLoop();
}
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Title
  fill(0);
  textSize(16);
  text("A family wants to carpet two rooms. Compare the total square footage needed.", 20, 30);
  
  // Draw apartment layout
  stroke(0);
  strokeWeight(3);
  fill(255);
  
  // Main layout outline
  rect(120, 80, 300, 200);
  
  // Divide into rooms with interior walls
  strokeWeight(2);
  line(220, 80, 220, 180); // Vertical divider
  line(120, 180, 420, 180); // Horizontal divider
  
  // Room labels and dimensions
  fill(0);
  textSize(12);
  strokeWeight(1);
  
  // Master Bedroom (to be carpeted)
  fill(200, 255, 200);
  rect(121, 81, 98, 98);
  fill(0);
  text("Master Bedroom", 135, 100);
  text("(CARPET)", 155, 115);
  text("14 ft × 13 ft", 145, 130);
  
  // Child's Room (to be carpeted)
  fill(200, 255, 200);
  rect(221, 81, 198, 98);
  fill(0);
  text("Child's Room", 290, 100);
  text("(CARPET)", 300, 115);
  text("17 ft × 13 ft", 295, 130);
  
  // Living Area (tile - not carpeted)
  fill(255, 220, 220);
  rect(121, 181, 298, 98);
  fill(0);
  text("Living Area - TILE (no carpet needed)", 220, 215);
  text("25 ft × 13 ft", 245, 235);
  
  // Dimension labels on outside
  textSize(10);
  text("14 ft", 155, 70);
  text("17 ft", 305, 70);
  text("13 ft", 100, 135);
  text("25 ft", 245, 300);
  
  // Question details
  fill(0);
  textSize(14);
  text("Calculate total carpet needed for both bedrooms.", 120, 350);
  text("Carpet costs $4 per square foot. What is the total square footage?", 120, 370);
  
  noLoop();
}
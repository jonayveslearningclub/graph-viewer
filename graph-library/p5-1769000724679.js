function setup() {
  createCanvas(800, 600);
  background(255);
  noLoop();
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("Find the missing angle ∠ABC if ∠ABD = 28° and ∠DBC = 51°", 50, 30);
  
  // Draw angle diagram
  translate(400, 350);
  
  // Draw rays
  stroke(0);
  strokeWeight(2);
  
  // Ray BA
  line(0, 0, -100, -60);
  // Ray BC
  line(0, 0, 110, 0);
  // Ray BD (middle ray)
  line(0, 0, 40, -80);
  
  // Label points
  fill(0);
  textSize(16);
  textAlign(CENTER);
  text("A", -115, -75);
  text("B", -10, 15);
  text("C", 130, 5);
  text("D", 45, -95);
  
  // Draw angle arcs
  noFill();
  stroke(0, 150, 0);
  strokeWeight(2);
  
  // Arc for angle ABD (28°)
  arc(0, 0, 70, 70, PI - radians(31), PI);
  
  // Arc for angle DBC (51°)
  stroke(255, 100, 0);
  arc(0, 0, 90, 90, PI - radians(82), PI - radians(31));
  
  // Angle labels
  fill(0, 150, 0);
  textAlign(CENTER);
  textSize(14);
  text("28°", -25, -20);
  
  fill(255, 100, 0);
  text("51°", -5, -35);
  
  // Question mark for missing angle
  fill(0);
  textSize(16);
  text("?", -40, -35);
}
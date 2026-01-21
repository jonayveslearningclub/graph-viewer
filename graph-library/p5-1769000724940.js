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
  text("Find the missing angle ∠DEF if ∠DEG = 35° and ∠GEF = 42°", 50, 30);
  
  // Draw angle diagram
  translate(400, 300);
  
  // Draw rays
  stroke(0);
  strokeWeight(2);
  
  // Ray ED
  line(0, 0, -120, 0);
  // Ray EF  
  line(0, 0, 80, -90);
  // Ray EG (middle ray)
  line(0, 0, 60, -40);
  
  // Label points
  fill(0);
  textSize(16);
  textAlign(CENTER);
  text("D", -140, 5);
  text("E", -10, -10);
  text("F", 95, -105);
  text("G", 75, -50);
  
  // Draw angle arcs
  noFill();
  stroke(255, 0, 0);
  strokeWeight(2);
  
  // Arc for angle DEG (35°)
  arc(0, 0, 60, 60, PI, PI + radians(35));
  
  // Arc for angle GEF (42°)
  stroke(0, 0, 255);
  arc(0, 0, 80, 80, PI + radians(35), PI + radians(77));
  
  // Angle labels
  fill(255, 0, 0);
  textAlign(CENTER);
  textSize(14);
  text("35°", -35, -8);
  
  fill(0, 0, 255);
  text("42°", -15, -25);
  
  // Question mark for missing angle
  fill(0);
  textSize(16);
  text("?", -50, -15);
}
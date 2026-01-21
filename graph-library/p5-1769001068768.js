function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Title
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("Find the missing angle ∠ABC if the straight line shows ∠ABD = 128° and ∠DBC = ?", 20, 30);
  
  // Draw the straight line angle diagram
  let centerX = 400;
  let centerY = 350;
  let radius = 140;
  
  // Draw the straight line
  stroke(0);
  strokeWeight(3);
  line(centerX - radius, centerY, centerX + radius, centerY);
  
  // Draw ray BC (at 52° above horizontal, since 180° - 128° = 52°)
  let angle = radians(52);
  line(centerX, centerY, centerX + radius * cos(angle), centerY - radius * sin(angle));
  
  // Draw ray BD (pointing down at 128° from BA)
  let angle2 = radians(-52); // 52° below horizontal
  line(centerX, centerY, centerX + radius * cos(angle2), centerY - radius * sin(angle2));
  
  // Label points
  fill(0);
  textSize(16);
  textAlign(CENTER);
  text("A", centerX - radius - 15, centerY + 5);
  text("B", centerX - 15, centerY + 20);
  text("C", centerX + radius * cos(angle) + 15, centerY - radius * sin(angle) - 10);
  text("D", centerX + radius * cos(angle2) + 15, centerY - radius * sin(angle2) + 20);
  
  // Draw angle arcs
  noFill();
  stroke(255, 0, 0);
  strokeWeight(2);
  
  // Arc for ∠ABD (128°)
  arc(centerX, centerY, 100, 100, angle2, radians(180));
  
  // Arc for ∠DBC
  stroke(0, 0, 255);
  arc(centerX, centerY, 80, 80, angle2, angle);
  
  // Angle labels
  fill(255, 0, 0);
  textSize(14);
  text("128°", centerX - 45, centerY - 15);
  
  fill(0, 0, 255);
  text("?", centerX + 35, centerY + 15);
  
  // Note about straight line
  fill(0);
  textSize(12);
  text("Straight line = 180°", centerX, centerY + 80);
  
  noLoop();
}
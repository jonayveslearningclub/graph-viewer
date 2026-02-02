function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Display the question
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("Find the value of x if angle ABC = 75° and angle ABD = 2x + 15°", 20, 30);
  text("and angle DBC = x + 8°", 20, 55);
  
  // Draw the angle diagram
  let centerX = 400;
  let centerY = 300;
  
  // Draw point B (vertex)
  fill(0);
  circle(centerX, centerY, 8);
  text("B", centerX - 15, centerY + 20);
  
  // Draw ray BA
  line(centerX, centerY, centerX - 150, centerY - 80);
  text("A", centerX - 160, centerY - 85);
  
  // Draw ray BC
  line(centerX, centerY, centerX + 150, centerY - 50);
  text("C", centerX + 160, centerY - 55);
  
  // Draw ray BD (between BA and BC)
  line(centerX, centerY, centerX + 50, centerY - 120);
  text("D", centerX + 55, centerY - 130);
  
  // Draw point D
  fill(0);
  circle(centerX + 50, centerY - 120, 6);
  
  // Label the angles
  textAlign(CENTER);
  textSize(14);
  text("2x + 15°", centerX - 70, centerY - 40);
  text("x + 8°", centerX + 80, centerY - 60);
  text("75°", centerX - 20, centerY - 80);
  
  // Draw angle arcs
  noFill();
  stroke(0);
  strokeWeight(2);
  
  // Arc for angle ABD
  arc(centerX, centerY, 80, 80, radians(208), radians(243));
  
  // Arc for angle DBC  
  arc(centerX, centerY, 60, 60, radians(243), radians(288));
  
  // Arc for total angle ABC
  arc(centerX, centerY, 100, 100, radians(208), radians(288));
  
  noLoop();
}
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  fill(0);
  textSize(16);
  text("A cylinder has a radius of 6 units and height of 9 units. Find its surface area.", 20, 30);
  text("Surface Area = 2&#960;r&#178; + 2&#960;rh", 20, 50);
  
  // Draw cylinder
  stroke(0);
  strokeWeight(2);
  fill(180, 255, 180, 150);
  
  // Top ellipse
  ellipse(400, 150, 240, 80);
  
  // Bottom ellipse
  ellipse(400, 400, 240, 80);
  
  // Side lines
  line(280, 150, 280, 400);
  line(520, 150, 520, 400);
  
  // Fill cylinder body
  noStroke();
  fill(180, 255, 180, 100);
  rect(280, 150, 240, 250);
  
  // Redraw outlines
  stroke(0);
  strokeWeight(2);
  noFill();
  ellipse(400, 150, 240, 80);
  ellipse(400, 400, 240, 80);
  line(280, 150, 280, 400);
  line(520, 150, 520, 400);
  
  // Labels
  fill(0);
  textSize(14);
  text("r = 6", 320, 190);
  text("h = 9", 540, 275);
  
  // Radius line
  stroke(255, 0, 0);
  strokeWeight(2);
  line(400, 150, 480, 150);
  
  // Height line
  line(540, 150, 540, 400);
  line(535, 145, 545, 155);
  line(535, 395, 545, 405);
  
  noLoop();
}
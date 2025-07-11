function setup() {
  createCanvas(800, 600);
  background(240);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  text("3. Which toy is 3 squares East and 2 squares North of the Ball?", 20, 30);
  
  // Draw grid
  stroke(100);
  strokeWeight(1);
  
  // Grid lines
  for (let i = 0; i <= 7; i++) {
    line(120 + i * 55, 80, 120 + i * 55, 465);
    line(120, 80 + i * 55, 505, 80 + i * 55);
  }
  
  // Grid labels (numbers)
  fill(0);
  textSize(14);
  for (let i = 0; i <= 7; i++) {
    text(i, 100, 470 - i * 55);
    text(i, 115 + i * 55, 485);
  }
  
  // Axis labels
  textSize(16);
  text("East", 300, 510);
  text("North", 70, 280);
  
  // Place toys on grid
  textSize(14);
  fill(255, 100, 100);
  circle(175, 410, 25);
  fill(0);
  text("Ball", 160, 435);
  
  fill(100, 255, 100);
  rect(335, 285, 30, 30);
  fill(0);
  text("Block", 335, 330);
  
  fill(255, 255, 100);
  // Truck at position (5, 4)
  rect(395, 190, 40, 20);
  rect(385, 200, 15, 15);
  circle(395, 215, 8);
  circle(420, 215, 8);
  fill(0);
  text("Truck", 395, 240);
  
  fill(255, 150, 255);
  // Doll at position (6, 6)
  circle(450, 135, 20);
  rect(440, 150, 20, 25);
  fill(0);
  text("Doll", 440, 190);
  
  fill(150, 255, 150);
  // Kite at position (2, 5)
  quad(230, 190, 245, 205, 230, 220, 215, 205);
  fill(0);
  text("Kite", 220, 240);
  
  fill(255, 200, 150);
  // Robot at position (4, 2)
  rect(335, 355, 25, 30);
  rect(330, 335, 35, 20);
  fill(0);
  text("Robot", 325, 395);
  
  fill(200, 100, 255);
  // Puzzle at position (3, 7)
  rect(285, 80, 30, 30);
  line(285, 95, 315, 95);
  line(285, 110, 315, 110);
  line(300, 80, 300, 110);
  fill(0);
  text("Puzzle", 280, 125);
  
  // Compass
  fill(0);
  textSize(16);
  text("N", 585, 200);
  text("S", 585, 240);
  text("E", 605, 220);
  text("W", 565, 220);
  
  // Compass arrows
  stroke(0);
  strokeWeight(2);
  line(580, 210, 590, 210);
  line(580, 210, 585, 205);
  line(580, 210, 585, 215);
  
  line(580, 230, 590, 230);
  line(590, 230, 585, 225);
  line(590, 230, 585, 235);
  
  noLoop();
}
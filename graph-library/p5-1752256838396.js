function setup() {
  createCanvas(800, 600);
  background(240);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  text("1. Which animal is 2 squares North and 1 square East of the Dog?", 20, 30);
  
  // Draw grid
  stroke(100);
  strokeWeight(1);
  
  // Grid lines
  for (let i = 0; i <= 6; i++) {
    line(150 + i * 60, 80, 150 + i * 60, 440);
    line(150, 80 + i * 60, 510, 80 + i * 60);
  }
  
  // Grid labels (numbers)
  fill(0);
  textSize(14);
  for (let i = 0; i <= 6; i++) {
    text(i, 130, 445 - i * 60);
    text(i, 145 + i * 60, 460);
  }
  
  // Axis labels
  textSize(16);
  text("East", 320, 490);
  text("North", 100, 270);
  
  // Place animals on grid
  textSize(14);
  fill(255, 100, 100);
  circle(210, 380, 30);
  fill(0);
  text("Dog", 195, 385);
  
  fill(100, 255, 100);
  circle(270, 320, 30);
  fill(0);
  text("Cat", 255, 325);
  
  fill(100, 100, 255);
  circle(330, 260, 30);
  fill(0);
  text("Bird", 315, 265);
  
  fill(255, 255, 100);
  circle(390, 200, 30);
  fill(0);
  text("Fish", 375, 205);
  
  fill(255, 150, 255);
  circle(450, 320, 30);
  fill(0);
  text("Frog", 435, 325);
  
  fill(150, 255, 150);
  circle(270, 140, 30);
  fill(0);
  text("Bee", 255, 145);
  
  fill(255, 200, 150);
  circle(330, 380, 30);
  fill(0);
  text("Ant", 315, 385);
  
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
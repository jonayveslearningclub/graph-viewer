function setup() {
  createCanvas(800, 600);
  background(240);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  text("2. How many squares South and West do you move to get from the Star to the Heart?", 20, 30);
  
  // Draw grid
  stroke(100);
  strokeWeight(1);
  
  // Grid lines
  for (let i = 0; i <= 5; i++) {
    line(180 + i * 70, 90, 180 + i * 70, 440);
    line(180, 90 + i * 70, 530, 90 + i * 70);
  }
  
  // Grid labels (numbers)
  fill(0);
  textSize(14);
  for (let i = 0; i <= 5; i++) {
    text(i, 160, 445 - i * 70);
    text(i, 175 + i * 70, 460);
  }
  
  // Axis labels
  textSize(16);
  text("East", 340, 490);
  text("North", 120, 280);
  
  // Place shapes on grid
  textSize(14);
  fill(255, 215, 0);
  // Star at position (4, 3)
  for (let i = 0; i < 5; i++) {
    let angle = -PI/2 + i * TWO_PI/5;
    let x1 = 460 + cos(angle) * 15;
    let y1 = 230 + sin(angle) * 15;
    let x2 = 460 + cos(angle + PI/5) * 7;
    let y2 = 230 + sin(angle + PI/5) * 7;
    triangle(460, 230, x1, y1, x2, y2);
  }
  fill(0);
  text("Star", 445, 255);
  
  fill(255, 100, 150);
  // Heart at position (1, 1)
  circle(215, 370, 25);
  circle(235, 370, 25);
  triangle(200, 380, 250, 380, 225, 405);
  fill(0);
  text("Heart", 205, 425);
  
  fill(100, 255, 100);
  circle(320, 160, 30);
  fill(0);
  text("Circle", 300, 165);
  
  fill(150, 150, 255);
  rect(370, 145, 30, 30);
  fill(0);
  text("Square", 370, 195);
  
  fill(255, 180, 100);
  triangle(250, 230, 270, 200, 290, 230);
  fill(0);
  text("Triangle", 245, 250);
  
  fill(200, 100, 255);
  ellipse(390, 300, 40, 25);
  fill(0);
  text("Oval", 375, 320);
  
  fill(100, 200, 200);
  rect(460, 360, 40, 25);
  fill(0);
  text("Rectangle", 450, 395);
  
  // Compass
  fill(0);
  textSize(16);
  text("N", 635, 200);
  text("S", 635, 240);
  text("E", 655, 220);
  text("W", 615, 220);
  
  // Compass arrows
  stroke(0);
  strokeWeight(2);
  line(630, 210, 640, 210);
  line(630, 210, 635, 205);
  line(630, 210, 635, 215);
  
  line(630, 230, 640, 230);
  line(640, 230, 635, 225);
  line(640, 230, 635, 235);
  
  noLoop();
}
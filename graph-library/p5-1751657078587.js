function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Title
  fill(0);
  textSize(18);
  text("1. Measure the length of the rectangle in centimeters.", 20, 30);
  
  // Draw grid with cm markings
  stroke(200);
  strokeWeight(1);
  
  // Vertical grid lines
  for (let x = 50; x <= 750; x += 20) {
    line(x, 80, x, 550);
  }
  
  // Horizontal grid lines
  for (let y = 80; y <= 550; y += 20) {
    line(50, y, 750, y);
  }
  
  // Draw rectangle
  stroke(0);
  strokeWeight(3);
  fill(150, 200, 255);
  rect(100, 200, 240, 120);
  
  // Label cm marks on horizontal axis
  fill(0);
  textSize(12);
  textAlign(CENTER);
  for (let i = 0; i <= 17; i++) {
    text(i, 50 + i * 20, 575);
  }
  
  // Label cm marks on vertical axis
  textAlign(RIGHT);
  for (let i = 0; i <= 12; i++) {
    text(i, 45, 555 - i * 20);
  }
  
  // Axis labels
  textAlign(CENTER);
  textSize(14);
  text("centimeters", 400, 595);
  
  noLoop();
}
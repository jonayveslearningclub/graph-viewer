function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Title
  fill(0);
  textSize(18);
  text("3. Find the area of the square in square centimeters.", 20, 30);
  
  // Draw grid with cm markings
  stroke(200);
  strokeWeight(1);
  
  // Vertical grid lines
  for (let x = 60; x <= 740; x += 30) {
    line(x, 90, x, 530);
  }
  
  // Horizontal grid lines
  for (let y = 90; y <= 530; y += 30) {
    line(60, y, 740, y);
  }
  
  // Draw square
  stroke(0);
  strokeWeight(3);
  fill(200, 255, 200);
  rect(180, 240, 180, 180);
  
  // Add small squares inside to show grid
  stroke(100);
  strokeWeight(1);
  for (let x = 180; x <= 360; x += 30) {
    for (let y = 240; y <= 420; y += 30) {
      rect(x, y, 30, 30);
    }
  }
  
  // Label cm marks on horizontal axis
  fill(0);
  textSize(12);
  textAlign(CENTER);
  for (let i = 0; i <= 12; i++) {
    text(i, 60 + i * 30, 555);
  }
  
  // Label cm marks on vertical axis
  textAlign(RIGHT);
  for (let i = 0; i <= 8; i++) {
    text(i, 55, 535 - i * 30);
  }
  
  // Axis labels
  textAlign(CENTER);
  textSize(14);
  text("centimeters", 400, 580);
  
  noLoop();
}
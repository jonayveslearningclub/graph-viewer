function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Title
  fill(0);
  textSize(18);
  text("2. What is the perimeter of the triangle in centimeters?", 20, 30);
  
  // Draw grid with cm markings
  stroke(200);
  strokeWeight(1);
  
  // Vertical grid lines
  for (let x = 50; x <= 750; x += 25) {
    line(x, 80, x, 550);
  }
  
  // Horizontal grid lines
  for (let y = 80; y <= 550; y += 25) {
    line(50, y, 750, y);
  }
  
  // Draw triangle
  stroke(0);
  strokeWeight(3);
  fill(255, 200, 150);
  triangle(150, 450, 350, 150, 550, 450);
  
  // Label vertices
  fill(0);
  textSize(16);
  textAlign(CENTER);
  text("A", 150, 475);
  text("B", 350, 130);
  text("C", 550, 475);
  
  // Label cm marks on horizontal axis
  textSize(12);
  for (let i = 0; i <= 14; i++) {
    text(i, 50 + i * 25, 575);
  }
  
  // Label cm marks on vertical axis
  textAlign(RIGHT);
  for (let i = 0; i <= 10; i++) {
    text(i, 45, 555 - i * 25);
  }
  
  // Axis labels
  textAlign(CENTER);
  textSize(14);
  text("centimeters", 400, 595);
  
  noLoop();
}
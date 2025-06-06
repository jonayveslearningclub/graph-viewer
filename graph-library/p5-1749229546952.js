function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Title
  fill(0);
  textSize(16);
  text("Determine which graphs represent functions:", 20, 30);
  
  // Graph A - Circle (not a function)
  fill(0);
  textSize(14);
  text("A.", 30, 75);
  
  drawGrid(50, 80, 250, 200);
  
  // Draw circle centered at origin with radius 3
  noFill();
  stroke(0);
  strokeWeight(2);
  let centerX = 175;
  let centerY = 180;
  circle(centerX, centerY, 120);
  
  // Graph B - Parabola opening right (not a function)
  fill(0);
  textSize(14);
  text("B.", 330, 75);
  
  drawGrid(350, 80, 250, 200);
  
  // Draw sideways parabola x = y²
  noFill();
  stroke(0);
  strokeWeight(2);
  beginShape();
  for (let y = -4; y <= 4; y += 0.2) {
    let x = y * y / 4;
    let px = 475 + x * 15;
    let py = 180 - y * 15;
    vertex(px, py);
  }
  endShape();
  
  // Graph C - Linear function
  fill(0);
  textSize(14);
  text("C.", 130, 350);
  
  drawGrid(150, 370, 250, 200);
  
  // Draw line y = 2x - 1
  stroke(0);
  strokeWeight(2);
  line(150, 485, 400, 335);
  
  fill(0);
  textSize(12);
  text("y = 2x - 1", 320, 325);
  
  // Graph D - Absolute value function
  fill(0);  
  textSize(14);
  text("D.", 430, 350);
  
  drawGrid(450, 370, 250, 200);
  
  // Draw V-shape |x + 1|
  stroke(0);
  strokeWeight(2);
  line(450, 440, 565, 370);
  line(565, 370, 700, 570);
  
  fill(0);
  textSize(12);
  text("y = |x + 1|", 600, 390);
  
  noStroke();
}

function drawGrid(x, y, w, h) {
  stroke(200);
  strokeWeight(1);
  
  for (let i = 0; i <= 10; i++) {
    line(x + i * w/10, y, x + i * w/10, y + h);
    line(x, y + i * h/10, x + w, y + i * h/10);
  }
  
  stroke(0);
  strokeWeight(2);
  line(x + w/2, y, x + w/2, y + h);
  line(x, y + h/2, x + w, y + h/2);
  
  fill(0);
  textSize(10);
  text("0", x + w/2 - 8, y + h/2 + 12);
  
  noStroke();
}
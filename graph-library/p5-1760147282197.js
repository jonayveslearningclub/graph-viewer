function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Draw question
  fill(0);
  textSize(18);
  text("Triangle DEF has vertices D(-2, 4), E(-6, 1), and F(-3, -2).", 20, 30);
  text("Rotate triangle DEF 90&#176; clockwise around the origin. Find the new coordinates.", 20, 55);
  
  // Set up coordinate system
  let centerX = width / 2;
  let centerY = height / 2 + 40;
  let scale = 18;
  
  // Draw grid
  stroke(220);
  strokeWeight(0.5);
  for (let i = -10; i <= 10; i++) {
    line(centerX + i * scale, centerY - 10 * scale, centerX + i * scale, centerY + 10 * scale);
    line(centerX - 10 * scale, centerY + i * scale, centerX + 10 * scale, centerY + i * scale);
  }
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(centerX, centerY - 10 * scale, centerX, centerY + 10 * scale); // y-axis
  line(centerX - 10 * scale, centerY, centerX + 10 * scale, centerY); // x-axis
  
  // Label axes
  fill(0);
  textSize(12);
  textAlign(CENTER, CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, centerX + i * scale, centerY + 15);
      text(i, centerX - 15, centerY - i * scale);
    }
  }
  text("0", centerX - 10, centerY + 10);
  
  // Draw original triangle DEF
  stroke(128, 0, 128);
  strokeWeight(2);
  fill(128, 0, 128, 100);
  
  let Dx = -2, Dy = 4;
  let Ex = -6, Ey = 1;
  let Fx = -3, Fy = -2;
  
  triangle(centerX + Dx * scale, centerY - Dy * scale,
          centerX + Ex * scale, centerY - Ey * scale,
          centerX + Fx * scale, centerY - Fy * scale);
  
  // Label original triangle vertices
  fill(128, 0, 128);
  textSize(14);
  textAlign(CENTER, CENTER);
  text("D(-2, 4)", centerX + Dx * scale + 20, centerY - Dy * scale - 10);
  text("E(-6, 1)", centerX + Ex * scale - 20, centerY - Ey * scale + 10);
  text("F(-3, -2)", centerX + Fx * scale - 20, centerY - Fy * scale - 10);
  
  // Mark the origin (center of rotation)
  fill(255, 0, 0);
  noStroke();
  ellipse(centerX, centerY, 8, 8);
  fill(255, 0, 0);
  text("Origin", centerX + 15, centerY - 15);
  
  // Add rotation indication
  stroke(255, 100, 0);
  strokeWeight(2);
  noFill();
  arc(centerX, centerY, 60, 60, 0, PI/2);
  
  fill(255, 100, 0);
  textSize(12);
  text("90&#176; clockwise", centerX + 50, centerY - 30);
  
  noLoop();
}
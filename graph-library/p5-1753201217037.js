function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  fill(0);
  textSize(16);
  text("Rotate triangle DEF 90&#176; clockwise around the origin.", 10, 25);
  text("What are the new coordinates of each vertex?", 10, 45);
  
  // Set up coordinate system
  translate(width/2, height/2);
  
  // Draw grid
  stroke(220);
  for (let i = -10; i <= 10; i++) {
    line(i * 20, -200, i * 20, 200);
    line(-200, i * 20, 200, i * 20);
  }
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(-200, 0, 200, 0); // x-axis
  line(0, -200, 0, 200); // y-axis
  
  // Label axes
  fill(0);
  textSize(12);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, i * 20 - 3, 15); // x-axis labels
      text(i, -15, -i * 20 + 3); // y-axis labels
    }
  }
  text("0", -8, 15);
  
  // Original triangle DEF
  fill(150, 255, 150);
  stroke(0);
  strokeWeight(2);
  let Dx = -3 * 20, Dy = -2 * 20;
  let Ex = -1 * 20, Ey = -6 * 20;
  let Fx = -6 * 20, Fy = -5 * 20;
  
  triangle(Dx, Dy, Ex, Ey, Fx, Fy);
  
  // Label original points
  fill(0);
  textSize(14);
  text("D(-3, 2)", Dx - 35, Dy - 5);
  text("E(-1, 6)", Ex - 10, Ey - 10);
  text("F(-6, 5)", Fx - 35, Fy - 10);
  
  // Draw rotation center (origin)
  fill(255, 0, 0);
  stroke(255, 0, 0);
  strokeWeight(1);
  ellipse(0, 0, 8, 8);
  text("Origin", 10, -10);
  
  // Draw rotation arrow
  stroke(255, 0, 0);
  strokeWeight(2);
  noFill();
  arc(0, 0, 60, 60, 0, PI/2);
  
  // Arrow head for rotation
  pushMatrix();
  translate(30, 0);
  rotate(PI/2);
  stroke(255, 0, 0);
  line(0, 0, -8, -4);
  line(0, 0, -8, 4);
  popMatrix();
  
  fill(255, 0, 0);
  text("90&#176; CW", 35, -25);
  
  noLoop();
}
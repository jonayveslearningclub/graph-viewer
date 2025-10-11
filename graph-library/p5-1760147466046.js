function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("3. Pentagon VWXYZ is rotated 90° clockwise around the origin.", 10, 25);
  text("What are the coordinates of V', W', X', Y', and Z'?", 10, 45);
  
  // Draw coordinate plane
  let centerX = width / 2;
  let centerY = height / 2;
  let scale = 18;
  
  // Grid lines
  stroke(220);
  for (let i = -10; i <= 10; i++) {
    line(centerX + i * scale, centerY - 10 * scale, centerX + i * scale, centerY + 10 * scale);
    line(centerX - 10 * scale, centerY + i * scale, centerX + 10 * scale, centerY + i * scale);
  }
  
  // Axes
  stroke(0);
  strokeWeight(2);
  line(centerX - 10 * scale, centerY, centerX + 10 * scale, centerY);
  line(centerX, centerY - 10 * scale, centerX, centerY + 10 * scale);
  
  // Axis labels
  textAlign(CENTER);
  textSize(12);
  fill(0);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, centerX + i * scale, centerY + 15);
      text(i, centerX - 15, centerY - i * scale + 4);
    }
  }
  text("0", centerX - 15, centerY + 15);
  
  // Original pentagon VWXYZ
  strokeWeight(2);
  stroke(150, 0, 150);
  fill(150, 0, 150, 50);
  let Vx = centerX + (-2) * scale;
  let Vy = centerY - 4 * scale;
  let Wx = centerX + (-4) * scale;
  let Wy = centerY - 2 * scale;
  let Xx = centerX + (-3) * scale;
  let Xy = centerY - 0 * scale;
  let Yx = centerX + (-1) * scale;
  let Yy = centerY - 1 * scale;
  let Zx = centerX + (-1) * scale;
  let Zy = centerY - 3 * scale;
  
  beginShape();
  vertex(Vx, Vy);
  vertex(Wx, Wy);
  vertex(Xx, Xy);
  vertex(Yx, Yy);
  vertex(Zx, Zy);
  endShape(CLOSE);
  
  // Label original vertices
  fill(150, 0, 150);
  textSize(14);
  textAlign(CENTER);
  text("V(-2, 4)", Vx, Vy - 15);
  text("W(-4, 2)", Wx - 25, Wy);
  text("X(-3, 0)", Xx, Xy + 20);
  text("Y(-1, 1)", Yx + 25, Yy);
  text("Z(-1, 3)", Zx + 25, Zy);
  
  // Highlight center of rotation
  fill(255, 100, 0);
  stroke(255, 100, 0);
  strokeWeight(6);
  point(centerX, centerY);
  
  textAlign(LEFT);
  textSize(14);
  text("Center of rotation: (0, 0)", centerX + 15, centerY - 5);
  
  // Rotation arrow
  stroke(255, 100, 0);
  strokeWeight(3);
  noFill();
  arc(centerX, centerY, 60, 60, 0, PI/2);
  
  // Arrow head for rotation
  let arrowX = centerX + 30;
  let arrowY = centerY;
  line(arrowX, arrowY, arrowX - 8, arrowY - 8);
  line(arrowX, arrowY, arrowX - 8, arrowY + 8);
  
  fill(255, 100, 0);
  text("90° clockwise", centerX + 40, centerY + 5);
  
  noLoop();
}
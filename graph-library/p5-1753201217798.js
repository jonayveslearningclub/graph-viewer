function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  fill(0);
  textSize(16);
  text("Translate rectangle PQRS 4 units left and 3 units up.", 10, 25);
  text("Find the new coordinates of all vertices.", 10, 45);
  
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
  
  // Original rectangle PQRS
  fill(255, 180, 100);
  stroke(0);
  strokeWeight(2);
  let Px = 2 * 20, Py = -1 * 20;
  let Qx = 6 * 20, Qy = -1 * 20;
  let Rx = 6 * 20, Ry = -5 * 20;
  let Sx = 2 * 20, Sy = -5 * 20;
  
  quad(Px, Py, Qx, Qy, Rx, Ry, Sx, Sy);
  
  // Label original points
  fill(0);
  textSize(14);
  text("P(2, 1)", Px - 15, Py - 10);
  text("Q(6, 1)", Qx + 5, Qy - 10);
  text("R(6, 5)", Rx + 5, Ry + 20);
  text("S(2, 5)", Sx - 15, Sy + 20);
  
  // Draw translation vector arrow
  stroke(255, 0, 0);
  strokeWeight(3);
  let startX = 8 * 20, startY = -8 * 20;
  let endX = startX - 4 * 20, endY = startY + 3 * 20;
  line(startX, startY, endX, endY);
  
  // Arrow head
  let angle = atan2(endY - startY, endX - startX);
  pushMatrix();
  translate(endX, endY);
  rotate(angle);
  line(0, 0, -10, -5);
  line(0, 0, -10, 5);
  popMatrix();
  
  fill(255, 0, 0);
  text("4 left, 3 up", startX - 30, startY + 25);
  
  noLoop();
}
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("2. Quadrilateral PQRS is reflected across the y-axis.", 10, 25);
  text("Draw the image P'Q'R'S' and list the new coordinates.", 10, 45);
  
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
  
  // Original quadrilateral PQRS
  strokeWeight(2);
  stroke(0, 150, 0);
  fill(0, 150, 0, 50);
  let Px = centerX + 2 * scale;
  let Py = centerY - 3 * scale;
  let Qx = centerX + 5 * scale;
  let Qy = centerY - 4 * scale;
  let Rx = centerX + 6 * scale;
  let Ry = centerY - 1 * scale;
  let Sx = centerX + 3 * scale;
  let Sy = centerY - 1 * scale;
  
  beginShape();
  vertex(Px, Py);
  vertex(Qx, Qy);
  vertex(Rx, Ry);
  vertex(Sx, Sy);
  endShape(CLOSE);
  
  // Label original vertices
  fill(0, 150, 0);
  textSize(14);
  textAlign(CENTER);
  text("P(2, 3)", Px, Py - 15);
  text("Q(5, 4)", Qx, Qy - 15);
  text("R(6, 1)", Rx + 20, Ry);
  text("S(3, 1)", Sx, Sy + 20);
  
  // Highlight y-axis for reflection
  stroke(255, 0, 0);
  strokeWeight(4);
  line(centerX, centerY - 10 * scale, centerX, centerY + 10 * scale);
  
  fill(255, 0, 0);
  textAlign(LEFT);
  textSize(14);
  text("Line of reflection: y-axis", centerX + 20, centerY - 9 * scale);
  
  noLoop();
}
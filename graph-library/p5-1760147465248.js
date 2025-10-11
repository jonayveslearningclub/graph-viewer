function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("1. Triangle ABC is translated 4 units right and 3 units down.", 10, 25);
  text("What are the coordinates of A', B', and C'?", 10, 45);
  
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
  
  // Original triangle ABC
  strokeWeight(2);
  stroke(255, 0, 0);
  fill(255, 0, 0, 50);
  let Ax = centerX + (-3) * scale;
  let Ay = centerY - 2 * scale;
  let Bx = centerX + (-1) * scale;
  let By = centerY - 5 * scale;
  let Cx = centerX + 1 * scale;
  let Cy = centerY - 1 * scale;
  
  triangle(Ax, Ay, Bx, By, Cx, Cy);
  
  // Label original vertices
  fill(255, 0, 0);
  textSize(14);
  textAlign(CENTER);
  text("A(-3, 2)", Ax, Ay - 15);
  text("B(-1, 5)", Bx, By - 15);
  text("C(1, 1)", Cx + 20, Cy);
  
  // Draw translation vector arrow
  stroke(0, 0, 255);
  strokeWeight(3);
  let arrowX = centerX + 6 * scale;
  let arrowY = centerY - 8 * scale;
  line(arrowX, arrowY, arrowX + 4 * scale, arrowY + 3 * scale);
  
  // Arrow head
  let endX = arrowX + 4 * scale;
  let endY = arrowY + 3 * scale;
  line(endX, endY, endX - 10, endY - 5);
  line(endX, endY, endX - 5, endY - 10);
  
  fill(0, 0, 255);
  textAlign(LEFT);
  text("Translation: (4, -3)", arrowX + 10, arrowY - 10);
  
  noLoop();
}
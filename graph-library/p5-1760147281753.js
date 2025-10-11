function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Draw question
  fill(0);
  textSize(18);
  text("Triangle ABC is reflected across the y-axis to form triangle A'B'C'.", 20, 30);
  text("What are the coordinates of the vertices of triangle A'B'C'?", 20, 55);
  
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
  
  // Draw original triangle ABC
  stroke(255, 0, 0);
  strokeWeight(2);
  fill(255, 0, 0, 100);
  
  let Ax = 3, Ay = 2;
  let Bx = 6, By = 7;
  let Cx = 8, Cy = 1;
  
  triangle(centerX + Ax * scale, centerY - Ay * scale,
          centerX + Bx * scale, centerY - By * scale,
          centerX + Cx * scale, centerY - Cy * scale);
  
  // Label original triangle vertices
  fill(255, 0, 0);
  textSize(14);
  textAlign(CENTER, CENTER);
  text("A(" + Ax + ", " + Ay + ")", centerX + Ax * scale - 20, centerY - Ay * scale - 15);
  text("B(" + Bx + ", " + By + ")", centerX + Bx * scale + 20, centerY - By * scale - 15);
  text("C(" + Cx + ", " + Cy + ")", centerX + Cx * scale + 20, centerY - Cy * scale + 15);
  
  // Draw reflected triangle A'B'C' (outline only)
  stroke(0, 0, 255);
  strokeWeight(2);
  noFill();
  
  triangle(centerX + (-Ax) * scale, centerY - Ay * scale,
          centerX + (-Bx) * scale, centerY - By * scale,
          centerX + (-Cx) * scale, centerY - Cy * scale);
  
  // Label reflected triangle vertices with question marks
  fill(0, 0, 255);
  textAlign(CENTER, CENTER);
  text("A'(?, ?)", centerX + (-Ax) * scale + 20, centerY - Ay * scale - 15);
  text("B'(?, ?)", centerX + (-Bx) * scale - 20, centerY - By * scale - 15);
  text("C'(?, ?)", centerX + (-Cx) * scale - 20, centerY - Cy * scale + 15);
  
  noLoop();
}
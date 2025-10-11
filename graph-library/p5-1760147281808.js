function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Draw question
  fill(0);
  textSize(18);
  text("Quadrilateral PQRS is translated 4 units right and 3 units down.", 20, 30);
  text("Draw the translated quadrilateral P'Q'R'S'.", 20, 55);
  
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
  
  // Draw original quadrilateral PQRS
  stroke(0, 150, 0);
  strokeWeight(2);
  fill(0, 150, 0, 100);
  
  let Px = -7, Py = 5;
  let Qx = -4, Qy = 8;
  let Rx = -2, Ry = 6;
  let Sx = -6, Sy = 3;
  
  quad(centerX + Px * scale, centerY - Py * scale,
       centerX + Qx * scale, centerY - Qy * scale,
       centerX + Rx * scale, centerY - Ry * scale,
       centerX + Sx * scale, centerY - Sy * scale);
  
  // Label original quadrilateral vertices
  fill(0, 150, 0);
  textSize(14);
  textAlign(CENTER, CENTER);
  text("P", centerX + Px * scale - 12, centerY - Py * scale);
  text("Q", centerX + Qx * scale - 12, centerY - Qy * scale - 12);
  text("R", centerX + Rx * scale + 12, centerY - Ry * scale - 12);
  text("S", centerX + Sx * scale - 12, centerY - Sy * scale + 12);
  
  // Show translation vector
  stroke(255, 0, 0);
  strokeWeight(2);
  fill(255, 0, 0);
  
  // Draw arrow showing translation
  let arrowX = centerX - 2 * scale;
  let arrowY = centerY - 2 * scale;
  line(arrowX, arrowY, arrowX + 4 * scale, arrowY + 3 * scale);
  
  // Arrow head
  let endX = arrowX + 4 * scale;
  let endY = arrowY + 3 * scale;
  line(endX, endY, endX - 8, endY - 5);
  line(endX, endY, endX - 5, endY + 8);
  
  text("Translation: 4 right, 3 down", arrowX + 50, arrowY - 10);
  
  noLoop();
}
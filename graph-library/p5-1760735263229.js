function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  textSize(18);
  fill(0);
  text("Rectangle DEFG has vertices D(1,2), E(6,2), F(6,7), G(1,7).", 20, 25);
  text("Translate the rectangle 4 units left and 3 units down.", 20, 50);
  text("What are the coordinates of the translated rectangle D'E'F'G'?", 20, 75);
  
  // Set up coordinate system
  let centerX = width / 2;
  let centerY = height / 2 + 30;
  let scale = 22;
  
  // Draw grid
  stroke(220);
  strokeWeight(1);
  for (let i = -10; i <= 10; i++) {
    // Vertical lines
    line(centerX + i * scale, centerY - 10 * scale, centerX + i * scale, centerY + 10 * scale);
    // Horizontal lines
    line(centerX - 10 * scale, centerY + i * scale, centerX + 10 * scale, centerY + i * scale);
  }
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(centerX, centerY - 10 * scale, centerX, centerY + 10 * scale); // y-axis
  line(centerX - 10 * scale, centerY, centerX + 10 * scale, centerY); // x-axis
  
  // Label axes
  textSize(14);
  fill(0);
  textAlign(CENTER, CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      // x-axis labels
      text(i, centerX + i * scale, centerY + 15);
      // y-axis labels
      text(i, centerX - 15, centerY - i * scale);
    }
  }
  text("0", centerX - 12, centerY + 12);
  
  // Original rectangle DEFG
  fill(150, 255, 150);
  stroke(0);
  strokeWeight(2);
  let D = {x: centerX + 1 * scale, y: centerY - 2 * scale};
  let E = {x: centerX + 6 * scale, y: centerY - 2 * scale};
  let F = {x: centerX + 6 * scale, y: centerY - 7 * scale};
  let G = {x: centerX + 1 * scale, y: centerY - 7 * scale};
  
  beginShape();
  vertex(D.x, D.y);
  vertex(E.x, E.y);
  vertex(F.x, F.y);
  vertex(G.x, G.y);
  endShape(CLOSE);
  
  // Label original rectangle vertices
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(16);
  text("D", D.x - 12, D.y + 8);
  text("E", E.x + 12, E.y + 8);
  text("F", F.x + 12, F.y - 8);
  text("G", G.x - 12, G.y - 8);
  
  // Draw translated rectangle (dashed outline)
  stroke(200, 100, 0);
  strokeWeight(2);
  drawingContext.setLineDash([5, 5]);
  fill(255, 200, 100, 120);
  
  let Dprime = {x: centerX + (-3) * scale, y: centerY - (-1) * scale};
  let Eprime = {x: centerX + 2 * scale, y: centerY - (-1) * scale};
  let Fprime = {x: centerX + 2 * scale, y: centerY - 4 * scale};
  let Gprime = {x: centerX + (-3) * scale, y: centerY - 4 * scale};
  
  beginShape();
  vertex(Dprime.x, Dprime.y);
  vertex(Eprime.x, Eprime.y);
  vertex(Fprime.x, Fprime.y);
  vertex(Gprime.x, Gprime.y);
  endShape(CLOSE);
  
  drawingContext.setLineDash([]);
  
  // Label translated rectangle vertices
  fill(150, 75, 0);
  textAlign(CENTER, CENTER);
  text("D'", Dprime.x - 15, Dprime.y + 8);
  text("E'", Eprime.x + 15, Eprime.y + 8);
  text("F'", Fprime.x + 15, Fprime.y - 8);
  text("G'", Gprime.x - 15, Gprime.y - 8);
  
  noLoop();
}
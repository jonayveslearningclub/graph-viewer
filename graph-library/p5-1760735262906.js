function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  textSize(18);
  fill(0);
  text("Point P(3, -4) is rotated 90° counterclockwise around the origin.", 20, 25);
  text("What are the coordinates of P' after the rotation?", 20, 50);
  
  // Set up coordinate system
  let centerX = width / 2;
  let centerY = height / 2 + 20;
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
  
  // Original point P
  fill(255, 100, 100);
  stroke(0);
  strokeWeight(2);
  let P = {x: centerX + 3 * scale, y: centerY - (-4) * scale};
  
  ellipse(P.x, P.y, 12, 12);
  
  // Label original point
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(16);
  text("P(3, -4)", P.x + 25, P.y + 8);
  
  // Draw line from origin to P
  stroke(150);
  strokeWeight(1);
  drawingContext.setLineDash([3, 3]);
  line(centerX, centerY, P.x, P.y);
  
  // Rotated point P'
  fill(100, 100, 255);
  stroke(0);
  strokeWeight(2);
  drawingContext.setLineDash([]);
  let Pprime = {x: centerX + 4 * scale, y: centerY - 3 * scale};
  
  ellipse(Pprime.x, Pprime.y, 12, 12);
  
  // Label rotated point
  fill(0);
  textAlign(CENTER, CENTER);
  text("P'", Pprime.x + 15, Pprime.y - 8);
  
  // Draw line from origin to P'
  stroke(150);
  strokeWeight(1);
  drawingContext.setLineDash([3, 3]);
  line(centerX, centerY, Pprime.x, Pprime.y);
  
  // Draw rotation arc
  drawingContext.setLineDash([]);
  stroke(0, 150, 0);
  strokeWeight(2);
  noFill();
  let radius = 60;
  arc(centerX, centerY, radius * 2, radius * 2, -HALF_PI, 0);
  
  // Arrow for rotation direction
  stroke(0, 150, 0);
  strokeWeight(2);
  let arrowX = centerX + radius * cos(-HALF_PI + 0.1);
  let arrowY = centerY + radius * sin(-HALF_PI + 0.1);
  line(arrowX, arrowY, arrowX - 8, arrowY - 3);
  line(arrowX, arrowY, arrowX - 3, arrowY + 8);
  
  // Label rotation
  fill(0, 100, 0);
  textAlign(CENTER, CENTER);
  textSize(14);
  text("90°", centerX + 40, centerY - 25);
  
  noLoop();
}
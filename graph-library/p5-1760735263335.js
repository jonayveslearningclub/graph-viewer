function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  textSize(18);
  fill(0);
  text("Triangle ABC is reflected across the y-axis to form triangle A'B'C'.", 20, 25);
  text("What are the coordinates of A', B', and C'?", 20, 50);
  
  // Set up coordinate system
  let centerX = width / 2;
  let centerY = height / 2 + 20;
  let scale = 18;
  
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
  
  // Original triangle ABC
  fill(100, 150, 255);
  stroke(0);
  strokeWeight(2);
  let A = {x: centerX + 2 * scale, y: centerY - 3 * scale};
  let B = {x: centerX + 5 * scale, y: centerY - 1 * scale};
  let C = {x: centerX + 3 * scale, y: centerY - 6 * scale};
  
  triangle(A.x, A.y, B.x, B.y, C.x, C.y);
  
  // Label original triangle vertices
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(16);
  text("A", A.x + 12, A.y - 8);
  text("B", B.x + 12, B.y);
  text("C", C.x - 12, C.y);
  
  // Draw reflected triangle (dashed outline only)
  stroke(255, 100, 100);
  strokeWeight(2);
  drawingContext.setLineDash([5, 5]);
  fill(255, 150, 150, 100);
  
  let Aprime = {x: centerX - 2 * scale, y: centerY - 3 * scale};
  let Bprime = {x: centerX - 5 * scale, y: centerY - 1 * scale};
  let Cprime = {x: centerX - 3 * scale, y: centerY - 6 * scale};
  
  triangle(Aprime.x, Aprime.y, Bprime.x, Bprime.y, Cprime.x, Cprime.y);
  
  drawingContext.setLineDash([]);
  
  // Label reflected triangle vertices
  fill(200, 0, 0);
  textAlign(CENTER, CENTER);
  text("A'", Aprime.x - 12, Aprime.y - 8);
  text("B'", Bprime.x - 12, Bprime.y);
  text("C'", Cprime.x + 12, Cprime.y);
  
  noLoop();
}
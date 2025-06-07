function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Display the question
  fill(0);
  textSize(16);
  text("Triangle DEF has vertices D(3, 7), E(9, 4), and F(6, 1). Reflect triangle DEF across the y-axis.", 20, 30);
  
  // Set up coordinate system
  let centerX = width / 2;
  let centerY = height / 2;
  let scale = 18;
  
  // Draw grid lines
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
  line(centerX - 10 * scale, centerY, centerX + 10 * scale, centerY); // x-axis
  line(centerX, centerY - 10 * scale, centerX, centerY + 10 * scale); // y-axis
  
  // Label axes
  fill(0);
  textSize(12);
  textAlign(CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i != 0) {
      text(i, centerX + i * scale, centerY + 15); // x-axis labels
      text(i, centerX - 15, centerY - i * scale + 5); // y-axis labels
    }
  }
  
  // Original triangle DEF coordinates
  let D = {x: centerX + 3 * scale, y: centerY - 7 * scale};
  let E = {x: centerX + 9 * scale, y: centerY - 4 * scale};
  let F = {x: centerX + 6 * scale, y: centerY - 1 * scale};
  
  // Draw original triangle
  stroke(255, 0, 0);
  strokeWeight(2);
  fill(255, 200, 200);
  triangle(D.x, D.y, E.x, E.y, F.x, F.y);
  
  // Plot original vertices
  fill(255, 0, 0);
  ellipse(D.x, D.y, 6, 6);
  ellipse(E.x, E.y, 6, 6);
  ellipse(F.x, F.y, 6, 6);
  
  // Label original vertices
  fill(0);
  textAlign(LEFT);
  text("D(3, 7)", D.x + 8, D.y - 5);
  text("E(9, 4)", E.x + 8, E.y - 5);
  text("F(6, 1)", F.x + 8, F.y + 15);
  
  noLoop();
}
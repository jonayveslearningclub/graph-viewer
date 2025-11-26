function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(20);
  text("Rectangle PQRS has vertices P(-4, 3), Q(5, 3), R(5, -1), and S(-4, -1).", 20, 30);
  text("a) Plot all four vertices and draw the rectangle", 20, 60);
  text("b) Find the perimeter of rectangle PQRS", 20, 90);
  text("c) Find the area of rectangle PQRS", 20, 120);
  text("d) What are the coordinates of the center of the rectangle?", 20, 150);
  
  // Set up coordinate system
  let centerX = width / 2;
  let centerY = height / 2 + 50;
  let scale = 22;
  
  // Draw grid
  stroke(220);
  strokeWeight(1);
  for (let i = -10; i <= 10; i++) {
    line(centerX + i * scale, centerY - 10 * scale, centerX + i * scale, centerY + 10 * scale);
    line(centerX - 10 * scale, centerY + i * scale, centerX + 10 * scale, centerY + i * scale);
  }
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(centerX - 10 * scale, centerY, centerX + 10 * scale, centerY); // x-axis
  line(centerX, centerY - 10 * scale, centerX, centerY + 10 * scale); // y-axis
  
  // Label axes
  fill(0);
  textSize(14);
  textAlign(CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, centerX + i * scale, centerY + 20);
      text(i, centerX - 15, centerY - i * scale + 5);
    }
  }
  text("0", centerX - 10, centerY + 15);
  
  // Plot vertices
  fill(0, 150, 0);
  noStroke();
  // P(-4, 3)
  circle(centerX - 4 * scale, centerY - 3 * scale, 8);
  // Q(5, 3)
  circle(centerX + 5 * scale, centerY - 3 * scale, 8);
  // R(5, -1)
  circle(centerX + 5 * scale, centerY + 1 * scale, 8);
  // S(-4, -1)
  circle(centerX - 4 * scale, centerY + 1 * scale, 8);
  
  // Label vertices
  fill(0);
  textAlign(LEFT);
  text("P(-4, 3)", centerX - 4 * scale - 35, centerY - 3 * scale - 5);
  text("Q(5, 3)", centerX + 5 * scale + 10, centerY - 3 * scale - 5);
  text("R(5, -1)", centerX + 5 * scale + 10, centerY + 1 * scale + 15);
  text("S(-4, -1)", centerX - 4 * scale - 35, centerY + 1 * scale + 15);
  
  // Draw rectangle
  stroke(0, 0, 200);
  strokeWeight(2);
  noFill();
  rect(centerX - 4 * scale, centerY - 3 * scale, 9 * scale, 4 * scale);
  
  noLoop();
}
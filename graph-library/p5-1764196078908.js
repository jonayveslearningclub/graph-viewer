function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(20);
  text("Find the area of triangle ABC with vertices A(2, 5), B(-3, 1), and C(4, -2)", 20, 30);
  text("a) Plot the three vertices on the coordinate plane", 20, 60);
  text("b) Calculate the area using the coordinate formula", 20, 90);
  text("c) What type of triangle is this based on its side lengths?", 20, 120);
  
  // Set up coordinate system
  let centerX = width / 2;
  let centerY = height / 2 + 50;
  let scale = 20;
  
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
  fill(255, 0, 0);
  noStroke();
  // A(2, 5)
  circle(centerX + 2 * scale, centerY - 5 * scale, 8);
  // B(-3, 1)
  circle(centerX - 3 * scale, centerY - 1 * scale, 8);
  // C(4, -2)
  circle(centerX + 4 * scale, centerY + 2 * scale, 8);
  
  // Label vertices
  fill(0);
  textAlign(LEFT);
  text("A(2, 5)", centerX + 2 * scale + 10, centerY - 5 * scale - 5);
  text("B(-3, 1)", centerX - 3 * scale - 25, centerY - 1 * scale - 5);
  text("C(4, -2)", centerX + 4 * scale + 10, centerY + 2 * scale + 15);
  
  // Draw triangle
  stroke(0, 0, 255);
  strokeWeight(2);
  noFill();
  beginShape();
  vertex(centerX + 2 * scale, centerY - 5 * scale);
  vertex(centerX - 3 * scale, centerY - 1 * scale);
  vertex(centerX + 4 * scale, centerY + 2 * scale);
  vertex(centerX + 2 * scale, centerY - 5 * scale);
  endShape();
  
  noLoop();
}
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("2. Triangle ABC has vertices at A(1, 6), B(-2, 3), and C(4, 1).", 20, 30);
  text("What are the coordinates of triangle A'B'C' after reflecting across the y-axis?", 20, 50);
  
  // Set up coordinate system
  translate(width/2, height/2);
  
  // Draw grid
  stroke(220);
  strokeWeight(1);
  for (let i = -10; i <= 10; i++) {
    line(i * 30, -300, i * 30, 300);
    line(-400, i * 30, 400, i * 30);
  }
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(-400, 0, 400, 0); // x-axis
  line(0, -300, 0, 300); // y-axis
  
  // Label axes
  fill(0);
  textSize(12);
  textAlign(CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, i * 30, 20);
      text(i, -15, -i * 30 + 5);
    }
  }
  text("0", -10, 15);
  
  // Draw original triangle ABC
  stroke(0, 0, 255);
  strokeWeight(2);
  fill(100, 150, 255, 100);
  triangle(1 * 30, -6 * 30, -2 * 30, -3 * 30, 4 * 30, -1 * 30);
  
  // Plot and label vertices
  fill(0, 0, 255);
  noStroke();
  ellipse(1 * 30, -6 * 30, 6, 6);
  ellipse(-2 * 30, -3 * 30, 6, 6);
  ellipse(4 * 30, -1 * 30, 6, 6);
  
  fill(0);
  textAlign(LEFT);
  text("A(1, 6)", 1 * 30 + 8, -6 * 30 - 5);
  text("B(-2, 3)", -2 * 30 - 35, -3 * 30 - 5);
  text("C(4, 1)", 4 * 30 + 8, -1 * 30 - 5);
  
  noLoop();
}
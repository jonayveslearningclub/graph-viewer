function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  textSize(16);
  fill(0);
  text("Triangle ABC has vertices A(2, 5), B(-3, 1), and C(4, -2).", 20, 30);
  text("Find the coordinates of triangle A'B'C' after reflecting across the y-axis.", 20, 50);
  
  // Draw coordinate plane
  translate(400, 300);
  
  // Grid lines
  stroke(200);
  strokeWeight(1);
  for (let i = -10; i <= 10; i++) {
    line(i * 20, -200, i * 20, 200);
    line(-200, i * 20, 200, i * 20);
  }
  
  // Axes
  stroke(0);
  strokeWeight(2);
  line(-200, 0, 200, 0);
  line(0, -200, 0, 200);
  
  // Axis labels
  textAlign(CENTER, CENTER);
  textSize(12);
  fill(0);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, i * 20, 15);
      text(i, -15, -i * 20);
    }
  }
  text("0", -15, 15);
  
  // Plot original triangle ABC
  stroke(255, 0, 0);
  strokeWeight(2);
  fill(255, 0, 0);
  
  // A(2, 5)
  ellipse(2 * 20, -5 * 20, 8, 8);
  text("A(2, 5)", 2 * 20 + 20, -5 * 20 - 15);
  
  // B(-3, 1)
  ellipse(-3 * 20, -1 * 20, 8, 8);
  text("B(-3, 1)", -3 * 20 - 25, -1 * 20 - 15);
  
  // C(4, -2)
  ellipse(4 * 20, -(-2) * 20, 8, 8);
  text("C(4, -2)", 4 * 20 + 20, -(-2) * 20 + 15);
  
  // Draw triangle
  noFill();
  triangle(2 * 20, -5 * 20, -3 * 20, -1 * 20, 4 * 20, 2 * 20);
  
  noLoop();
}
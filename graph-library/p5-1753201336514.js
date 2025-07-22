function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  textSize(16);
  fill(0);
  text("Point R is located at (5, -3).", 20, 30);
  text("What are the coordinates of R' after a translation 7 units left and 4 units up?", 20, 50);
  
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
  
  // Plot original point R(5, -3)
  stroke(255, 0, 0);
  strokeWeight(3);
  fill(255, 0, 0);
  ellipse(5 * 20, -(-3) * 20, 12, 12);
  text("R(5, -3)", 5 * 20 + 30, -(-3) * 20 + 20);
  
  // Draw arrow showing translation
  stroke(0, 150, 0);
  strokeWeight(3);
  drawArrow(5 * 20, 3 * 20, (5-7) * 20, (3+4) * 20);
  
  fill(0, 150, 0);
  text("Translation:", 80, -150);
  text("7 units left, 4 units up", 80, -130);
  
  noLoop();
}

function drawArrow(x1, y1, x2, y2) {
  line(x1, y1, x2, y2);
  push();
  translate(x2, y2);
  let angle = atan2(y2 - y1, x2 - x1);
  rotate(angle);
  line(0, 0, -10, -3);
  line(0, 0, -10, 3);
  pop();
}
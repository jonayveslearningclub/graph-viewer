function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Question text
  fill(0);
  textSize(16);
  text("Graph the line with slope m = 2/3 that passes through point P(4, -2).", 20, 30);
  
  // Set up coordinate plane
  translate(width/2, height/2);
  
  // Draw grid lines
  stroke(220);
  for (let i = -10; i <= 10; i++) {
    line(i * 25, -250, i * 25, 250);
    line(-250, i * 25, 250, i * 25);
  }
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(-250, 0, 250, 0); // x-axis
  line(0, -250, 0, 250); // y-axis
  
  // Label axes
  strokeWeight(1);
  textAlign(CENTER, CENTER);
  textSize(12);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, i * 25, 15);
      text(-i, -15, i * 25);
    }
  }
  text("0", -15, 15);
  
  // Plot given point
  let P = [4 * 25, 2 * 25];
  fill(255, 0, 0);
  noStroke();
  circle(P[0], P[1], 8);
  
  fill(0);
  textAlign(LEFT, BOTTOM);
  text("P(4, -2)", P[0] + 5, P[1] - 5);
  
  // Show slope notation
  textAlign(LEFT, TOP);
  text("m = 2/3", -240, -230);
  
  noLoop();
}
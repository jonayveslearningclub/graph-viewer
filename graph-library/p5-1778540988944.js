function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("2. Graph the line y = -2x + 6 and find where it crosses", 20, 30);
  text("   the x-axis and y-axis.", 20, 50);
  
  // Set up coordinate system
  translate(400, 300);
  
  // Draw grid
  stroke(220);
  strokeWeight(1);
  for (let i = -10; i <= 10; i++) {
    line(i * 25, -250, i * 25, 250);
    line(-250, i * 25, 250, i * 25);
  }
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(-250, 0, 250, 0);
  line(0, -250, 0, 250);
  
  // Label axes
  fill(0);
  textSize(11);
  textAlign(CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, i * 25, 15);
      text(-i, -8, i * 25 + 4);
    }
  }
  text("0", -8, 15);
  
  // Draw the line y = -2x + 6
  stroke(255, 0, 0);
  strokeWeight(3);
  
  // Calculate points for the line
  let x1 = -10;
  let y1 = -2 * x1 + 6;
  let x2 = 10;
  let y2 = -2 * x2 + 6;
  
  line(x1 * 25, -y1 * 25, x2 * 25, -y2 * 25);
  
  // Mark y-intercept (0, 6)
  fill(0, 0, 255);
  noStroke();
  ellipse(0, -6 * 25, 8, 8);
  
  // Mark x-intercept (3, 0)
  ellipse(3 * 25, 0, 8, 8);
  
  // Label intercepts
  fill(0);
  textSize(12);
  text("y-intercept", -30, -6 * 25 - 15);
  text("(0, 6)", -15, -6 * 25 + 20);
  text("x-intercept", 3 * 25 + 30, -15);
  text("(3, 0)", 3 * 25, 20);
  
  noLoop();
}
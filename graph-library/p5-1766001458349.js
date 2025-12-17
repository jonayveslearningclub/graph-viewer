function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(16);
  text("Graph the linear equation: y = 3x - 4", 20, 30);
  
  // Draw coordinate plane
  stroke(200);
  strokeWeight(1);
  
  // Grid lines
  for (let i = 0; i <= 20; i++) {
    line(80 + i * 30, 80, 80 + i * 30, 500);
    line(80, 80 + i * 20, 680, 80 + i * 20);
  }
  
  // Main axes
  stroke(0);
  strokeWeight(2);
  line(80, 280, 680, 280); // x-axis
  line(380, 80, 380, 500); // y-axis
  
  // Axis labels
  fill(0);
  textSize(12);
  textAlign(CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, 380 + i * 30, 295); // x-axis labels
      text(i, 365, 280 - i * 20); // y-axis labels
    }
  }
  text("0", 365, 295);
  
  // Draw the line y = 3x - 4
  stroke(0, 0, 255);
  strokeWeight(3);
  
  // Calculate points for the line within visible range
  let x1 = -2; // when x = -2, y = 3(-2) - 4 = -10
  let y1 = -10;
  let x2 = 5; // when x = 5, y = 3(5) - 4 = 11
  let y2 = 11;
  
  line(380 + x1 * 30, 280 - y1 * 20, 380 + x2 * 30, 280 - y2 * 20);
  
  // Mark key points
  fill(255, 0, 0);
  noStroke();
  circle(380 + 0 * 30, 280 - (-4) * 20, 6); // y-intercept (0, -4)
  circle(380 + 1 * 30, 280 - (-1) * 20, 6); // point (1, -1)
  
  // Label key points
  fill(0);
  textAlign(LEFT);
  text("(0, -4)", 380 + 5, 280 - (-4) * 20 + 5);
  text("(1, -1)", 380 + 1 * 30 + 5, 280 - (-1) * 20 + 5);
  
  noLoop();
}
function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(16);
  text("Find the slope of the line passing through points A(2, 5) and B(8, 11)", 20, 30);
  
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
  
  // Plot points
  fill(255, 0, 0);
  noStroke();
  circle(380 + 2 * 30, 280 - 5 * 20, 8); // Point A(2, 5)
  circle(380 + 8 * 30, 280 - 11 * 20, 8); // Point B(8, 11)
  
  // Label points
  fill(0);
  textAlign(LEFT);
  text("A(2, 5)", 380 + 2 * 30 + 10, 280 - 5 * 20 + 5);
  text("B(8, 11)", 380 + 8 * 30 + 10, 280 - 11 * 20 + 5);
  
  noLoop();
}
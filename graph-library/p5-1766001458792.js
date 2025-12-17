function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(16);
  text("Find the x-intercept and y-intercept of the line: 2x + 5y = 20", 20, 30);
  
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
  
  // Draw the line 2x + 5y = 20
  stroke(0, 150, 0);
  strokeWeight(3);
  
  // x-intercept: when y = 0, 2x = 20, so x = 10
  // y-intercept: when x = 0, 5y = 20, so y = 4
  let xIntercept = 10;
  let yIntercept = 4;
  
  line(380 + xIntercept * 30, 280, 380, 280 - yIntercept * 20);
  
  // Mark intercepts
  fill(255, 0, 0);
  noStroke();
  circle(380 + xIntercept * 30, 280, 8); // x-intercept (10, 0)
  circle(380, 280 - yIntercept * 20, 8); // y-intercept (0, 4)
  
  // Label intercepts
  fill(0);
  textAlign(LEFT);
  text("x-intercept", 380 + xIntercept * 30 - 20, 300);
  text("y-intercept", 385, 280 - yIntercept * 20 + 5);
  
  noLoop();
}
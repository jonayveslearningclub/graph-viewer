function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Draw coordinate plane
  stroke(200);
  strokeWeight(1);
  
  // Grid lines
  for (let i = -10; i <= 10; i++) {
    let x = map(i, -10, 10, 80, 720);
    let y = map(i, -10, 10, 520, 80);
    line(x, 80, x, 520); // vertical lines
    line(80, y, 720, y); // horizontal lines
  }
  
  // Main axes
  stroke(0);
  strokeWeight(2);
  line(80, 300, 720, 300); // x-axis
  line(400, 80, 400, 520); // y-axis
  
  // Axis labels
  fill(0);
  textSize(12);
  textAlign(CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      let x = map(i, -10, 10, 80, 720);
      let y = map(i, -10, 10, 520, 80);
      text(i, x, 315); // x-axis labels
      text(i, 385, y + 5); // y-axis labels
    }
  }
  text("0", 385, 315);
  
  // Question
  textSize(16);
  textAlign(LEFT);
  fill(0);
  text("Solve and graph: -3x + 7 ≥ -8", 50, 40);
  
  // Draw number line at y = -5
  stroke(0);
  strokeWeight(3);
  let numberLineY = map(-5, -10, 10, 520, 80);
  line(80, numberLineY, 720, numberLineY);
  
  // Mark important points on number line
  strokeWeight(1);
  for (let i = -10; i <= 10; i++) {
    let x = map(i, -10, 10, 80, 720);
    line(x, numberLineY - 5, x, numberLineY + 5);
  }
  
  // Show the solution region with a filled circle at x = 5
  fill(0, 0, 255);
  noStroke();
  let solutionX = map(5, -10, 10, 80, 720);
  circle(solutionX, numberLineY, 8);
  
  // Arrow showing x ≤ 5
  stroke(0, 0, 255);
  strokeWeight(3);
  line(solutionX, numberLineY, 80, numberLineY);
  
  // Label
  fill(0, 0, 255);
  textSize(14);
  text("x ≤ 5", solutionX + 10, numberLineY - 15);
  
  noLoop();
}
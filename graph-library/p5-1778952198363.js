function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Title
  fill(0);
  textSize(16);
  text("Find the equation of the line that passes through point (3, -2) with slope = 4", 20, 30);
  
  // Draw coordinate grid
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
      text(i, x, 315); // x-axis labels
    }
  }
  
  textAlign(RIGHT);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      let y = map(i, -10, 10, 520, 80);
      text(i, 390, y + 4); // y-axis labels
    }
  }
  
  // Origin
  textAlign(CENTER);
  text("0", 390, 315);
  
  // Plot the given point
  fill(255, 0, 0);
  noStroke();
  let pointX = map(3, -10, 10, 80, 720);
  let pointY = map(-2, -10, 10, 520, 80);
  ellipse(pointX, pointY, 8, 8);
  
  // Label the point
  fill(0);
  textAlign(LEFT);
  text("(3, -2)", pointX + 10, pointY - 5);
  
  // Show slope information
  textAlign(LEFT);
  text("slope = 4", 50, 550);
  
  noLoop();
}
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Title
  fill(0);
  textSize(16);
  text("Find the equation of the line passing through points (-1, 4) and (2, -5)", 20, 30);
  
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
  
  // Plot first point
  fill(255, 0, 0);
  noStroke();
  let point1X = map(-1, -10, 10, 80, 720);
  let point1Y = map(4, -10, 10, 520, 80);
  ellipse(point1X, point1Y, 8, 8);
  
  // Plot second point
  let point2X = map(2, -10, 10, 80, 720);
  let point2Y = map(-5, -10, 10, 520, 80);
  ellipse(point2X, point2Y, 8, 8);
  
  // Label the points
  fill(0);
  textAlign(LEFT);
  text("(-1, 4)", point1X + 10, point1Y - 5);
  text("(2, -5)", point2X + 10, point2Y + 15);
  
  noLoop();
}
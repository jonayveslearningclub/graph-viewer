function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  textSize(16);
  fill(0);
  text("Graph the line y = 3x - 4 and find where it crosses the y-axis.", 20, 30);
  
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
  line(400, 80, 400, 520); // y-axis
  line(80, 300, 720, 300); // x-axis
  
  // Axis labels
  textSize(12);
  fill(0);
  textAlign(CENTER, CENTER);
  
  // X-axis labels
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      let x = map(i, -10, 10, 80, 720);
      text(i, x, 315);
    }
  }
  
  // Y-axis labels
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      let y = map(i, -10, 10, 520, 80);
      text(i, 385, y);
    }
  }
  
  // Origin
  text("0", 385, 315);
  
  // Draw line y = 3x - 4
  stroke(0, 0, 255);
  strokeWeight(3);
  
  let x1 = -10;
  let y1 = 3 * x1 - 4;
  let x2 = 10;
  let y2 = 3 * x2 - 4;
  
  let px1 = map(x1, -10, 10, 80, 720);
  let py1 = map(y1, -10, 10, 520, 80);
  let px2 = map(x2, -10, 10, 80, 720);
  let py2 = map(y2, -10, 10, 520, 80);
  
  line(px1, py1, px2, py2);
  
  // Mark y-intercept
  let yintx = map(0, -10, 10, 80, 720);
  let yinty = map(-4, -10, 10, 520, 80);
  fill(255, 0, 0);
  noStroke();
  circle(yintx, yinty, 10);
  
  // Label equation
  fill(0, 0, 255);
  textAlign(LEFT, CENTER);
  textSize(14);
  text("y = 3x - 4", 500, 150);
  
  noLoop();
}
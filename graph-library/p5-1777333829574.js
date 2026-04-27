function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(16);
  text("Graph the line y = -2x + 6 and find where it crosses the y-axis.", 20, 30);
  
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
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      let x = map(i, -10, 10, 80, 720);
      let y = map(i, -10, 10, 520, 80);
      text(i, x - 5, 315); // x-axis labels
      text(i, 385, y + 5); // y-axis labels
    }
  }
  text("0", 385, 315);
  
  // Draw line y = -2x + 6
  stroke(255, 0, 0);
  strokeWeight(3);
  
  // Calculate points for the line within visible range
  let x1 = -10;
  let y1 = -2 * x1 + 6; // y = 26 (off screen)
  let x2 = 10;
  let y2 = -2 * x2 + 6; // y = -14 (off screen)
  
  // Use points that are visible
  x1 = -2;
  y1 = -2 * x1 + 6; // y = 10
  x2 = 8;
  y2 = -2 * x2 + 6; // y = -10
  
  let screenX1 = map(x1, -10, 10, 80, 720);
  let screenY1 = map(y1, -10, 10, 520, 80);
  let screenX2 = map(x2, -10, 10, 80, 720);
  let screenY2 = map(y2, -10, 10, 520, 80);
  
  line(screenX1, screenY1, screenX2, screenY2);
  
  // Mark y-intercept
  fill(0, 255, 0);
  stroke(0);
  strokeWeight(1);
  let yIntX = map(0, -10, 10, 80, 720);
  let yIntY = map(6, -10, 10, 520, 80);
  circle(yIntX, yIntY, 10);
  
  fill(0);
  text("y-intercept", yIntX + 15, yIntY - 10);
  
  noLoop();
}
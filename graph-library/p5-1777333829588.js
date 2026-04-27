function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(16);
  text("Reflect triangle DEF across the x-axis. D(-4, 2), E(-1, 5), F(-6, 3)", 20, 30);
  
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
  
  // Original triangle DEF
  stroke(0, 0, 255);
  strokeWeight(2);
  fill(100, 100, 255, 100);
  
  // D(-4, 2)
  let dx = map(-4, -10, 10, 80, 720);
  let dy = map(2, -10, 10, 520, 80);
  // E(-1, 5)
  let ex = map(-1, -10, 10, 80, 720);
  let ey = map(5, -10, 10, 520, 80);
  // F(-6, 3)
  let fx = map(-6, -10, 10, 80, 720);
  let fy = map(3, -10, 10, 520, 80);
  
  triangle(dx, dy, ex, ey, fx, fy);
  
  // Label original points
  fill(0);
  noStroke();
  text("D(-4, 2)", dx - 30, dy - 10);
  text("E(-1, 5)", ex + 10, ey - 10);
  text("F(-6, 3)", fx - 30, fy - 10);
  
  // Mark original vertices
  fill(0, 0, 255);
  stroke(0);
  strokeWeight(1);
  circle(dx, dy, 6);
  circle(ex, ey, 6);
  circle(fx, fy, 6);
  
  noLoop();
}
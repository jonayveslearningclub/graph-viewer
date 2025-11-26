function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Title
  fill(0);
  textSize(16);
  text("Find the area of triangle DEF with vertices D(-1, 5), E(3, -4), and F(-6, 2).", 20, 30);
  
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
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      let x = map(i, -10, 10, 80, 720);
      let y = map(i, -10, 10, 520, 80);
      text(i, x - 5, 315); // x-axis labels
      text(i, 385, y + 5); // y-axis labels
    }
  }
  text("0", 385, 315);
  
  // Plot points
  fill(0, 0, 255);
  noStroke();
  
  // D(-1, 5)
  let dx = map(-1, -10, 10, 80, 720);
  let dy = map(5, -10, 10, 520, 80);
  circle(dx, dy, 8);
  fill(0);
  text("D(-1, 5)", dx - 50, dy - 5);
  
  // E(3, -4)
  fill(0, 0, 255);
  let ex = map(3, -10, 10, 80, 720);
  let ey = map(-4, -10, 10, 520, 80);
  circle(ex, ey, 8);
  fill(0);
  text("E(3, -4)", ex + 10, ey + 15);
  
  // F(-6, 2)
  fill(0, 0, 255);
  let fx = map(-6, -10, 10, 80, 720);
  let fy = map(2, -10, 10, 520, 80);
  circle(fx, fy, 8);
  fill(0);
  text("F(-6, 2)", fx - 50, fy + 15);
  
  // Draw triangle
  stroke(0);
  strokeWeight(2);
  noFill();
  triangle(dx, dy, ex, ey, fx, fy);
  
  noLoop();
}
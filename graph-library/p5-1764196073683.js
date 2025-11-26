function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Title
  fill(0);
  textSize(16);
  text("Find the area of triangle ABC with vertices A(2, 6), B(-3, 1), and C(4, -2).", 20, 30);
  
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
  fill(255, 0, 0);
  noStroke();
  
  // A(2, 6)
  let ax = map(2, -10, 10, 80, 720);
  let ay = map(6, -10, 10, 520, 80);
  circle(ax, ay, 8);
  fill(0);
  text("A(2, 6)", ax + 10, ay - 5);
  
  // B(-3, 1)
  fill(255, 0, 0);
  let bx = map(-3, -10, 10, 80, 720);
  let by = map(1, -10, 10, 520, 80);
  circle(bx, by, 8);
  fill(0);
  text("B(-3, 1)", bx - 50, by - 5);
  
  // C(4, -2)
  fill(255, 0, 0);
  let cx = map(4, -10, 10, 80, 720);
  let cy = map(-2, -10, 10, 520, 80);
  circle(cx, cy, 8);
  fill(0);
  text("C(4, -2)", cx + 10, cy + 15);
  
  // Draw triangle
  stroke(0);
  strokeWeight(2);
  noFill();
  triangle(ax, ay, bx, by, cx, cy);
  
  noLoop();
}
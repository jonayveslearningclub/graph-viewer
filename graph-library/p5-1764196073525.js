function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Title
  fill(0);
  textSize(16);
  text("Find the area of triangle PQR with vertices P(5, 3), Q(-2, -5), and R(1, 7).", 20, 30);
  
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
  fill(0, 150, 0);
  noStroke();
  
  // P(5, 3)
  let px = map(5, -10, 10, 80, 720);
  let py = map(3, -10, 10, 520, 80);
  circle(px, py, 8);
  fill(0);
  text("P(5, 3)", px + 10, py - 5);
  
  // Q(-2, -5)
  fill(0, 150, 0);
  let qx = map(-2, -10, 10, 80, 720);
  let qy = map(-5, -10, 10, 520, 80);
  circle(qx, qy, 8);
  fill(0);
  text("Q(-2, -5)", qx - 60, qy + 15);
  
  // R(1, 7)
  fill(0, 150, 0);
  let rx = map(1, -10, 10, 80, 720);
  let ry = map(7, -10, 10, 520, 80);
  circle(rx, ry, 8);
  fill(0);
  text("R(1, 7)", rx + 10, ry - 5);
  
  // Draw triangle
  stroke(0);
  strokeWeight(2);
  noFill();
  triangle(px, py, qx, qy, rx, ry);
  
  noLoop();
}
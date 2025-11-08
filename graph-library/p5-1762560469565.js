function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  textSize(16);
  fill(0);
  text("Find the area of triangle PQR with vertices P(2, 5), Q(7, 5), and R(4, 1).", 20, 30);
  
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
  
  // Plot triangle vertices
  let px = map(2, -10, 10, 80, 720);
  let py = map(5, -10, 10, 520, 80);
  let qx = map(7, -10, 10, 80, 720);
  let qy = map(5, -10, 10, 520, 80);
  let rx = map(4, -10, 10, 80, 720);
  let ry = map(1, -10, 10, 520, 80);
  
  // Draw triangle
  stroke(255, 0, 0);
  strokeWeight(3);
  noFill();
  triangle(px, py, qx, qy, rx, ry);
  
  // Plot points
  fill(255, 0, 0);
  noStroke();
  circle(px, py, 8);
  circle(qx, qy, 8);
  circle(rx, ry, 8);
  
  // Label points
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(14);
  text("P(2, 5)", px - 20, py - 15);
  text("Q(7, 5)", qx + 20, qy - 15);
  text("R(4, 1)", rx, ry + 20);
  
  noLoop();
}
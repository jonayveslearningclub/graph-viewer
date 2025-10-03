function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("Rectangle PQRS has dimensions 3 units by 4 units with P at (-1, 1).", 20, 30);
  text("Create rectangle WXYZ that is rectangle PQRS reduced by a scale factor of 1/2.", 20, 50);
  
  // Draw coordinate plane
  stroke(200);
  strokeWeight(1);
  
  // Grid lines
  for (let i = -10; i <= 10; i++) {
    let x = map(i, -10, 10, 80, 720);
    let y = map(i, -10, 10, 550, 80);
    line(x, 80, x, 550);
    line(80, y, 720, y);
  }
  
  // Axes
  stroke(0);
  strokeWeight(2);
  let centerX = map(0, -10, 10, 80, 720);
  let centerY = map(0, -10, 10, 550, 80);
  line(80, centerY, 720, centerY);
  line(centerX, 80, centerX, 550);
  
  // Axis labels
  fill(0);
  textSize(12);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      let x = map(i, -10, 10, 80, 720);
      let y = map(i, -10, 10, 550, 80);
      text(i, x - 5, centerY + 15);
      text(i, centerX - 15, y + 4);
    }
  }
  text("0", centerX - 8, centerY + 15);
  
  // Original rectangle PQRS
  stroke(0, 0, 255);
  strokeWeight(2);
  fill(0, 0, 255, 100);
  
  let px = map(-1, -10, 10, 80, 720);
  let py = map(1, -10, 10, 550, 80);
  let qx = map(2, -10, 10, 80, 720);
  let qy = map(1, -10, 10, 550, 80);
  let rx = map(2, -10, 10, 80, 720);
  let ry = map(5, -10, 10, 550, 80);
  let sx = map(-1, -10, 10, 80, 720);
  let sy = map(5, -10, 10, 550, 80);
  
  quad(px, py, qx, qy, rx, ry, sx, sy);
  
  // Label points
  fill(0, 0, 255);
  textSize(14);
  text("P(-1, 1)", px - 25, py + 15);
  text("Q(2, 1)", qx + 5, qy + 15);
  text("R(2, 5)", rx + 5, ry - 5);
  text("S(-1, 5)", sx - 25, sy - 5);
  
  noLoop();
}
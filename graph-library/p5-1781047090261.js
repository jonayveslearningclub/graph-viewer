function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Question text
  fill(0);
  textSize(18);
  text("Reflect point P(4, 6) across the y-axis to find point P'.", 20, 30);
  text("What are the coordinates of P'?", 20, 55);
  
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
  
  // Axes
  stroke(0);
  strokeWeight(3);
  line(80, 300, 720, 300); // x-axis
  line(400, 80, 400, 520); // y-axis (reflection line)
  
  // Axis labels
  fill(0);
  textSize(12);
  textAlign(CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      let x = map(i, -10, 10, 80, 720);
      let y = map(i, -10, 10, 520, 80);
      text(i, x, 315); // x-axis labels
      text(i, 385, y + 5); // y-axis labels
    }
  }
  text("0", 385, 315);
  
  // Original point P(4, 6)
  let px = map(4, -10, 10, 80, 720);
  let py = map(6, -10, 10, 520, 80);
  
  // Reflected point P'(-4, 6)
  let ppx = map(-4, -10, 10, 80, 720);
  let ppy = map(6, -10, 10, 520, 80);
  
  // Draw original point
  fill(255, 0, 0);
  stroke(0);
  strokeWeight(2);
  circle(px, py, 10);
  
  // Draw reflected point
  fill(0, 0, 255);
  circle(ppx, ppy, 10);
  
  // Label points
  fill(0);
  textAlign(CENTER);
  textSize(14);
  text("P(4, 6)", px + 25, py - 15);
  text("P'", ppx - 20, ppy - 15);
  
  // Draw dashed line showing reflection
  stroke(150);
  strokeWeight(1);
  for (let i = 0; i < 10; i++) {
    let x1 = px - i * (px - ppx) / 10;
    let y1 = py - i * (py - ppy) / 10;
    let x2 = px - (i + 0.5) * (px - ppx) / 10;
    let y2 = py - (i + 0.5) * (py - ppy) / 10;
    if (i % 2 === 0) {
      line(x1, y1, x2, y2);
    }
  }
  
  noLoop();
}
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("Triangle ABC has vertices at A(2, 3), B(4, 6), and C(6, 2).", 20, 30);
  text("Draw triangle DEF that is triangle ABC enlarged by a scale factor of 2.", 20, 50);
  
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
  
  // Original triangle ABC
  stroke(255, 0, 0);
  strokeWeight(2);
  fill(255, 0, 0, 100);
  
  let ax = map(2, -10, 10, 80, 720);
  let ay = map(3, -10, 10, 550, 80);
  let bx = map(4, -10, 10, 80, 720);
  let by = map(6, -10, 10, 550, 80);
  let cx = map(6, -10, 10, 80, 720);
  let cy = map(2, -10, 10, 550, 80);
  
  triangle(ax, ay, bx, by, cx, cy);
  
  // Label points
  fill(255, 0, 0);
  textSize(14);
  text("A(2, 3)", ax + 5, ay - 5);
  text("B(4, 6)", bx + 5, by - 5);
  text("C(6, 2)", cx + 5, cy + 15);
  
  noLoop();
}
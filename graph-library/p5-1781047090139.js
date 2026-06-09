function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Question text
  fill(0);
  textSize(18);
  text("Find the slope of the line passing through points A(2, 5) and B(7, 1).", 20, 30);
  
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
  strokeWeight(2);
  line(80, 300, 720, 300); // x-axis
  line(400, 80, 400, 520); // y-axis
  
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
  
  // Plot points
  fill(255, 0, 0);
  stroke(0);
  strokeWeight(2);
  
  // Point A(2, 5)
  let ax = map(2, -10, 10, 80, 720);
  let ay = map(5, -10, 10, 520, 80);
  circle(ax, ay, 8);
  
  // Point B(7, 1)
  let bx = map(7, -10, 10, 80, 720);
  let by = map(1, -10, 10, 520, 80);
  circle(bx, by, 8);
  
  // Label points
  fill(0);
  textAlign(CENTER);
  textSize(14);
  text("A(2, 5)", ax, ay - 15);
  text("B(7, 1)", bx, by - 15);
  
  // Draw line through points
  stroke(0, 0, 255);
  strokeWeight(2);
  line(ax, ay, bx, by);
  
  noLoop();
}
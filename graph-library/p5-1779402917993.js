function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("Find the slope of the line passing through points A(3, 7) and B(-2, -3).", 20, 30);
  
  // Draw coordinate plane
  stroke(200);
  strokeWeight(1);
  
  // Grid lines
  for (let i = -10; i <= 10; i++) {
    let x = map(i, -10, 10, 80, 720);
    let y = map(i, -10, 10, 520, 80);
    line(x, 80, x, 520);
    line(80, y, 720, y);
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
      text(i, x, 315);
    }
  }
  
  textAlign(CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      let y = map(i, -10, 10, 520, 80);
      text(i, 385, y + 5);
    }
  }
  
  // Origin
  text("0", 385, 315);
  
  // Plot points
  fill(255, 0, 0);
  noStroke();
  
  // Point A(3, 7)
  let ax = map(3, -10, 10, 80, 720);
  let ay = map(7, -10, 10, 520, 80);
  ellipse(ax, ay, 8, 8);
  
  // Point B(-2, -3)
  let bx = map(-2, -10, 10, 80, 720);
  let by = map(-3, -10, 10, 520, 80);
  ellipse(bx, by, 8, 8);
  
  // Labels for points
  fill(0);
  textSize(14);
  textAlign(LEFT);
  text("A(3, 7)", ax + 10, ay - 10);
  text("B(-2, -3)", bx + 10, by + 15);
  
  noLoop();
}
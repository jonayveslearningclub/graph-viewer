function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
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
  
  // Question
  textSize(16);
  textAlign(LEFT);
  fill(0);
  text("Graph the system of inequalities:", 50, 40);
  text("x + y < 4", 50, 60);
  text("x - y ≥ -2", 200, 60);
  
  // Draw first boundary line x + y = 4 (dashed)
  stroke(255, 0, 0);
  strokeWeight(2);
  drawingContext.setLineDash([5, 5]);
  
  let x1a = map(-10, -10, 10, 80, 720);
  let y1a = map(14, -10, 10, 520, 80);
  let x2a = map(10, -10, 10, 80, 720);
  let y2a = map(-6, -10, 10, 520, 80);
  line(x1a, y1a, x2a, y2a);
  
  // Draw second boundary line x - y = -2 (solid)
  drawingContext.setLineDash([]);
  stroke(0, 0, 255);
  
  let x1b = map(-10, -10, 10, 80, 720);
  let y1b = map(-8, -10, 10, 520, 80);
  let x2b = map(10, -10, 10, 80, 720);
  let y2b = map(12, -10, 10, 520, 80);
  line(x1b, y1b, x2b, y2b);
  
  // Labels for lines
  fill(255, 0, 0);
  textSize(14);
  text("x + y = 4", 150, 200);
  
  fill(0, 0, 255);
  text("x - y = -2", 500, 400);
  
  noLoop();
}
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
  text("Graph the inequality: y > 2x - 3", 50, 40);
  
  // Draw the boundary line y = 2x - 3 (dashed since it's not included)
  stroke(255, 0, 0);
  strokeWeight(2);
  drawingContext.setLineDash([5, 5]);
  
  let x1 = map(-10, -10, 10, 80, 720);
  let y1 = map(-23, -10, 10, 520, 80);
  let x2 = map(10, -10, 10, 80, 720);
  let y2 = map(17, -10, 10, 520, 80);
  line(x1, y1, x2, y2);
  
  // Reset line dash
  drawingContext.setLineDash([]);
  
  // Label the line
  fill(255, 0, 0);
  textSize(14);
  text("y = 2x - 3", 500, 150);
  
  noLoop();
}
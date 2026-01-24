function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  fill(0);
  textSize(16);
  text("Find the slope of the line passing through points A(2, 5) and B(8, 1)", 20, 30);
  
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
  let pointA_x = map(2, -10, 10, 80, 720);
  let pointA_y = map(5, -10, 10, 520, 80);
  let pointB_x = map(8, -10, 10, 80, 720);
  let pointB_y = map(1, -10, 10, 520, 80);
  
  ellipse(pointA_x, pointA_y, 8, 8);
  ellipse(pointB_x, pointB_y, 8, 8);
  
  // Label points
  fill(0);
  textSize(14);
  text("A(2, 5)", pointA_x + 10, pointA_y - 10);
  text("B(8, 1)", pointB_x + 10, pointB_y + 20);
  
  // Draw line through points
  stroke(0, 0, 255);
  strokeWeight(2);
  line(pointA_x, pointA_y, pointB_x, pointB_y);
  
  noLoop();
}
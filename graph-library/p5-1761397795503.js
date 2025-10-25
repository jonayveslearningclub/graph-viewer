function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("1. Divide this rectangle into 4 congruent triangles", 20, 30);
  
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
  
  // Draw rectangle ABCD
  stroke(0);
  strokeWeight(3);
  noFill();
  
  let Ax = map(-3, -10, 10, 80, 720);
  let Ay = map(2, -10, 10, 520, 80);
  let Bx = map(5, -10, 10, 80, 720);
  let By = map(2, -10, 10, 520, 80);
  let Cx = map(5, -10, 10, 80, 720);
  let Cy = map(-2, -10, 10, 520, 80);
  let Dx = map(-3, -10, 10, 80, 720);
  let Dy = map(-2, -10, 10, 520, 80);
  
  rect(Ax, Cy, Bx - Ax, Ay - Cy);
  
  // Label vertices
  fill(0);
  textSize(14);
  textAlign(CENTER);
  text("A", Ax - 15, Ay + 5);
  text("B", Bx + 15, By + 5);
  text("C", Cx + 15, Cy - 10);
  text("D", Dx - 15, Dy - 10);
  
  noLoop();
}
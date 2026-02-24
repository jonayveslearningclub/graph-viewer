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
    let x = map(i, -10, 10, 50, 750);
    let y = map(i, -10, 10, 550, 50);
    line(x, 50, x, 550);
    line(50, y, 750, y);
  }
  
  // Main axes
  stroke(0);
  strokeWeight(2);
  line(50, 300, 750, 300); // x-axis
  line(400, 50, 400, 550); // y-axis
  
  // Axis labels
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(12);
  
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      let x = map(i, -10, 10, 50, 750);
      let y = map(i, -10, 10, 550, 50);
      text(i, x, 565);
      text(i, 35, y);
    }
  }
  text("0", 385, 565);
  
  // Question text
  fill(0);
  textAlign(LEFT, TOP);
  textSize(16);
  text("Triangle GHI is shown on the coordinate plane with vertices at", 20, 20);
  text("G(-4, 3), H(-1, 5), and I(-3, 1). Apply the translation (x, y) → (x + 5, y - 2).", 20, 40);
  text("Graph the original triangle and the image G'H'I' after the translation.", 20, 60);
  
  // Original triangle GHI
  stroke(50, 200, 100);
  strokeWeight(2);
  fill(50, 200, 100, 150);
  
  let gx = map(-4, -10, 10, 50, 750);
  let gy = map(3, -10, 10, 550, 50);
  let hx = map(-1, -10, 10, 50, 750);
  let hy = map(5, -10, 10, 550, 50);
  let ix = map(-3, -10, 10, 50, 750);
  let iy = map(1, -10, 10, 550, 50);
  
  triangle(gx, gy, hx, hy, ix, iy);
  
  // Label original vertices
  fill(50, 200, 100);
  textAlign(CENTER, CENTER);
  textSize(14);
  text("G", gx - 15, gy);
  text("H", hx + 15, hy);
  text("I", ix - 15, iy - 15);
  
  noLoop();
}
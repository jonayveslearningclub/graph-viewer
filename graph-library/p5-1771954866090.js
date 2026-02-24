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
  text("Triangle DEF has vertices at D(1, -2), E(4, -1), and F(2, -4).", 20, 20);
  text("Translate the triangle 4 units left and 7 units up.", 20, 40);
  text("Draw both the original triangle and the translated triangle D'E'F'.", 20, 60);
  
  // Original triangle DEF
  stroke(255, 100, 100);
  strokeWeight(2);
  fill(255, 100, 100, 150);
  
  let dx = map(1, -10, 10, 50, 750);
  let dy = map(-2, -10, 10, 550, 50);
  let ex = map(4, -10, 10, 50, 750);
  let ey = map(-1, -10, 10, 550, 50);
  let fx = map(2, -10, 10, 50, 750);
  let fy = map(-4, -10, 10, 550, 50);
  
  triangle(dx, dy, ex, ey, fx, fy);
  
  // Label original vertices
  fill(255, 100, 100);
  textAlign(CENTER, CENTER);
  textSize(14);
  text("D", dx - 15, dy);
  text("E", ex + 15, ey);
  text("F", fx, fy + 15);
  
  noLoop();
}
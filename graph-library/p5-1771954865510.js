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
  text("Triangle ABC has vertices A(-3, 2), B(-1, 4), and C(-2, 1).", 20, 20);
  text("Draw triangle ABC and then translate it 6 units right and 3 units down.", 20, 40);
  text("What are the coordinates of the vertices of triangle A'B'C'?", 20, 60);
  
  // Original triangle ABC
  stroke(0);
  strokeWeight(2);
  fill(100, 150, 255, 150);
  
  let ax = map(-3, -10, 10, 50, 750);
  let ay = map(2, -10, 10, 550, 50);
  let bx = map(-1, -10, 10, 50, 750);
  let by = map(4, -10, 10, 550, 50);
  let cx = map(-2, -10, 10, 50, 750);
  let cy = map(1, -10, 10, 550, 50);
  
  triangle(ax, ay, bx, by, cx, cy);
  
  // Label original vertices
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(14);
  text("A", ax - 15, ay);
  text("B", bx - 15, by);
  text("C", cx + 15, cy);
  
  noLoop();
}
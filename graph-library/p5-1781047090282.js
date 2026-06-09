function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Question text
  fill(0);
  textSize(18);
  text("Triangle DEF has vertices at D(3, 4), E(8, 4), and F(6, 9).", 20, 30);
  text("What is the area of triangle DEF?", 20, 55);
  
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
  
  // Triangle vertices
  let dx = map(3, -10, 10, 80, 720);
  let dy = map(4, -10, 10, 520, 80);
  let ex = map(8, -10, 10, 80, 720);
  let ey = map(4, -10, 10, 520, 80);
  let fx = map(6, -10, 10, 80, 720);
  let fy = map(9, -10, 10, 520, 80);
  
  // Draw triangle
  stroke(0, 150, 0);
  strokeWeight(3);
  fill(0, 150, 0, 50);
  triangle(dx, dy, ex, ey, fx, fy);
  
  // Plot vertices
  fill(255, 0, 0);
  stroke(0);
  strokeWeight(2);
  circle(dx, dy, 8);
  circle(ex, ey, 8);
  circle(fx, fy, 8);
  
  // Label vertices
  fill(0);
  textAlign(CENTER);
  textSize(14);
  text("D(3, 4)", dx, dy - 15);
  text("E(8, 4)", ex, ey - 15);
  text("F(6, 9)", fx, fy + 20);
  
  noLoop();
}
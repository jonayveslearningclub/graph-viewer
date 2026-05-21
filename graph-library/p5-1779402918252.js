function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("Triangle DEF has vertices D(1, 4), E(5, 8), and F(7, 2).", 20, 30);
  text("Find the area of triangle DEF.", 20, 55);
  
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
  
  // Plot triangle vertices
  let dx = map(1, -10, 10, 80, 720);
  let dy = map(4, -10, 10, 520, 80);
  let ex = map(5, -10, 10, 80, 720);
  let ey = map(8, -10, 10, 520, 80);
  let fx = map(7, -10, 10, 80, 720);
  let fy = map(2, -10, 10, 520, 80);
  
  // Draw triangle
  stroke(0, 0, 255);
  strokeWeight(2);
  noFill();
  triangle(dx, dy, ex, ey, fx, fy);
  
  // Plot vertices
  fill(255, 0, 0);
  noStroke();
  ellipse(dx, dy, 8, 8);
  ellipse(ex, ey, 8, 8);
  ellipse(fx, fy, 8, 8);
  
  // Labels for vertices
  fill(0);
  textSize(14);
  textAlign(LEFT);
  text("D(1, 4)", dx + 10, dy);
  text("E(5, 8)", ex + 10, ey);
  text("F(7, 2)", fx + 10, fy + 15);
  
  noLoop();
}
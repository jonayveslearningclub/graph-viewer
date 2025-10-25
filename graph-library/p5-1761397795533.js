function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("2. Show how to divide this square into 4 congruent shapes", 20, 30);
  
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
  
  // Draw square PQRS
  stroke(0);
  strokeWeight(3);
  noFill();
  
  let Px = map(-2, -10, 10, 80, 720);
  let Py = map(3, -10, 10, 520, 80);
  let Qx = map(4, -10, 10, 80, 720);
  let Qy = map(3, -10, 10, 520, 80);
  let Rx = map(4, -10, 10, 80, 720);
  let Ry = map(-3, -10, 10, 520, 80);
  let Sx = map(-2, -10, 10, 80, 720);
  let Sy = map(-3, -10, 10, 520, 80);
  
  rect(Px, Ry, Qx - Px, Py - Ry);
  
  // Label vertices
  fill(0);
  textSize(14);
  textAlign(CENTER);
  text("P", Px - 15, Py + 5);
  text("Q", Qx + 15, Qy + 5);
  text("R", Rx + 15, Ry - 10);
  text("S", Sx - 15, Sy - 10);
  
  noLoop();
}
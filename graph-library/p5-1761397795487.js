function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("3. Partition this parallelogram into 4 congruent pieces", 20, 30);
  
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
  
  // Draw parallelogram WXYZ
  stroke(0);
  strokeWeight(3);
  noFill();
  
  let Wx = map(-4, -10, 10, 80, 720);
  let Wy = map(1, -10, 10, 520, 80);
  let Xx = map(2, -10, 10, 80, 720);
  let Xy = map(1, -10, 10, 520, 80);
  let Yx = map(6, -10, 10, 80, 720);
  let Yy = map(-4, -10, 10, 520, 80);
  let Zx = map(0, -10, 10, 80, 720);
  let Zy = map(-4, -10, 10, 520, 80);
  
  beginShape();
  vertex(Wx, Wy);
  vertex(Xx, Xy);
  vertex(Yx, Yy);
  vertex(Zx, Zy);
  endShape(CLOSE);
  
  // Label vertices
  fill(0);
  textSize(14);
  textAlign(CENTER);
  text("W", Wx - 15, Wy + 5);
  text("X", Xx, Xy + 20);
  text("Y", Yx + 15, Yy + 5);
  text("Z", Zx, Zy - 15);
  
  noLoop();
}
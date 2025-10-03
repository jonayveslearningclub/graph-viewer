function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("Parallelogram JKLM has vertices J(-3, -2), K(-1, -2), L(1, 2), M(-1, 2).", 20, 30);
  text("Draw parallelogram NPQT that is parallelogram JKLM enlarged by a scale factor of 3.", 20, 50);
  
  // Draw coordinate plane
  stroke(200);
  strokeWeight(1);
  
  // Grid lines
  for (let i = -10; i <= 10; i++) {
    let x = map(i, -10, 10, 80, 720);
    let y = map(i, -10, 10, 550, 80);
    line(x, 80, x, 550);
    line(80, y, 720, y);
  }
  
  // Axes
  stroke(0);
  strokeWeight(2);
  let centerX = map(0, -10, 10, 80, 720);
  let centerY = map(0, -10, 10, 550, 80);
  line(80, centerY, 720, centerY);
  line(centerX, 80, centerX, 550);
  
  // Axis labels
  fill(0);
  textSize(12);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      let x = map(i, -10, 10, 80, 720);
      let y = map(i, -10, 10, 550, 80);
      text(i, x - 5, centerY + 15);
      text(i, centerX - 15, y + 4);
    }
  }
  text("0", centerX - 8, centerY + 15);
  
  // Original parallelogram JKLM
  stroke(0, 150, 0);
  strokeWeight(2);
  fill(0, 150, 0, 100);
  
  let jx = map(-3, -10, 10, 80, 720);
  let jy = map(-2, -10, 10, 550, 80);
  let kx = map(-1, -10, 10, 80, 720);
  let ky = map(-2, -10, 10, 550, 80);
  let lx = map(1, -10, 10, 80, 720);
  let ly = map(2, -10, 10, 550, 80);
  let mx = map(-1, -10, 10, 80, 720);
  let my = map(2, -10, 10, 550, 80);
  
  quad(jx, jy, kx, ky, lx, ly, mx, my);
  
  // Label points
  fill(0, 150, 0);
  textSize(14);
  text("J(-3, -2)", jx - 35, jy + 15);
  text("K(-1, -2)", kx - 10, ky + 15);
  text("L(1, 2)", lx + 5, ly - 5);
  text("M(-1, 2)", mx - 30, my - 5);
  
  noLoop();
}
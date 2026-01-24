function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  fill(0);
  textSize(16);
  text("Triangle ABC has vertices A(-3, 4), B(5, 2), and C(1, -6).", 20, 30);
  text("Reflect triangle ABC across the y-axis to form triangle A'B'C'.", 20, 50);
  
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
  
  // Original triangle vertices
  let A_x = map(-3, -10, 10, 80, 720);
  let A_y = map(4, -10, 10, 520, 80);
  let B_x = map(5, -10, 10, 80, 720);
  let B_y = map(2, -10, 10, 520, 80);
  let C_x = map(1, -10, 10, 80, 720);
  let C_y = map(-6, -10, 10, 520, 80);
  
  // Draw original triangle
  stroke(0, 0, 255);
  strokeWeight(2);
  fill(100, 150, 255, 100);
  triangle(A_x, A_y, B_x, B_y, C_x, C_y);
  
  // Plot and label original vertices
  fill(0, 0, 255);
  noStroke();
  ellipse(A_x, A_y, 6, 6);
  ellipse(B_x, B_y, 6, 6);
  ellipse(C_x, C_y, 6, 6);
  
  fill(0);
  textSize(14);
  text("A(-3, 4)", A_x - 40, A_y - 10);
  text("B(5, 2)", B_x + 10, B_y - 10);
  text("C(1, -6)", C_x + 10, C_y + 20);
  
  noLoop();
}
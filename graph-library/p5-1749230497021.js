function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Title
  fill(0);
  textSize(16);
  text("Which of the following relations are functions?", 20, 30);
  
  // Draw coordinate grid for graph a
  drawGrid(50, 80, 300, 250);
  fill(0);
  textSize(14);
  text("a.", 30, 75);
  
  // Plot points for graph a (not a function - vertical line test fails)
  fill(0);
  let points_a = [
    [1, 3], [1, -2], [3, 4], [3, 1], [-2, 2], [-2, -1], [4, 0], [-1, -3]
  ];
  
  for (let point of points_a) {
    let px = 200 + point[0] * 20;
    let py = 205 - point[1] * 20;
    circle(px, py, 8);
  }
  
  // Draw coordinate grid for graph b  
  drawGrid(450, 80, 300, 250);
  fill(0);
  textSize(14);
  text("b.", 430, 75);
  
  // Plot points for graph b (is a function)
  let points_b = [
    [-3, 2], [-1, 4], [0, -1], [2, 3], [4, -2], [5, 1]
  ];
  
  for (let point of points_b) {
    let px = 600 + point[0] * 20;
    let py = 205 - point[1] * 20;
    circle(px, py, 8);
  }
  
  // Draw coordinate grid for graph c
  drawGrid(250, 350, 300, 200);
  fill(0);
  textSize(14);
  text("c.", 230, 345);
  
  // Plot horizontal line y = 2 (is a function)
  stroke(0);
  strokeWeight(2);
  line(270, 350 + 125 - 40, 530, 350 + 125 - 40);
  noStroke();
  
  fill(0);
  textSize(12);
  text("y = 2", 535, 350 + 125 - 35);
}

function drawGrid(x, y, w, h) {
  stroke(200);
  strokeWeight(1);
  
  // Grid lines
  for (let i = 0; i <= 10; i++) {
    line(x + i * w/10, y, x + i * w/10, y + h);
    line(x, y + i * h/10, x + w, y + i * h/10);
  }
  
  // Axes
  stroke(0);
  strokeWeight(2);
  line(x + w/2, y, x + w/2, y + h); // y-axis
  line(x, y + h/2, x + w, y + h/2); // x-axis
  
  // Axis labels
  fill(0);
  textSize(12);
  text("x", x + w - 15, y + h/2 + 15);
  text("y", x + w/2 + 5, y + 15);
  text("0", x + w/2 - 10, y + h/2 + 15);
  
  noStroke();
}
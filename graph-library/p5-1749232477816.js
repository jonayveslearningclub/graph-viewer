function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Title
  fill(0);
  textSize(16);
  text("Which of the following relations are functions?", 20, 30);
  
  // Setup grid and coordinate system for graph a
  translate(150, 350);
  
  // Draw grid for graph a
  stroke(200);
  for (let i = -8; i <= 8; i++) {
    line(i * 20, -160, i * 20, 160);
    line(-160, i * 20, 160, i * 20);
  }
  
  // Draw axes for graph a
  stroke(0);
  strokeWeight(2);
  line(-160, 0, 160, 0); // x-axis
  line(0, -160, 0, 160); // y-axis
  
  // Axis labels for graph a
  strokeWeight(1);
  textAlign(CENTER);
  textSize(12);
  for (let i = -8; i <= 8; i++) {
    if (i !== 0) {
      text(i, i * 20, 15);
      text(i, -15, -i * 20 + 5);
    }
  }
  text("0", -10, 15);
  text("x", 150, -10);
  text("y", 10, -150);
  text("a.", -140, -140);
  
  // Plot points for graph a (not a function - vertical line test fails)
  fill(0);
  let pointsA = [
    [-3, 2], [-3, -1], [-1, 4], [0, 1], [2, -2], [2, 3], [4, 0], [1, -3]
  ];
  
  for (let point of pointsA) {
    circle(point[0] * 20, -point[1] * 20, 8);
  }
  
  // Reset transformation for graph b
  resetMatrix();
  translate(550, 350);
  
  // Draw grid for graph b
  stroke(200);
  for (let i = -8; i <= 8; i++) {
    line(i * 20, -160, i * 20, 160);
    line(-160, i * 20, 160, i * 20);
  }
  
  // Draw axes for graph b
  stroke(0);
  strokeWeight(2);
  line(-160, 0, 160, 0); // x-axis
  line(0, -160, 0, 160); // y-axis
  
  // Axis labels for graph b
  strokeWeight(1);
  textAlign(CENTER);
  textSize(12);
  for (let i = -8; i <= 8; i++) {
    if (i !== 0) {
      text(i, i * 20, 15);
      text(i, -15, -i * 20 + 5);
    }
  }
  text("0", -10, 15);
  text("x", 150, -10);
  text("y", 10, -150);
  text("b.", -140, -140);
  
  // Plot points for graph b (is a function)
  fill(0);
  let pointsB = [
    [-4, 1], [-2, -1], [0, 2], [1, -2], [3, 0], [5, 3], [-1, 4]
  ];
  
  for (let point of pointsB) {
    circle(point[0] * 20, -point[1] * 20, 8);
  }
  
  noLoop();
}
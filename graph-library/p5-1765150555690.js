function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("1. What is the slope of the line passing through points A(-3, 2) and B(5, -4)?", 20, 30);
  
  // Set up coordinate system
  translate(width/2, height/2);
  
  // Draw grid
  stroke(220);
  strokeWeight(1);
  for (let i = -10; i <= 10; i++) {
    line(i * 30, -300, i * 30, 300);
    line(-400, i * 30, 400, i * 30);
  }
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(-400, 0, 400, 0); // x-axis
  line(0, -300, 0, 300); // y-axis
  
  // Label axes
  fill(0);
  textSize(12);
  textAlign(CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, i * 30, 20);
      text(i, -15, -i * 30 + 5);
    }
  }
  text("0", -10, 15);
  
  // Plot points A and B
  fill(255, 0, 0);
  noStroke();
  ellipse(-3 * 30, -2 * 30, 8, 8); // Point A(-3, 2)
  ellipse(5 * 30, 4 * 30, 8, 8);   // Point B(5, -4)
  
  // Label points
  fill(0);
  textAlign(LEFT);
  text("A(-3, 2)", -3 * 30 + 10, -2 * 30 - 5);
  text("B(5, -4)", 5 * 30 + 10, 4 * 30 - 5);
  
  noLoop();
}
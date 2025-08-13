function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  text("1. Graph the inequality: x > 3", 50, 40);
  
  // Draw number line
  stroke(0);
  strokeWeight(2);
  line(100, 300, 700, 300);
  
  // Draw tick marks and labels
  for (let i = -8; i <= 8; i++) {
    let x = 100 + (i + 8) * 37.5;
    line(x, 295, x, 305);
    fill(0);
    textAlign(CENTER);
    textSize(14);
    text(i, x, 325);
  }
  
  // Mark point at x = 3 with open circle
  let point3 = 100 + (3 + 8) * 37.5;
  fill(255);
  stroke(0);
  strokeWeight(3);
  circle(point3, 300, 12);
  
  // Draw arrow pointing right from x = 3
  stroke(255, 0, 0);
  strokeWeight(4);
  line(point3 + 8, 300, 680, 300);
  
  // Arrow head
  line(670, 295, 680, 300);
  line(670, 305, 680, 300);
  
  // Instructions
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("Show the solution on the number line above.", 100, 380);
  
  noLoop();
}
function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  text("2. Solve and graph: 2x + 5 ≤ 15", 50, 40);
  
  // Draw number line
  stroke(0);
  strokeWeight(2);
  line(100, 300, 700, 300);
  
  // Draw tick marks and labels
  for (let i = -6; i <= 10; i++) {
    let x = 100 + (i + 6) * 37.5;
    line(x, 295, x, 305);
    fill(0);
    textAlign(CENTER);
    textSize(14);
    text(i, x, 325);
  }
  
  // Mark point at x = 5 with closed circle
  let point5 = 100 + (5 + 6) * 37.5;
  fill(0, 0, 255);
  stroke(0);
  strokeWeight(3);
  circle(point5, 300, 12);
  
  // Draw arrow pointing left from x = 5
  stroke(0, 0, 255);
  strokeWeight(4);
  line(120, 300, point5 - 8, 300);
  
  // Arrow head
  line(120, 300, 130, 295);
  line(120, 300, 130, 305);
  
  // Instructions
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("First solve the inequality, then graph the solution.", 100, 380);
  
  noLoop();
}
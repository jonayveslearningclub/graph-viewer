function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  text("3. Graph the compound inequality: -2 < x ≤ 4", 50, 40);
  
  // Draw number line
  stroke(0);
  strokeWeight(2);
  line(100, 300, 700, 300);
  
  // Draw tick marks and labels
  for (let i = -7; i <= 8; i++) {
    let x = 100 + (i + 7) * 37.5;
    line(x, 295, x, 305);
    fill(0);
    textAlign(CENTER);
    textSize(14);
    text(i, x, 325);
  }
  
  // Mark point at x = -2 with open circle
  let pointNeg2 = 100 + (-2 + 7) * 37.5;
  fill(255);
  stroke(0);
  strokeWeight(3);
  circle(pointNeg2, 300, 12);
  
  // Mark point at x = 4 with closed circle
  let point4 = 100 + (4 + 7) * 37.5;
  fill(0, 150, 0);
  stroke(0);
  strokeWeight(3);
  circle(point4, 300, 12);
  
  // Draw line segment between the points
  stroke(0, 150, 0);
  strokeWeight(4);
  line(pointNeg2 + 8, 300, point4 - 8, 300);
  
  // Instructions
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("Graph all values of x that satisfy both conditions.", 100, 380);
  
  noLoop();
}
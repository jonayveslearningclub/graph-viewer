function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("3. Graph the linear equation y = 2x - 3 and identify where it crosses both axes.", 20, 30);
  
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
  
  // Draw line y = 2x - 3
  stroke(255, 0, 0);
  strokeWeight(3);
  // Calculate points on the line within our viewing window
  let x1 = -10;
  let y1 = 2 * x1 - 3; // y = -23
  let x2 = 10;
  let y2 = 2 * x2 - 3; // y = 17
  
  // Clip the line to fit our window
  if (y1 < -10) {
    y1 = -10;
    x1 = (y1 + 3) / 2; // x = -3.5, but we'll use visible portion
  }
  if (y2 > 10) {
    y2 = 10;
    x2 = (y2 + 3) / 2; // x = 6.5
  }
  
  line(-400, 23 * 30, 400, -17 * 30);
  
  // Mark key points with different approach - show some points on the line
  fill(255, 0, 0);
  noStroke();
  // Point where x = 0: y = -3
  ellipse(0, 3 * 30, 8, 8);
  // Point where x = 2: y = 1  
  ellipse(2 * 30, -1 * 30, 8, 8);
  // Point where x = 4: y = 5
  ellipse(4 * 30, -5 * 30, 8, 8);
  
  fill(0);
  textAlign(LEFT);
  text("(0, -3)", 10, 3 * 30 + 5);
  text("(2, 1)", 2 * 30 + 10, -1 * 30 - 5);
  text("(4, 5)", 4 * 30 + 10, -5 * 30 - 5);
  
  noLoop();
}
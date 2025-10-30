function setup() {
  createCanvas(800, 600);
  background(240);
}

function draw() {
  // Title
  fill(0);
  textSize(16);
  text("What is the 8th term in the pattern: 4, 9, 14, 19, 24, ...?", 50, 30);
  
  // Draw coordinate plane
  stroke(200);
  strokeWeight(1);
  
  // Grid lines
  for (let i = -10; i <= 10; i++) {
    line(40 + (i + 10) * 35, 80, 40 + (i + 10) * 35, 520);
    line(40, 80 + (10 - i) * 22, 740, 80 + (10 - i) * 22);
  }
  
  // Main axes
  stroke(0);
  strokeWeight(2);
  line(40, 300, 740, 300); // x-axis
  line(390, 80, 390, 520); // y-axis
  
  // Axis labels
  fill(0);
  textSize(12);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, 40 + (i + 10) * 35 - 5, 315);
      text(i, 375, 80 + (10 - i) * 22 + 5);
    }
  }
  text("0", 375, 315);
  
  // Plot sequence points
  fill(0, 0, 255);
  noStroke();
  let sequence = [4, 9, 14, 19, 24];
  for (let i = 0; i < sequence.length; i++) {
    let x = 40 + (i + 11) * 35;
    let y = 80 + (10 - sequence[i]) * 22;
    circle(x, y, 8);
    fill(0);
    text("(" + (i + 1) + ", " + sequence[i] + ")", x + 10, y + 15);
    fill(0, 0, 255);
  }
  
  // Question mark for 8th term
  fill(255, 0, 255);
  let x8 = 40 + (7 + 11) * 35;
  let y8 = 300;
  circle(x8, y8, 10);
  fill(0);
  text("(8, ?)", x8 + 10, y8 - 10);
  
  // Labels
  fill(0);
  textSize(14);
  text("Position (n)", 350, 550);
  text("Term Value", 10, 300);
  text("Pattern: 5n - 1", 550, 100);
  
  noLoop();
}
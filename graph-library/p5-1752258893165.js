function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  text("Match each student to their favorite color. Is this one-to-one or many-to-one?", 20, 30);
  
  // Draw students on the left
  textSize(16);
  fill(0);
  text("Students:", 50, 80);
  
  // Student list
  text("Emma", 70, 120);
  text("Jake", 70, 160);
  text("Lily", 70, 200);
  text("Max", 70, 240);
  text("Zoe", 70, 280);
  
  // Draw colors on the right
  text("Colors:", 400, 80);
  
  // Color list with colored circles
  fill(255, 0, 0);
  circle(430, 115, 15);
  fill(0);
  text("Red", 450, 120);
  
  fill(0, 0, 255);
  circle(430, 155, 15);
  fill(0);
  text("Blue", 450, 160);
  
  fill(0, 200, 0);
  circle(430, 195, 15);
  fill(0);
  text("Green", 450, 200);
  
  // Draw connecting lines (dotted to show matching exercise)
  stroke(150);
  strokeWeight(2);
  for (let i = 0; i < 5; i++) {
    let y = 115 + i * 40;
    if (i < 3) {
      drawDottedLine(150, y, 400, 115 + (i % 3) * 40);
    }
  }
  
  // Instructions
  fill(0);
  textSize(14);
  text("Draw lines to match each student to their favorite color.", 50, 340);
  text("Then determine if this shows one-to-one or many-to-one correspondence.", 50, 360);
  
  noLoop();
}

function drawDottedLine(x1, y1, x2, y2) {
  let steps = 20;
  let stepX = (x2 - x1) / steps;
  let stepY = (y2 - y1) / steps;
  
  for (let i = 0; i < steps; i += 2) {
    line(x1 + i * stepX, y1 + i * stepY, x1 + (i + 1) * stepX, y1 + (i + 1) * stepY);
  }
}
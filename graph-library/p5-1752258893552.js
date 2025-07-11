function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  text("Match each animal to its home. Is this one-to-one or many-to-one?", 20, 30);
  
  // Draw animals on the left
  textSize(16);
  fill(0);
  text("Animals:", 50, 80);
  
  // Animal list
  text("Dog", 70, 120);
  text("Cat", 70, 160);
  text("Bird", 70, 200);
  text("Fish", 70, 240);
  
  // Draw homes on the right
  text("Homes:", 400, 80);
  
  // Home list
  text("Doghouse", 420, 120);
  text("Fish Tank", 420, 160);
  text("Cat Bed", 420, 200);
  text("Bird Cage", 420, 240);
  
  // Draw connecting lines (dotted to show matching exercise)
  stroke(150);
  strokeWeight(2);
  for (let i = 0; i < 4; i++) {
    let y = 115 + i * 40;
    drawDottedLine(150, y, 400, y);
  }
  
  // Instructions
  fill(0);
  textSize(14);
  text("Draw lines to match each animal to its correct home.", 50, 300);
  text("Then determine if this shows one-to-one or many-to-one correspondence.", 50, 320);
  
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
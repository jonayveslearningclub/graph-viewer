function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  text("Match each toy to its storage box. Is this one-to-one or many-to-one?", 20, 30);
  
  // Draw toys on the left
  textSize(16);
  fill(0);
  text("Toys:", 50, 80);
  
  // Toy list
  text("Ball", 70, 120);
  text("Doll", 70, 160);
  text("Car", 70, 200);
  text("Blocks", 70, 240);
  text("Puzzle", 70, 280);
  text("Book", 70, 320);
  
  // Draw storage boxes on the right
  text("Storage Boxes:", 400, 80);
  
  // Box list
  fill(200, 150, 100);
  rect(420, 105, 30, 20);
  fill(0);
  text("Toy Box", 460, 120);
  
  fill(150, 150, 200);
  rect(420, 185, 30, 20);
  fill(0);
  text("Book Shelf", 460, 200);
  
  // Draw connecting lines (dotted to show matching exercise)
  stroke(150);
  strokeWeight(2);
  for (let i = 0; i < 6; i++) {
    let y = 115 + i * 40;
    if (i < 5) {
      drawDottedLine(150, y, 400, 115);
    } else {
      drawDottedLine(150, y, 400, 195);
    }
  }
  
  // Instructions
  fill(0);
  textSize(14);
  text("Draw lines to match each toy to where it belongs.", 50, 380);
  text("Then determine if this shows one-to-one or many-to-one correspondence.", 50, 400);
  
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
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("Reflect point P(-4, 6) across the y-axis to find point P'.", 20, 30);
  text("What are the coordinates of P'?", 20, 55);
  
  // Draw coordinate plane
  stroke(200);
  strokeWeight(1);
  
  // Grid lines
  for (let i = -10; i <= 10; i++) {
    let x = map(i, -10, 10, 80, 720);
    let y = map(i, -10, 10, 520, 80);
    line(x, 80, x, 520);
    line(80, y, 720, y);
  }
  
  // Axes
  stroke(0);
  strokeWeight(2);
  line(80, 300, 720, 300); // x-axis
  line(400, 80, 400, 520); // y-axis
  
  // Highlight y-axis (line of reflection)
  stroke(255, 0, 0);
  strokeWeight(3);
  line(400, 80, 400, 520);
  
  // Axis labels
  fill(0);
  textSize(12);
  textAlign(CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      let x = map(i, -10, 10, 80, 720);
      text(i, x, 315);
    }
  }
  
  textAlign(CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      let y = map(i, -10, 10, 520, 80);
      text(i, 385, y + 5);
    }
  }
  
  // Origin
  text("0", 385, 315);
  
  // Plot original point P(-4, 6)
  let px = map(-4, -10, 10, 80, 720);
  let py = map(6, -10, 10, 520, 80);
  
  fill(0, 0, 255);
  noStroke();
  ellipse(px, py, 10, 10);
  
  // Label for point P
  fill(0);
  textSize(14);
  textAlign(RIGHT);
  text("P(-4, 6)", px - 10, py - 10);
  
  // Add note about y-axis
  textAlign(CENTER);
  textSize(12);
  fill(255, 0, 0);
  text("y-axis", 410, 70);
  text("(line of reflection)", 410, 85);
  
  noLoop();
}
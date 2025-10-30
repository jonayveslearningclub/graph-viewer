function setup() {
  createCanvas(800, 600);
  background(240);
}

function draw() {
  // Title
  fill(0);
  textSize(16);
  text("Find the next three terms in the sequence: 7, 12, 17, 22, ...", 50, 30);
  
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
  fill(255, 0, 0);
  noStroke();
  let sequence = [7, 12, 17, 22];
  for (let i = 0; i < sequence.length; i++) {
    let x = 40 + (i + 11) * 35;
    let y = 80 + (10 - sequence[i]) * 22;
    circle(x, y, 8);
    fill(0);
    text("(" + (i + 1) + ", " + sequence[i] + ")", x + 10, y - 10);
    fill(255, 0, 0);
  }
  
  // Labels
  fill(0);
  textSize(14);
  text("Position (n)", 350, 550);
  text("Term Value", 10, 300);
  
  noLoop();
}
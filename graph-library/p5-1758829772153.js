function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Question text
  fill(0);
  textSize(16);
  text("Compare these five-digit numbers using the number line:", 20, 30);
  text("Which number is greater: 34,285 or 37,519?", 20, 55);
  
  // Draw number line
  stroke(0);
  strokeWeight(2);
  line(100, 200, 700, 200);
  
  // Major tick marks and labels
  for (let i = 0; i <= 10; i++) {
    let x = 100 + i * 60;
    line(x, 190, x, 210);
    
    // Labels for major ticks (thousands)
    fill(0);
    textAlign(CENTER);
    textSize(12);
    let value = 30000 + i * 1000;
    text(value.toLocaleString(), x, 230);
  }
  
  // Mark the two numbers
  // 34,285 position
  let pos1 = 100 + 4.285 * 60;
  fill(255, 0, 0);
  circle(pos1, 200, 12);
  fill(255, 0, 0);
  textAlign(CENTER);
  textSize(14);
  text("34,285", pos1, 180);
  
  // 37,519 position
  let pos2 = 100 + 7.519 * 60;
  fill(0, 0, 255);
  circle(pos2, 200, 12);
  fill(0, 0, 255);
  textAlign(CENTER);
  textSize(14);
  text("37,519", pos2, 180);
  
  // Arrow showing direction
  fill(0);
  textAlign(LEFT);
  textSize(14);
  text("←── smaller", 120, 280);
  text("larger ───→", 520, 280);
  
  noLoop();
}
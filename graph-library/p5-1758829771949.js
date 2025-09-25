function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Question text
  fill(0);
  textSize(16);
  text("Use the number line to compare five-digit numbers:", 20, 30);
  text("Order from least to greatest: 52,847, 48,293, 55,106", 20, 55);
  
  // Draw number line
  stroke(0);
  strokeWeight(2);
  line(80, 250, 720, 250);
  
  // Major tick marks and labels
  for (let i = 0; i <= 8; i++) {
    let x = 80 + i * 80;
    line(x, 240, x, 260);
    
    // Labels for major ticks (thousands)
    fill(0);
    textAlign(CENTER);
    textSize(12);
    let value = 48000 + i * 1000;
    text(value.toLocaleString(), x, 280);
  }
  
  // Mark the three numbers
  // 48,293 position
  let pos1 = 80 + 0.293 * 80;
  fill(255, 100, 0);
  circle(pos1, 250, 14);
  fill(255, 100, 0);
  textAlign(CENTER);
  textSize(13);
  text("48,293", pos1, 220);
  
  // 52,847 position
  let pos2 = 80 + 4.847 * 80;
  fill(0, 150, 0);
  circle(pos2, 250, 14);
  fill(0, 150, 0);
  textAlign(CENTER);
  textSize(13);
  text("52,847", pos2, 220);
  
  // 55,106 position
  let pos3 = 80 + 7.106 * 80;
  fill(150, 0, 150);
  circle(pos3, 250, 14);
  fill(150, 0, 150);
  textAlign(CENTER);
  textSize(13);
  text("55,106", pos3, 220);
  
  // Instructions
  fill(0);
  textAlign(LEFT);
  textSize(14);
  text("Write the numbers in order from left to right:", 80, 350);
  text("______, ______, ______", 80, 380);
  
  noLoop();
}
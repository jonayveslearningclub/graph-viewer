function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Question text
  fill(0);
  textSize(16);
  text("Compare five-digit numbers on the number line:", 20, 30);
  text("Which two numbers are closest together: 61,742, 63,158, 69,834?", 20, 55);
  
  // Draw number line
  stroke(0);
  strokeWeight(2);
  line(60, 300, 740, 300);
  
  // Major tick marks and labels every 1000
  for (let i = 0; i <= 10; i++) {
    let x = 60 + i * 68;
    line(x, 290, x, 310);
    
    // Labels for major ticks
    fill(0);
    textAlign(CENTER);
    textSize(11);
    let value = 60000 + i * 1000;
    text(value.toLocaleString(), x, 330);
  }
  
  // Mark the three numbers
  // 61,742 position
  let pos1 = 60 + 1.742 * 68;
  fill(255, 0, 100);
  circle(pos1, 300, 16);
  fill(255, 0, 100);
  textAlign(CENTER);
  textSize(13);
  text("61,742", pos1, 270);
  
  // 63,158 position  
  let pos2 = 60 + 3.158 * 68;
  fill(0, 100, 255);
  circle(pos2, 300, 16);
  fill(0, 100, 255);
  textAlign(CENTER);
  textSize(13);
  text("63,158", pos2, 270);
  
  // 69,834 position
  let pos3 = 60 + 9.834 * 68;
  fill(100, 200, 0);
  circle(pos3, 300, 16);
  fill(100, 200, 0);
  textAlign(CENTER);
  textSize(13);
  text("69,834", pos3, 270);
  
  // Question prompt
  fill(0);
  textAlign(LEFT);
  textSize(14);
  text("Circle the two numbers that are closest together:", 60, 400);
  
  noLoop();
}
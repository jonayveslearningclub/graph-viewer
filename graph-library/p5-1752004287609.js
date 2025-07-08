function setup() {
  createCanvas(800, 600);
  background(240);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  text("1. Round 347 to the nearest hundred, then estimate 347 × 8", 20, 30);
  
  // Create number line for rounding
  stroke(0);
  strokeWeight(2);
  line(100, 150, 700, 150);
  
  // Mark hundreds on number line
  for (let i = 0; i <= 6; i++) {
    let x = 100 + i * 100;
    line(x, 140, x, 160);
    textAlign(CENTER);
    textSize(14);
    text((i * 100).toString(), x, 180);
  }
  
  // Mark 347 on the number line
  let pos347 = 100 + 3.47 * 100;
  fill(255, 0, 0);
  circle(pos347, 150, 8);
  fill(0);
  textAlign(CENTER);
  text("347", pos347, 200);
  
  // Show the multiplication setup
  textAlign(LEFT);
  textSize(16);
  text("Step 1: Round 347 to the nearest hundred", 50, 250);
  text("Step 2: Estimate 347 × 8 using your rounded number", 50, 280);
  
  // Visual representation of 347
  fill(100, 150, 255);
  textSize(14);
  text("Hundreds: 3", 100, 350);
  text("Tens: 4", 100, 370);
  text("Ones: 7", 100, 390);
  
  // Show place value blocks
  fill(0, 100, 200);
  for (let i = 0; i < 3; i++) {
    rect(250 + i * 35, 330, 30, 30);
  }
  text("300", 250, 380);
  
  fill(0, 200, 100);
  for (let i = 0; i < 4; i++) {
    rect(400 + i * 8, 340, 6, 20);
  }
  text("40", 400, 380);
  
  fill(200, 100, 0);
  for (let i = 0; i < 7; i++) {
    circle(500 + i * 6, 350, 4);
  }
  text("7", 500, 380);
  
  noLoop();
}
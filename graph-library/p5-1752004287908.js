function setup() {
  createCanvas(800, 600);
  background(240);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  text("3. Round 1,863 to the nearest thousand, then estimate 1,863 + 2,247", 20, 30);
  
  // Create number line for thousands
  stroke(0);
  strokeWeight(2);
  line(50, 150, 750, 150);
  
  // Mark thousands on number line
  for (let i = 0; i <= 4; i++) {
    let x = 50 + i * 175;
    line(x, 140, x, 160);
    textAlign(CENTER);
    textSize(14);
    fill(0);
    text((i * 1000).toString(), x, 180);
  }
  
  // Mark 1,863 on the number line
  let pos1863 = 50 + 1.863 * 175;
  fill(255, 0, 0);
  circle(pos1863, 150, 8);
  fill(0);
  textAlign(CENTER);
  text("1,863", pos1863, 200);
  
  // Mark 2,247 on the number line
  let pos2247 = 50 + 2.247 * 175;
  fill(0, 0, 255);
  circle(pos2247, 150, 8);
  text("2,247", pos2247, 220);
  
  // Show place value breakdown
  textAlign(LEFT);
  textSize(16);
  text("1,863 breakdown:", 100, 280);
  text("Thousands: 1", 120, 300);
  text("Hundreds: 8", 120, 320);
  text("Tens: 6", 120, 340);
  text("Ones: 3", 120, 360);
  
  text("2,247 breakdown:", 400, 280);
  text("Thousands: 2", 420, 300);
  text("Hundreds: 2", 420, 320);
  text("Tens: 4", 420, 340);
  text("Ones: 7", 420, 360);
  
  // Instructions
  textSize(14);
  text("Step 1: Round 1,863 to the nearest thousand", 50, 420);
  text("Step 2: Round 2,247 to the nearest thousand", 50, 440);
  text("Step 3: Add your rounded numbers to estimate the sum", 50, 460);
  
  // Visual representation with blocks
  fill(200, 100, 100);
  rect(100, 480, 20, 80);
  text("1,000s", 90, 575);
  
  fill(100, 200, 100);
  for (let i = 0; i < 8; i++) {
    rect(150 + i * 12, 500, 10, 60);
  }
  text("100s", 170, 575);
  
  fill(100, 100, 200);
  for (let i = 0; i < 6; i++) {
    rect(300 + i * 8, 520, 6, 40);
  }
  text("10s", 315, 575);
  
  fill(200, 200, 100);
  for (let i = 0; i < 3; i++) {
    circle(380 + i * 8, 540, 6);
  }
  text("1s", 380, 575);
  
  noLoop();
}
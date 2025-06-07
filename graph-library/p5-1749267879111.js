function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  textSize(16);
  fill(0);
  text("3. Which sport has twice as many votes as soccer?", 20, 30);
  
  // Title
  textSize(14);
  text("Favorite Sports Survey", 300, 80);
  
  // Draw bars
  let barWidth = 55;
  let spacing = 110;
  let startX = 120;
  let baseY = 520;
  
  // Basketball bar (12 votes)
  fill(255, 120, 120);
  rect(startX, baseY - 240, barWidth, 240);
  fill(0);
  text("Basketball", startX - 5, baseY + 20);
  text("12", startX + 20, baseY - 250);
  
  // Soccer bar (8 votes)
  fill(120, 255, 120);
  rect(startX + spacing, baseY - 160, barWidth, 160);
  fill(0);
  text("Soccer", startX + spacing + 10, baseY + 20);
  text("8", startX + spacing + 20, baseY - 170);
  
  // Baseball bar (16 votes)
  fill(120, 120, 255);
  rect(startX + spacing * 2, baseY - 320, barWidth, 320);
  fill(0);
  text("Baseball", startX + spacing * 2 + 5, baseY + 20);
  text("16", startX + spacing * 2 + 15, baseY - 330);
  
  // Tennis bar (5 votes)
  fill(255, 255, 120);
  rect(startX + spacing * 3, baseY - 100, barWidth, 100);
  fill(0);
  text("Tennis", startX + spacing * 3 + 10, baseY + 20);
  text("5", startX + spacing * 3 + 20, baseY - 110);
  
  // Swimming bar (10 votes)
  fill(200, 150, 255);
  rect(startX + spacing * 4, baseY - 200, barWidth, 200);
  fill(0);
  text("Swimming", startX + spacing * 4, baseY + 20);
  text("10", startX + spacing * 4 + 15, baseY - 210);
  
  // Y-axis labels
  textSize(12);
  for (let i = 0; i <= 20; i += 2) {
    text(i, 80, baseY - i * 20 + 5);
    stroke(200);
    line(100, baseY - i * 20, 700, baseY - i * 20);
  }
  
  // Axes
  stroke(0);
  strokeWeight(2);
  line(100, baseY, 100, baseY - 400); // Y-axis
  line(100, baseY, 700, baseY); // X-axis
  
  // Y-axis title
  push();
  translate(50, 320);
  rotate(-PI/2);
  text("Number of Votes", 0, 0);
  pop();
  
  noLoop();
}
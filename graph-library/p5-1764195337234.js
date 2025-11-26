function setup() {
  createCanvas(800, 600);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(240);
  
  // Question text
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("Based on the bar chart below, which sport has the most votes?", 20, 30);
  
  // Chart title
  textAlign(CENTER);
  textSize(14);
  text("Favorite Sports Survey", 400, 80);
  
  // Draw bars
  let barWidth = 60;
  let startX = 150;
  let baseY = 450;
  
  // Soccer bar (height 8 units = 160 pixels)
  fill(100, 150, 255);
  rect(startX, baseY - 160, barWidth, 160);
  fill(0);
  text("Soccer", startX + barWidth/2, baseY + 20);
  text("8", startX + barWidth/2, baseY - 170);
  
  // Basketball bar (height 12 units = 240 pixels)
  fill(255, 100, 100);
  rect(startX + 100, baseY - 240, barWidth, 240);
  fill(0);
  text("Basketball", startX + 100 + barWidth/2, baseY + 20);
  text("12", startX + 100 + barWidth/2, baseY - 250);
  
  // Baseball bar (height 6 units = 120 pixels)
  fill(100, 255, 100);
  rect(startX + 200, baseY - 120, barWidth, 120);
  fill(0);
  text("Baseball", startX + 200 + barWidth/2, baseY + 20);
  text("6", startX + 200 + barWidth/2, baseY - 130);
  
  // Tennis bar (height 4 units = 80 pixels)
  fill(255, 200, 100);
  rect(startX + 300, baseY - 80, barWidth, 80);
  fill(0);
  text("Tennis", startX + 300 + barWidth/2, baseY + 20);
  text("4", startX + 300 + barWidth/2, baseY - 90);
  
  // Football bar (height 10 units = 200 pixels)
  fill(150, 100, 255);
  rect(startX + 400, baseY - 200, barWidth, 200);
  fill(0);
  text("Football", startX + 400 + barWidth/2, baseY + 20);
  text("10", startX + 400 + barWidth/2, baseY - 210);
  
  // Y-axis
  stroke(0);
  strokeWeight(2);
  line(120, 250, 120, 450);
  
  // Y-axis labels
  textAlign(RIGHT, CENTER);
  textSize(12);
  for(let i = 0; i <= 12; i += 2) {
    text(i, 115, baseY - i * 20);
    stroke(200);
    strokeWeight(1);
    if(i > 0) {
      line(120, baseY - i * 20, 670, baseY - i * 20);
    }
  }
  
  // X-axis
  stroke(0);
  strokeWeight(2);
  line(120, 450, 670, 450);
  
  // Y-axis title
  push();
  translate(50, 350);
  rotate(-PI/2);
  textAlign(CENTER, CENTER);
  textSize(14);
  text("Number of Votes", 0, 0);
  pop();
  
  noLoop();
}
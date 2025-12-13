function setup() {
  createCanvas(800, 600);
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("1. Look at this bar graph showing favorite sports. Which type of graph", 20, 30);
  text("would be best to show what fraction each sport represents of the total?", 20, 50);
  
  // Draw bar graph
  let sports = ["Soccer", "Basketball", "Tennis", "Baseball"];
  let votes = [15, 8, 12, 5];
  let barWidth = 60;
  let spacing = 100;
  let startX = 150;
  let baseY = 500;
  
  // Draw axes for bar graph
  stroke(0);
  strokeWeight(2);
  line(120, baseY, 600, baseY); // x-axis
  line(120, baseY, 120, 300); // y-axis
  
  // Y-axis labels
  textAlign(RIGHT, CENTER);
  textSize(12);
  for (let i = 0; i <= 20; i += 5) {
    let y = baseY - (i * 10);
    text(i, 115, y);
    stroke(200);
    strokeWeight(1);
    line(120, y, 600, y);
  }
  
  // Draw bars
  stroke(0);
  strokeWeight(1);
  for (let i = 0; i < sports.length; i++) {
    let x = startX + (i * spacing);
    let barHeight = votes[i] * 10;
    
    // Bar
    fill(150, 200, 250);
    rect(x, baseY - barHeight, barWidth, barHeight);
    
    // Sport label
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(11);
    text(sports[i], x + barWidth/2, baseY + 20);
    
    // Value label
    text(votes[i], x + barWidth/2, baseY - barHeight - 10);
  }
  
  // Title and axis labels
  textAlign(CENTER, CENTER);
  textSize(14);
  text("Favorite Sports Survey", 360, 280);
  text("Number of Students", 50, 400);
  text("Sports", 360, 540);
  
  noLoop();
}

function draw() {
  // Drawing is complete in setup
}
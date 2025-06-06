function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("Compare the number of books read by students in Grade 4 and Grade 5 each month.", 20, 30);
  
  // Create double bar graph
  let barWidth = 40;
  let spacing = 80;
  let startX = 150;
  let baseY = height - 120;
  
  // Data for the graph
  let grade4Data = [12, 18, 15, 22, 16];
  let grade5Data = [16, 14, 20, 19, 24];
  let months = ["Jan", "Feb", "Mar", "Apr", "May"];
  
  // Draw y-axis
  stroke(0);
  line(startX - 20, baseY, startX - 20, baseY - 300);
  
  // Draw x-axis
  line(startX - 20, baseY, startX + 450, baseY);
  
  // Y-axis labels
  textAlign(RIGHT);
  textSize(12);
  for (let i = 0; i <= 25; i += 5) {
    let y = baseY - (i * 10);
    text(i, startX - 25, y + 4);
    stroke(200);
    line(startX - 20, y, startX + 450, y);
  }
  
  // Draw bars and labels
  for (let i = 0; i < 5; i++) {
    let x = startX + i * spacing;
    
    // Grade 4 bars (blue)
    fill(100, 150, 255);
    stroke(0);
    rect(x, baseY - grade4Data[i] * 10, barWidth, grade4Data[i] * 10);
    
    // Grade 5 bars (red)
    fill(255, 100, 100);
    rect(x + barWidth + 5, baseY - grade5Data[i] * 10, barWidth, grade5Data[i] * 10);
    
    // Month labels
    fill(0);
    textAlign(CENTER);
    text(months[i], x + barWidth + 2, baseY + 20);
  }
  
  // Legend
  fill(100, 150, 255);
  rect(startX + 300, 60, 20, 15);
  fill(0);
  textAlign(LEFT);
  text("Grade 4", startX + 325, 72);
  
  fill(255, 100, 100);
  rect(startX + 300, 80, 20, 15);
  fill(0);
  text("Grade 5", startX + 325, 92);
  
  // Axis titles
  textAlign(CENTER);
  textSize(14);
  text("Months", startX + 200, baseY + 50);
  
  push();
  translate(startX - 60, baseY - 150);
  rotate(-PI/2);
  text("Number of Books", 0, 0);
  pop();
  
  noLoop();
}
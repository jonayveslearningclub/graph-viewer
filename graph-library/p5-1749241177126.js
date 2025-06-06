function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Title
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("Compare the number of books read by students in Grade 4 and Grade 5 during each month.", 20, 30);
  
  // Set up bar graph parameters
  let barWidth = 40;
  let spacing = 80;
  let startX = 100;
  let baseY = 500;
  let maxHeight = 300;
  
  // Data for Grade 4 and Grade 5
  let months = ["Jan", "Feb", "Mar", "Apr", "May"];
  let grade4Data = [12, 18, 15, 22, 25];
  let grade5Data = [16, 14, 20, 19, 28];
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(80, baseY, 550, baseY); // x-axis
  line(80, baseY, 80, 150); // y-axis
  
  // Y-axis labels
  textAlign(RIGHT);
  textSize(12);
  for (let i = 0; i <= 30; i += 5) {
    let y = baseY - (i * maxHeight / 30);
    text(i, 75, y + 5);
    stroke(200);
    strokeWeight(1);
    line(80, y, 550, y);
  }
  
  // Draw bars and labels
  for (let i = 0; i < months.length; i++) {
    let x = startX + i * spacing;
    
    // Grade 4 bars (blue)
    fill(100, 150, 255);
    stroke(0);
    strokeWeight(1);
    let height4 = (grade4Data[i] / 30) * maxHeight;
    rect(x, baseY - height4, barWidth, height4);
    
    // Grade 5 bars (red)
    fill(255, 100, 100);
    let height5 = (grade5Data[i] / 30) * maxHeight;
    rect(x + barWidth + 5, baseY - height5, barWidth, height5);
    
    // Month labels
    fill(0);
    textAlign(CENTER);
    text(months[i], x + barWidth + 2, baseY + 20);
  }
  
  // Legend
  fill(100, 150, 255);
  rect(600, 200, 20, 15);
  fill(0);
  textAlign(LEFT);
  text("Grade 4", 630, 212);
  
  fill(255, 100, 100);
  rect(600, 220, 20, 15);
  fill(0);
  text("Grade 5", 630, 232);
  
  // Axis labels
  textAlign(CENTER);
  text("Months", 315, 550);
  
  push();
  translate(30, 325);
  rotate(-PI/2);
  text("Number of Books", 0, 0);
  pop();
  
  noLoop();
}
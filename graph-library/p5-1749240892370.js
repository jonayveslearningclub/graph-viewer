function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Title
  fill(0);
  textSize(16);
  text("Compare the number of books read by students in Grade 3 and Grade 4 during different months.", 20, 30);
  
  // Bar graph setup
  let barWidth = 40;
  let spacing = 80;
  let startX = 150;
  let baseY = 500;
  
  // Data
  let months = ["Jan", "Feb", "Mar", "Apr"];
  let grade3Data = [12, 18, 15, 22];
  let grade4Data = [16, 14, 20, 19];
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(100, baseY, 600, baseY); // x-axis
  line(100, baseY, 100, 150); // y-axis
  
  // Y-axis labels
  fill(0);
  textSize(12);
  textAlign(RIGHT, CENTER);
  for (let i = 0; i <= 25; i += 5) {
    let y = baseY - (i * 12);
    text(i, 95, y);
    stroke(200);
    strokeWeight(1);
    line(100, y, 600, y);
  }
  
  // X-axis labels and bars
  textAlign(CENTER, TOP);
  for (let i = 0; i < months.length; i++) {
    let x = startX + (i * spacing);
    
    // Month label
    fill(0);
    text(months[i], x, baseY + 10);
    
    // Grade 3 bars (blue)
    fill(100, 150, 255);
    stroke(0);
    strokeWeight(1);
    let height3 = grade3Data[i] * 12;
    rect(x - 15, baseY - height3, barWidth, height3);
    
    // Grade 4 bars (red)
    fill(255, 100, 100);
    let height4 = grade4Data[i] * 12;
    rect(x + 25, baseY - height4, barWidth, height4);
    
    // Data labels
    fill(0);
    textAlign(CENTER, BOTTOM);
    text(grade3Data[i], x, baseY - height3 - 5);
    text(grade4Data[i], x + 40, baseY - height4 - 5);
  }
  
  // Legend
  fill(100, 150, 255);
  rect(450, 100, 20, 15);
  fill(0);
  textAlign(LEFT, CENTER);
  text("Grade 3", 480, 107);
  
  fill(255, 100, 100);
  rect(450, 125, 20, 15);
  fill(0);
  text("Grade 4", 480, 132);
  
  // Axis titles
  textAlign(CENTER, CENTER);
  text("Number of Books", 50, 300);
  text("Months", 350, 550);
  
  noLoop();
}
function setup() {
  createCanvas(800, 600);
  background(255);
  
  textAlign(LEFT);
  fill(0);
  textSize(16);
  text("3. Look at the bar graph showing library book genres checked out last month.", 50, 30);
  text("What is the total number of mystery and fantasy books combined?", 50, 50);
  
  // Draw bar graph
  let barWidth = 55;
  let spacing = 90;
  let startX = 140;
  let baseY = 500;
  
  // Categories and values
  let categories = ["Mystery", "Fantasy", "Science", "History", "Biography", "Comedy"];
  let values = [8, 13, 5, 10, 7, 12];
  let maxValue = 16;
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(startX - 20, baseY, startX + categories.length * spacing, baseY); // x-axis
  line(startX - 20, baseY, startX - 20, baseY - 300); // y-axis
  
  // Draw y-axis labels and grid lines
  textAlign(RIGHT);
  textSize(12);
  for (let i = 0; i <= maxValue; i += 2) {
    let y = baseY - (i * 18);
    text(i, startX - 25, y + 4);
    stroke(230);
    strokeWeight(1);
    line(startX - 20, y, startX + categories.length * spacing, y);
  }
  
  // Draw bars
  fill(150, 100, 180);
  stroke(0);
  strokeWeight(1);
  textAlign(CENTER);
  textSize(11);
  
  for (let i = 0; i < categories.length; i++) {
    let barHeight = values[i] * 18;
    let x = startX + i * spacing;
    
    rect(x, baseY - barHeight, barWidth, barHeight);
    
    // Category labels (rotated for better fit)
    fill(0);
    push();
    translate(x + barWidth/2, baseY + 15);
    rotate(PI/4);
    text(categories[i], 0, 0);
    pop();
    
    // Value labels on top of bars
    text(values[i], x + barWidth/2, baseY - barHeight - 8);
    
    fill(150, 100, 180);
  }
  
  // Axis titles
  fill(0);
  textAlign(CENTER);
  textSize(14);
  text("Book Genres", startX + (categories.length * spacing)/2 - 25, baseY + 80);
  
  push();
  translate(startX - 65, baseY - 150);
  rotate(-PI/2);
  text("Books Checked Out", 0, 0);
  pop();
}

function draw() {
  noLoop();
}
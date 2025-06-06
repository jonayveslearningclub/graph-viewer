function setup() {
  createCanvas(800, 600);
  background(255);
  
  textAlign(LEFT);
  fill(0);
  textSize(16);
  text("2. The bar graph shows favorite sports of 5th grade students. Which sport was chosen by exactly 9 students?", 50, 30);
  
  // Draw bar graph
  let barWidth = 70;
  let spacing = 110;
  let startX = 120;
  let baseY = 480;
  
  // Categories and values
  let categories = ["Soccer", "Basketball", "Baseball", "Tennis", "Swimming"];
  let values = [14, 9, 6, 11, 7];
  let maxValue = 16;
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(startX - 20, baseY, startX + categories.length * spacing, baseY); // x-axis
  line(startX - 20, baseY, startX - 20, baseY - 280); // y-axis
  
  // Draw y-axis labels and grid lines
  textAlign(RIGHT);
  textSize(12);
  for (let i = 0; i <= maxValue; i += 2) {
    let y = baseY - (i * 17);
    text(i, startX - 25, y + 4);
    stroke(220);
    strokeWeight(1);
    line(startX - 20, y, startX + categories.length * spacing, y);
  }
  
  // Draw bars with different colors
  let colors = [[200, 100, 100], [100, 200, 100], [100, 100, 200], [200, 200, 100], [200, 100, 200]];
  stroke(0);
  strokeWeight(1);
  textAlign(CENTER);
  textSize(12);
  
  for (let i = 0; i < categories.length; i++) {
    let barHeight = values[i] * 17;
    let x = startX + i * spacing;
    
    fill(colors[i][0], colors[i][1], colors[i][2]);
    rect(x, baseY - barHeight, barWidth, barHeight);
    
    // Category labels
    fill(0);
    text(categories[i], x + barWidth/2, baseY + 20);
    
    // Value labels on top of bars
    text(values[i], x + barWidth/2, baseY - barHeight - 5);
  }
  
  // Axis titles
  fill(0);
  textAlign(CENTER);
  textSize(14);
  text("Sports", startX + (categories.length * spacing)/2 - 35, baseY + 50);
  
  push();
  translate(startX - 70, baseY - 140);
  rotate(-PI/2);
  text("Number of Students", 0, 0);
  pop();
}

function draw() {
  noLoop();
}
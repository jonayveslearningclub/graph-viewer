function setup() {
  createCanvas(800, 600);
  background(255);
  
  textAlign(LEFT);
  fill(0);
  textSize(16);
  text("1. Based on the bar graph below, how many more students chose pizza than chose salad?", 50, 30);
  
  // Draw bar graph
  let barWidth = 60;
  let spacing = 100;
  let startX = 150;
  let baseY = 500;
  
  // Categories and values
  let categories = ["Pizza", "Burgers", "Tacos", "Salad"];
  let values = [12, 8, 15, 4];
  let maxValue = 20;
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(startX - 20, baseY, startX + categories.length * spacing, baseY); // x-axis
  line(startX - 20, baseY, startX - 20, baseY - 300); // y-axis
  
  // Draw y-axis labels
  textAlign(RIGHT);
  textSize(12);
  for (let i = 0; i <= maxValue; i += 2) {
    let y = baseY - (i * 15);
    text(i, startX - 25, y + 4);
    stroke(200);
    strokeWeight(1);
    line(startX - 20, y, startX + categories.length * spacing, y);
  }
  
  // Draw bars
  fill(100, 150, 200);
  stroke(0);
  strokeWeight(1);
  textAlign(CENTER);
  textSize(12);
  
  for (let i = 0; i < categories.length; i++) {
    let barHeight = values[i] * 15;
    let x = startX + i * spacing;
    
    rect(x, baseY - barHeight, barWidth, barHeight);
    
    // Category labels
    fill(0);
    text(categories[i], x + barWidth/2, baseY + 20);
    
    // Value labels on top of bars
    text(values[i], x + barWidth/2, baseY - barHeight - 5);
    
    fill(100, 150, 200);
  }
  
  // Axis titles
  fill(0);
  textAlign(CENTER);
  textSize(14);
  text("Food Choices", startX + (categories.length * spacing)/2 - 10, baseY + 50);
  
  push();
  translate(startX - 60, baseY - 150);
  rotate(-PI/2);
  text("Number of Students", 0, 0);
  pop();
}

function draw() {
  noLoop();
}
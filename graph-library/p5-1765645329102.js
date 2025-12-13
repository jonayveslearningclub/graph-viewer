function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Question text
  fill(0);
  textSize(16);
  text("Question 1: Look at the bar graph below. Which type of graph would be most", 10, 25);
  text("appropriate to show this same data as percentages of the whole?", 10, 45);
  
  // Title for the bar graph
  textSize(14);
  text("Favorite Sports Among 60 Students", 250, 80);
  
  // Draw bar graph
  let categories = ["Soccer", "Basketball", "Baseball", "Tennis"];
  let values = [18, 15, 12, 15];
  let colors = [[255, 100, 100], [100, 255, 100], [100, 100, 255], [255, 255, 100]];
  
  let barWidth = 80;
  let spacing = 120;
  let startX = 150;
  let baseY = 450;
  
  // Y-axis
  stroke(0);
  line(120, 150, 120, 450);
  
  // X-axis
  line(120, 450, 650, 450);
  
  // Y-axis labels
  textAlign(RIGHT, CENTER);
  textSize(12);
  for (let i = 0; i <= 20; i += 5) {
    let y = baseY - (i * 15);
    text(i, 115, y);
    stroke(200);
    if (i > 0) line(120, y, 650, y);
  }
  
  // Draw bars
  stroke(0);
  for (let i = 0; i < categories.length; i++) {
    fill(colors[i]);
    let barHeight = values[i] * 15;
    rect(startX + i * spacing, baseY - barHeight, barWidth, barHeight);
    
    // Category labels
    fill(0);
    textAlign(CENTER, TOP);
    text(categories[i], startX + i * spacing + barWidth/2, baseY + 10);
    
    // Value labels on bars
    textAlign(CENTER, BOTTOM);
    text(values[i], startX + i * spacing + barWidth/2, baseY - barHeight - 5);
  }
  
  // Y-axis title
  push();
  translate(50, 300);
  rotate(-PI/2);
  textAlign(CENTER);
  text("Number of Students", 0, 0);
  pop();
  
  noLoop();
}
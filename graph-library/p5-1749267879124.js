function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  textSize(16);
  fill(0);
  text("1. How many more students prefer pizza than hamburgers?", 20, 30);
  
  // Title
  textSize(14);
  text("Favorite Lunch Foods", 300, 80);
  
  // Draw bars
  let barWidth = 60;
  let spacing = 100;
  let startX = 150;
  let baseY = 500;
  
  // Pizza bar (8 students)
  fill(255, 100, 100);
  rect(startX, baseY - 160, barWidth, 160);
  fill(0);
  text("Pizza", startX + 15, baseY + 20);
  text("8", startX + 25, baseY - 170);
  
  // Hamburger bar (5 students)
  fill(100, 255, 100);
  rect(startX + spacing, baseY - 100, barWidth, 100);
  fill(0);
  text("Hamburger", startX + spacing + 5, baseY + 20);
  text("5", startX + spacing + 25, baseY - 110);
  
  // Tacos bar (6 students)
  fill(100, 100, 255);
  rect(startX + spacing * 2, baseY - 120, barWidth, 120);
  fill(0);
  text("Tacos", startX + spacing * 2 + 15, baseY + 20);
  text("6", startX + spacing * 2 + 25, baseY - 130);
  
  // Salad bar (3 students)
  fill(255, 255, 100);
  rect(startX + spacing * 3, baseY - 60, barWidth, 60);
  fill(0);
  text("Salad", startX + spacing * 3 + 15, baseY + 20);
  text("3", startX + spacing * 3 + 25, baseY - 70);
  
  // Y-axis labels
  textSize(12);
  for (let i = 0; i <= 10; i++) {
    text(i, 120, baseY - i * 20 + 5);
    stroke(200);
    line(140, baseY - i * 20, 650, baseY - i * 20);
  }
  
  // Axes
  stroke(0);
  strokeWeight(2);
  line(140, baseY, 140, baseY - 200); // Y-axis
  line(140, baseY, 650, baseY); // X-axis
  
  // Y-axis title
  push();
  translate(80, 400);
  rotate(-PI/2);
  text("Number of Students", 0, 0);
  pop();
  
  noLoop();
}
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  textSize(16);
  fill(0);
  text("2. What is the total number of books read by all students?", 20, 30);
  
  // Title
  textSize(14);
  text("Books Read This Month", 280, 80);
  
  // Draw bars
  let barWidth = 50;
  let spacing = 90;
  let startX = 180;
  let baseY = 480;
  
  // Maria bar (7 books)
  fill(255, 150, 150);
  rect(startX, baseY - 140, barWidth, 140);
  fill(0);
  text("Maria", startX + 10, baseY + 20);
  text("7", startX + 20, baseY - 150);
  
  // Jake bar (4 books)
  fill(150, 255, 150);
  rect(startX + spacing, baseY - 80, barWidth, 80);
  fill(0);
  text("Jake", startX + spacing + 15, baseY + 20);
  text("4", startX + spacing + 20, baseY - 90);
  
  // Emma bar (9 books)
  fill(150, 150, 255);
  rect(startX + spacing * 2, baseY - 180, barWidth, 180);
  fill(0);
  text("Emma", startX + spacing * 2 + 10, baseY + 20);
  text("9", startX + spacing * 2 + 20, baseY - 190);
  
  // Sam bar (6 books)
  fill(255, 200, 150);
  rect(startX + spacing * 3, baseY - 120, barWidth, 120);
  fill(0);
  text("Sam", startX + spacing * 3 + 15, baseY + 20);
  text("6", startX + spacing * 3 + 20, baseY - 130);
  
  // Y-axis labels
  textSize(12);
  for (let i = 0; i <= 12; i++) {
    text(i, 150, baseY - i * 20 + 5);
    stroke(200);
    line(170, baseY - i * 20, 600, baseY - i * 20);
  }
  
  // Axes
  stroke(0);
  strokeWeight(2);
  line(170, baseY, 170, baseY - 240); // Y-axis
  line(170, baseY, 600, baseY); // X-axis
  
  // Y-axis title
  push();
  translate(100, 360);
  rotate(-PI/2);
  text("Number of Books", 0, 0);
  pop();
  
  noLoop();
}
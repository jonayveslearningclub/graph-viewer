function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("2. Marcus recorded the number of books he read each month. In which month did he read exactly 4 books?", 20, 30);
  
  // Create bar chart
  let startX = 120;
  let startY = height - 100;
  let barWidth = 50;
  let spacing = 70;
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(startX - 20, startY, startX + 420, startY); // x-axis
  line(startX - 20, startY, startX - 20, startY - 160); // y-axis
  
  // Y-axis labels
  textAlign(RIGHT);
  textSize(12);
  for(let i = 0; i <= 8; i++) {
    let y = startY - (i * 20);
    text(i, startX - 25, y + 5);
    stroke(200);
    strokeWeight(1);
    line(startX - 20, y, startX + 420, y);
  }
  
  // Book data
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  let books = [6, 2, 4, 7, 3, 5];
  
  // Draw bars
  for(let i = 0; i < months.length; i++) {
    let x = startX + (i * spacing);
    let barHeight = books[i] * 20;
    
    fill(100, 150, 255);
    stroke(0);
    strokeWeight(1);
    rect(x, startY - barHeight, barWidth, barHeight);
    
    // Month labels
    fill(0);
    textAlign(CENTER);
    textSize(12);
    text(months[i], x + barWidth/2, startY + 15);
    
    // Number on top of bar
    textSize(14);
    text(books[i], x + barWidth/2, startY - barHeight - 5);
  }
  
  // Y-axis title
  push();
  translate(30, startY - 80);
  rotate(-PI/2);
  textAlign(CENTER);
  textSize(14);
  text("Number of Books", 0, 0);
  pop();
  
  // X-axis title
  textAlign(CENTER);
  textSize(14);
  text("Months", startX + 175, startY + 40);
  
  noLoop();
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(240);
}

function draw() {
  // Question title
  fill(0);
  textSize(20);
  textAlign(LEFT);
  text("Create a bar graph showing the number of books read by each student", 50, 40);
  
  // Data from the image
  let students = ["Maya", "Liam", "Zoe", "Jack", "Emma"];
  let books = [12, 8, 15, 6, 10];
  
  // Graph setup
  let graphX = 100;
  let graphY = 100;
  let graphWidth = 600;
  let graphHeight = 400;
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(graphX, graphY + graphHeight, graphX + graphWidth, graphY + graphHeight); // x-axis
  line(graphX, graphY, graphX, graphY + graphHeight); // y-axis
  
  // Y-axis labels (0 to 16)
  textAlign(RIGHT);
  textSize(14);
  for (let i = 0; i <= 16; i += 2) {
    let y = graphY + graphHeight - (i * graphHeight / 16);
    text(i, graphX - 10, y + 5);
    stroke(200);
    strokeWeight(1);
    line(graphX, y, graphX + graphWidth, y);
  }
  
  // X-axis title
  textAlign(CENTER);
  textSize(16);
  fill(0);
  text("Students", graphX + graphWidth/2, graphY + graphHeight + 80);
  
  // Y-axis title
  push();
  translate(graphX - 60, graphY + graphHeight/2);
  rotate(-PI/2);
  text("Number of Books", 0, 0);
  pop();
  
  // Draw bars
  let barWidth = graphWidth / students.length * 0.8;
  let barSpacing = graphWidth / students.length;
  
  for (let i = 0; i < students.length; i++) {
    let barHeight = (books[i] / 16) * graphHeight;
    let x = graphX + i * barSpacing + barSpacing * 0.1;
    let y = graphY + graphHeight - barHeight;
    
    // Bar color
    fill(100 + i * 30, 150, 200);
    stroke(0);
    strokeWeight(1);
    rect(x, y, barWidth, barHeight);
    
    // Student name
    fill(0);
    textAlign(CENTER);
    textSize(12);
    text(students[i], x + barWidth/2, graphY + graphHeight + 20);
    
    // Value on top of bar
    text(books[i], x + barWidth/2, y - 10);
  }
  
  noLoop();
}
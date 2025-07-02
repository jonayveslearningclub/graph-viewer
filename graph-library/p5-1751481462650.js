function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("Create a bar graph for the number of books read by each grade level", 20, 30);
  
  // Data labels
  textSize(14);
  text("6th Grade: 12 books", 20, 60);
  text("7th Grade: 9 books", 20, 80);
  text("8th Grade: 15 books", 20, 100);
  text("9th Grade: 7 books", 20, 120);
  text("10th Grade: 11 books", 20, 140);
  
  // Set up bar graph area
  let graphX = 150;
  let graphY = 200;
  let graphWidth = 500;
  let graphHeight = 300;
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(graphX, graphY + graphHeight, graphX + graphWidth, graphY + graphHeight); // x-axis
  line(graphX, graphY, graphX, graphY + graphHeight); // y-axis
  
  // Y-axis labels (number of books)
  textAlign(CENTER);
  textSize(12);
  for(let i = 0; i <= 16; i += 2) {
    let y = graphY + graphHeight - (i * graphHeight / 16);
    line(graphX - 5, y, graphX, y);
    fill(0);
    text(i, graphX - 15, y + 4);
  }
  
  // Y-axis title
  push();
  translate(graphX - 60, graphY + graphHeight/2);
  rotate(-PI/2);
  textAlign(CENTER);
  text("Number of Books", 0, 0);
  pop();
  
  // X-axis title
  textAlign(CENTER);
  text("Grade Levels", graphX + graphWidth/2, graphY + graphHeight + 60);
  
  // Grade labels on x-axis
  let grades = ["6th", "7th", "8th", "9th", "10th"];
  let barWidth = graphWidth / 5;
  
  for(let i = 0; i < grades.length; i++) {
    let x = graphX + (i * barWidth) + barWidth/2;
    text(grades[i], x, graphY + graphHeight + 25);
  }
  
  // Grid lines
  stroke(200);
  strokeWeight(1);
  for(let i = 2; i < 16; i += 2) {
    let y = graphY + graphHeight - (i * graphHeight / 16);
    line(graphX, y, graphX + graphWidth, y);
  }
  
  noLoop();
}
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  fill(0);
  textSize(16);
  text("A survey asked 120 students about their favorite school subject.", 20, 30);
  text("Math: 45 students, Science: 35 students, English: 25 students, History: 15 students", 20, 50);
  text("Which type of graph would best display this categorical data?", 20, 70);
  
  // Show three different graph options
  
  // Option 1: Bar Graph
  fill(0);
  textSize(14);
  text("Option A: Bar Graph", 50, 120);
  
  // Draw bar graph
  let barWidth = 40;
  let spacing = 60;
  let startX = 50;
  let startY = 400;
  
  // Bars
  fill(100, 150, 200);
  rect(startX, startY - 90, barWidth, 90); // Math
  rect(startX + spacing, startY - 70, barWidth, 70); // Science
  rect(startX + 2*spacing, startY - 50, barWidth, 50); // English
  rect(startX + 3*spacing, startY - 30, barWidth, 30); // History
  
  // Labels
  fill(0);
  textSize(10);
  text("Math", startX + 5, startY + 15);
  text("Science", startX + spacing - 5, startY + 15);
  text("English", startX + 2*spacing - 5, startY + 15);
  text("History", startX + 3*spacing - 5, startY + 15);
  
  // Option 2: Pie Chart
  text("Option B: Pie Chart", 320, 120);
  
  let centerX = 400;
  let centerY = 250;
  let radius = 60;
  
  // Pie slices
  fill(200, 100, 100);
  arc(centerX, centerY, radius*2, radius*2, 0, PI * 0.75); // Math
  fill(100, 200, 100);
  arc(centerX, centerY, radius*2, radius*2, PI * 0.75, PI * 1.33); // Science
  fill(100, 100, 200);
  arc(centerX, centerY, radius*2, radius*2, PI * 1.33, PI * 1.75); // English
  fill(200, 200, 100);
  arc(centerX, centerY, radius*2, radius*2, PI * 1.75, TWO_PI); // History
  
  // Option 3: Line Graph
  fill(0);
  text("Option C: Line Graph", 550, 120);
  
  // Draw line graph
  stroke(0);
  strokeWeight(1);
  line(550, 400, 750, 400); // x-axis
  line(550, 400, 550, 300); // y-axis
  
  // Plot points and connect with lines
  strokeWeight(2);
  stroke(200, 50, 50);
  let points = [[570, 355], [620, 365], [670, 375], [720, 385]];
  for(let i = 0; i < points.length - 1; i++) {
    line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
  }
  
  // Plot points
  fill(200, 50, 50);
  noStroke();
  for(let point of points) {
    circle(point[0], point[1], 6);
  }
  
  noLoop();
}
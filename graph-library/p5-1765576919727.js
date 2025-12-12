function setup() {
  createCanvas(900, 700);
}

function draw() {
  background(245);
  
  // Question text
  fill(0);
  textSize(16);
  text("The table shows temperature changes over 6 hours:", 30, 30);
  text("Hour 1: 18°C, Hour 2: 22°C, Hour 3: 25°C, Hour 4: 23°C, Hour 5: 20°C, Hour 6: 16°C", 30, 50);
  text("What type of graph should be used to show how temperature changes over time?", 30, 70);
  
  // Show different graph types
  
  // Graph Type 1: Histogram
  fill(0);
  textSize(14);
  text("Graph Type 1: Histogram", 80, 120);
  
  // Draw histogram
  fill(150, 100, 200);
  let histX = 80;
  let histY = 350;
  let binWidth = 35;
  
  rect(histX, histY - 40, binWidth, 40);
  rect(histX + binWidth, histY - 60, binWidth, 60);
  rect(histX + 2*binWidth, histY - 80, binWidth, 80);
  rect(histX + 3*binWidth, histY - 50, binWidth, 50);
  
  fill(0);
  textSize(10);
  text("15-18°C", histX - 5, histY + 15);
  text("19-22°C", histX + binWidth - 5, histY + 15);
  text("23-26°C", histX + 2*binWidth - 5, histY + 15);
  text("27-30°C", histX + 3*binWidth - 5, histY + 15);
  
  // Graph Type 2: Scatter Plot
  fill(0);
  textSize(14);
  text("Graph Type 2: Scatter Plot", 320, 120);
  
  // Draw scatter plot axes
  stroke(0);
  strokeWeight(1);
  line(320, 350, 500, 350); // x-axis
  line(320, 350, 320, 200); // y-axis
  
  // Plot scattered points
  fill(200, 100, 50);
  noStroke();
  let scatterPoints = [[340, 280], [370, 260], [400, 240], [430, 250], [460, 270], [490, 290]];
  for(let point of scatterPoints) {
    circle(point[0], point[1], 8);
  }
  
  fill(0);
  textSize(10);
  text("Time (hours)", 400, 370);
  
  // Graph Type 3: Line Graph
  fill(0);
  textSize(14);
  text("Graph Type 3: Line Graph", 580, 120);
  
  // Draw line graph axes
  stroke(0);
  strokeWeight(1);
  line(580, 350, 780, 350); // x-axis
  line(580, 350, 580, 200); // y-axis
  
  // Connect temperature points with lines
  stroke(50, 150, 200);
  strokeWeight(2);
  let tempPoints = [[600, 280], [630, 260], [660, 240], [690, 250], [720, 270], [750, 290]];
  for(let i = 0; i < tempPoints.length - 1; i++) {
    line(tempPoints[i][0], tempPoints[i][1], tempPoints[i+1][0], tempPoints[i+1][1]);
  }
  
  // Plot temperature points
  fill(50, 150, 200);
  noStroke();
  for(let point of tempPoints) {
    circle(point[0], point[1], 6);
  }
  
  fill(0);
  textSize(10);
  text("Time (hours)", 660, 370);
  text("Temp (°C)", 550, 275);
  
  // Graph Type 4: Bar Chart
  fill(0);
  textSize(14);
  text("Graph Type 4: Bar Chart", 320, 420);
  
  // Draw bar chart
  fill(100, 200, 150);
  let barX = 320;
  let barY = 600;
  let barW = 25;
  
  rect(barX, barY - 45, barW, 45); // 18°C
  rect(barX + 35, barY - 55, barW, 55); // 22°C
  rect(barX + 70, barY - 62, barW, 62); // 25°C
  rect(barX + 105, barY - 57, barW, 57); // 23°C
  rect(barX + 140, barY - 50, barW, 50); // 20°C
  rect(barX + 175, barY - 40, barW, 40); // 16°C
  
  fill(0);
  textSize(9);
  text("1", barX + 10, barY + 15);
  text("2", barX + 45, barY + 15);
  text("3", barX + 80, barY + 15);
  text("4", barX + 115, barY + 15);
  text("5", barX + 150, barY + 15);
  text("6", barX + 185, barY + 15);
  
  noLoop();
}
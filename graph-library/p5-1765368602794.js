function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Title
  fill(0);
  textSize(16);
  text("1. How much money was earned after 3 hours of work?", 20, 30);
  
  // Create chart area
  let chartX = 80;
  let chartY = 80;
  let chartW = 600;
  let chartH = 400;
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(chartX, chartY + chartH, chartX + chartW, chartY + chartH); // x-axis
  line(chartX, chartY, chartX, chartY + chartH); // y-axis
  
  // Labels
  fill(0);
  textAlign(CENTER);
  textSize(14);
  text("Hours Worked", chartX + chartW/2, chartY + chartH + 50);
  
  push();
  translate(30, chartY + chartH/2);
  rotate(-PI/2);
  text("Money Earned ($)", 0, 0);
  pop();
  
  // Draw grid and labels
  strokeWeight(1);
  stroke(200);
  textAlign(CENTER);
  textSize(12);
  
  // X-axis labels and grid (0 to 8 hours)
  for (let i = 0; i <= 8; i++) {
    let x = chartX + (i * chartW / 8);
    line(x, chartY, x, chartY + chartH);
    fill(0);
    text(i, x, chartY + chartH + 20);
  }
  
  // Y-axis labels and grid (0 to 160 dollars, every 20)
  for (let i = 0; i <= 8; i++) {
    let y = chartY + chartH - (i * chartH / 8);
    line(chartX, y, chartX + chartW, y);
    fill(0);
    textAlign(RIGHT);
    text(i * 20, chartX - 10, y + 5);
  }
  
  // Plot line graph points
  stroke(255, 0, 0);
  strokeWeight(3);
  fill(255, 0, 0);
  
  let dataPoints = [
    [0, 0], [1, 25], [2, 50], [3, 75], [4, 100], [5, 125], [6, 150], [7, 160], [8, 160]
  ];
  
  // Draw line
  noFill();
  beginShape();
  for (let point of dataPoints) {
    let x = chartX + (point[0] * chartW / 8);
    let y = chartY + chartH - (point[1] * chartH / 160);
    vertex(x, y);
  }
  endShape();
  
  // Draw points
  fill(255, 0, 0);
  for (let point of dataPoints) {
    let x = chartX + (point[0] * chartW / 8);
    let y = chartY + chartH - (point[1] * chartH / 160);
    ellipse(x, y, 8, 8);
  }
  
  noLoop();
}
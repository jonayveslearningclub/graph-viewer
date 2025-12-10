function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Title
  fill(0);
  textSize(16);
  text("3. How much money was earned after 1.5 hours of work?", 20, 30);
  
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
  
  // X-axis labels and grid (0 to 6 hours)
  for (let i = 0; i <= 6; i++) {
    let x = chartX + (i * chartW / 6);
    line(x, chartY, x, chartY + chartH);
    fill(0);
    text(i, x, chartY + chartH + 20);
  }
  
  // Y-axis labels and grid (0 to 120 dollars, every 15)
  for (let i = 0; i <= 8; i++) {
    let y = chartY + chartH - (i * chartH / 8);
    line(chartX, y, chartX + chartW, y);
    fill(0);
    textAlign(RIGHT);
    text(i * 15, chartX - 10, y + 5);
  }
  
  // Plot line graph points
  stroke(0, 0, 200);
  strokeWeight(3);
  fill(0, 0, 200);
  
  let dataPoints = [
    [0, 0], [1, 22], [2, 45], [3, 68], [4, 90], [5, 110], [6, 120]
  ];
  
  // Draw line
  noFill();
  beginShape();
  for (let point of dataPoints) {
    let x = chartX + (point[0] * chartW / 6);
    let y = chartY + chartH - (point[1] * chartH / 120);
    vertex(x, y);
  }
  endShape();
  
  // Draw points
  fill(0, 0, 200);
  for (let point of dataPoints) {
    let x = chartX + (point[0] * chartW / 6);
    let y = chartY + chartH - (point[1] * chartH / 120);
    ellipse(x, y, 8, 8);
  }
  
  noLoop();
}
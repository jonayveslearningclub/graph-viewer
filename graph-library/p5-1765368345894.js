function setup() {
  createCanvas(800, 600);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(255);
  
  // Title
  fill(0);
  textSize(18);
  text("1. How much money was earned after working for 3 hours?", 400, 30);
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(80, 500, 720, 500); // x-axis
  line(80, 500, 80, 80);   // y-axis
  
  // Axis labels
  textSize(14);
  text("Hours Worked", 400, 550);
  
  push();
  translate(30, 290);
  rotate(-PI/2);
  text("Money Earned ($)", 0, 0);
  pop();
  
  // Draw grid and labels
  strokeWeight(1);
  stroke(200);
  textSize(12);
  fill(0);
  
  // X-axis grid and labels (0 to 8 hours)
  for (let i = 0; i <= 8; i++) {
    let x = 80 + i * 80;
    line(x, 80, x, 500);
    text(i, x, 520);
  }
  
  // Y-axis grid and labels (0 to 50 dollars)
  for (let i = 0; i <= 5; i++) {
    let y = 500 - i * 80;
    line(80, y, 720, y);
    text(i * 10, 60, y);
  }
  
  // Plot data points and connect with lines
  stroke(255, 0, 0);
  strokeWeight(3);
  fill(255, 0, 0);
  
  let data = [
    {hours: 0, money: 0},
    {hours: 1, money: 8},
    {hours: 2, money: 16},
    {hours: 3, money: 24},
    {hours: 4, money: 32},
    {hours: 5, money: 40}
  ];
  
  // Draw line segments
  for (let i = 0; i < data.length - 1; i++) {
    let x1 = 80 + data[i].hours * 80;
    let y1 = 500 - data[i].money * 8;
    let x2 = 80 + data[i+1].hours * 80;
    let y2 = 500 - data[i+1].money * 8;
    line(x1, y1, x2, y2);
  }
  
  // Draw points
  for (let point of data) {
    let x = 80 + point.hours * 80;
    let y = 500 - point.money * 8;
    circle(x, y, 8);
  }
  
  noLoop();
}
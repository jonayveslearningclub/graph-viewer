function setup() {
  createCanvas(800, 600);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(255);
  
  // Title
  fill(0);
  textSize(18);
  text("2. What is the total earnings after 4 hours of babysitting?", 400, 30);
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(80, 500, 720, 500); // x-axis
  line(80, 500, 80, 80);   // y-axis
  
  // Axis labels
  textSize(14);
  text("Time (hours)", 400, 550);
  
  push();
  translate(30, 290);
  rotate(-PI/2);
  text("Total Earnings ($)", 0, 0);
  pop();
  
  // Draw grid and labels
  strokeWeight(1);
  stroke(200);
  textSize(12);
  fill(0);
  
  // X-axis grid and labels (0 to 6 hours)
  for (let i = 0; i <= 6; i++) {
    let x = 80 + i * 90;
    line(x, 80, x, 500);
    text(i, x, 520);
  }
  
  // Y-axis grid and labels (0 to 60 dollars)
  for (let i = 0; i <= 6; i++) {
    let y = 500 - i * 70;
    line(80, y, 720, y);
    text(i * 10, 60, y);
  }
  
  // Plot data points and connect with lines
  stroke(0, 150, 0);
  strokeWeight(3);
  fill(0, 150, 0);
  
  let data = [
    {hours: 0, money: 0},
    {hours: 1, money: 12},
    {hours: 2, money: 24},
    {hours: 3, money: 36},
    {hours: 4, money: 48},
    {hours: 5, money: 60}
  ];
  
  // Draw line segments
  for (let i = 0; i < data.length - 1; i++) {
    let x1 = 80 + data[i].hours * 90;
    let y1 = 500 - data[i].money * 7;
    let x2 = 80 + data[i+1].hours * 90;
    let y2 = 500 - data[i+1].money * 7;
    line(x1, y1, x2, y2);
  }
  
  // Draw points
  for (let point of data) {
    let x = 80 + point.hours * 90;
    let y = 500 - point.money * 7;
    circle(x, y, 8);
  }
  
  noLoop();
}
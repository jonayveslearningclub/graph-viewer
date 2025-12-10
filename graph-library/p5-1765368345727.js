function setup() {
  createCanvas(800, 600);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(255);
  
  // Title
  fill(0);
  textSize(18);
  text("3. How much does Maya earn per hour if she worked 5 hours?", 400, 30);
  
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
  text("Cumulative Pay ($)", 0, 0);
  pop();
  
  // Draw grid and labels
  strokeWeight(1);
  stroke(200);
  textSize(12);
  fill(0);
  
  // X-axis grid and labels (0 to 7 hours)
  for (let i = 0; i <= 7; i++) {
    let x = 80 + i * 80;
    line(x, 80, x, 500);
    text(i, x, 520);
  }
  
  // Y-axis grid and labels (0 to 70 dollars)
  for (let i = 0; i <= 7; i++) {
    let y = 500 - i * 60;
    line(80, y, 720, y);
    text(i * 10, 60, y);
  }
  
  // Plot data points and connect with lines
  stroke(0, 0, 200);
  strokeWeight(3);
  fill(0, 0, 200);
  
  let data = [
    {hours: 0, money: 0},
    {hours: 1, money: 14},
    {hours: 2, money: 28},
    {hours: 3, money: 42},
    {hours: 4, money: 56},
    {hours: 5, money: 70}
  ];
  
  // Draw line segments
  for (let i = 0; i < data.length - 1; i++) {
    let x1 = 80 + data[i].hours * 80;
    let y1 = 500 - data[i].money * 6;
    let x2 = 80 + data[i+1].hours * 80;
    let y2 = 500 - data[i+1].money * 6;
    line(x1, y1, x2, y2);
  }
  
  // Draw points
  for (let point of data) {
    let x = 80 + point.hours * 80;
    let y = 500 - point.money * 6;
    circle(x, y, 8);
  }
  
  noLoop();
}
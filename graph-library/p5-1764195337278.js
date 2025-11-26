function setup() {
  createCanvas(800, 600);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(240);
  
  // Question text
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("How many more books were sold in March than in January?", 20, 30);
  
  // Chart title
  textAlign(CENTER);
  textSize(14);
  text("Monthly Book Sales", 400, 80);
  
  // Draw line graph
  let points = [
    {month: "Jan", sales: 25, x: 150},
    {month: "Feb", sales: 18, x: 250},
    {month: "Mar", sales: 32, x: 350},
    {month: "Apr", sales: 28, x: 450},
    {month: "May", sales: 35, x: 550}
  ];
  
  let baseY = 450;
  let scale = 8; // 8 pixels per book
  
  // Draw grid lines
  stroke(220);
  strokeWeight(1);
  for(let i = 0; i <= 40; i += 5) {
    line(100, baseY - i * scale, 600, baseY - i * scale);
  }
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(100, baseY, 600, baseY); // x-axis
  line(100, baseY, 100, baseY - 320); // y-axis
  
  // Y-axis labels
  textAlign(RIGHT, CENTER);
  textSize(12);
  for(let i = 0; i <= 40; i += 5) {
    fill(0);
    text(i, 95, baseY - i * scale);
  }
  
  // Plot points and connect with lines
  stroke(50, 100, 200);
  strokeWeight(3);
  fill(50, 100, 200);
  
  for(let i = 0; i < points.length; i++) {
    let pointY = baseY - points[i].sales * scale;
    
    // Draw line to next point
    if(i < points.length - 1) {
      let nextPointY = baseY - points[i + 1].sales * scale;
      line(points[i].x, pointY, points[i + 1].x, nextPointY);
    }
    
    // Draw point
    circle(points[i].x, pointY, 8);
    
    // Month label
    fill(0);
    textAlign(CENTER, TOP);
    text(points[i].month, points[i].x, baseY + 10);
    
    // Sales value above point
    textAlign(CENTER, BOTTOM);
    text(points[i].sales, points[i].x, pointY - 10);
    
    fill(50, 100, 200);
  }
  
  // Y-axis title
  push();
  translate(40, 320);
  rotate(-PI/2);
  textAlign(CENTER, CENTER);
  textSize(14);
  fill(0);
  text("Number of Books Sold", 0, 0);
  pop();
  
  // X-axis title
  textAlign(CENTER, CENTER);
  text("Month", 350, 520);
  
  noLoop();
}
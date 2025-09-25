function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(LEFT, BASELINE);
  textSize(18);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(20);
  text("Order these five-digit numbers from least to greatest using the number line:", 20, 30);
  text("Numbers: 52,134   52,089   52,178   52,156", 20, 60);
  
  // Draw number line
  let lineY = height/2 + 50;
  let startX = 80;
  let endX = width - 80;
  
  // Main number line
  stroke(0);
  strokeWeight(3);
  line(startX, lineY, endX, lineY);
  
  // Number line values from 52,050 to 52,200
  let minVal = 52050;
  let maxVal = 52200;
  
  // Major tick marks every 25 units
  strokeWeight(2);
  for(let val = minVal; val <= maxVal; val += 25) {
    let x = map(val, minVal, maxVal, startX, endX);
    line(x, lineY - 15, x, lineY + 15);
    
    // Labels for major ticks
    fill(0);
    textAlign(CENTER, TOP);
    textSize(12);
    text(val.toLocaleString(), x, lineY + 20);
  }
  
  // Minor tick marks every 5 units
  strokeWeight(1);
  for(let val = minVal; val <= maxVal; val += 5) {
    let x = map(val, minVal, maxVal, startX, endX);
    line(x, lineY - 6, x, lineY + 6);
  }
  
  // Plot the four numbers
  let numbers = [52134, 52089, 52178, 52156];
  let colors = [[255, 0, 0], [0, 150, 0], [0, 0, 255], [150, 0, 150]];
  
  for(let i = 0; i < numbers.length; i++) {
    let x = map(numbers[i], minVal, maxVal, startX, endX);
    
    fill(colors[i][0], colors[i][1], colors[i][2]);
    stroke(colors[i][0], colors[i][1], colors[i][2]);
    strokeWeight(2);
    circle(x, lineY, 10);
    
    textAlign(CENTER, BOTTOM);
    textSize(14);
    text(numbers[i].toLocaleString(), x, lineY - 15);
  }
  
  noLoop();
}
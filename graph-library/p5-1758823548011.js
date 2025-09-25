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
  text("Compare these five-digit numbers using the number line:", 20, 30);
  text("Which number is greater: 34,567 or 34,625?", 20, 60);
  
  // Draw number line
  let lineY = height/2 + 50;
  let startX = 100;
  let endX = width - 100;
  
  // Main number line
  stroke(0);
  strokeWeight(3);
  line(startX, lineY, endX, lineY);
  
  // Number line values from 34,500 to 34,700
  let minVal = 34500;
  let maxVal = 34700;
  let range = maxVal - minVal;
  
  // Major tick marks every 50 units
  strokeWeight(2);
  for(let val = minVal; val <= maxVal; val += 50) {
    let x = map(val, minVal, maxVal, startX, endX);
    line(x, lineY - 15, x, lineY + 15);
    
    // Labels for major ticks
    fill(0);
    textAlign(CENTER, TOP);
    textSize(14);
    text(val.toLocaleString(), x, lineY + 20);
  }
  
  // Minor tick marks every 10 units
  strokeWeight(1);
  for(let val = minVal; val <= maxVal; val += 10) {
    let x = map(val, minVal, maxVal, startX, endX);
    line(x, lineY - 8, x, lineY + 8);
  }
  
  // Plot the two numbers
  let num1 = 34567;
  let num2 = 34625;
  
  let x1 = map(num1, minVal, maxVal, startX, endX);
  let x2 = map(num2, minVal, maxVal, startX, endX);
  
  // Point for 34,567
  fill(255, 0, 0);
  strokeWeight(2);
  stroke(255, 0, 0);
  circle(x1, lineY, 12);
  fill(255, 0, 0);
  textAlign(CENTER, BOTTOM);
  textSize(16);
  text("34,567", x1, lineY - 20);
  
  // Point for 34,625
  fill(0, 0, 255);
  stroke(0, 0, 255);
  circle(x2, lineY, 12);
  fill(0, 0, 255);
  text("34,625", x2, lineY - 20);
  
  noLoop();
}
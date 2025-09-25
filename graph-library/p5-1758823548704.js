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
  text("Use the number line to find which five-digit number is closest to 67,500:", 20, 30);
  text("Options: 67,423   67,538   67,467   67,591", 20, 60);
  
  // Draw number line
  let lineY = height/2 + 50;
  let startX = 100;
  let endX = width - 100;
  
  // Main number line
  stroke(0);
  strokeWeight(3);
  line(startX, lineY, endX, lineY);
  
  // Number line values from 67,400 to 67,600
  let minVal = 67400;
  let maxVal = 67600;
  
  // Major tick marks every 40 units
  strokeWeight(2);
  for(let val = minVal; val <= maxVal; val += 40) {
    let x = map(val, minVal, maxVal, startX, endX);
    line(x, lineY - 15, x, lineY + 15);
    
    // Labels for major ticks
    fill(0);
    textAlign(CENTER, TOP);
    textSize(12);
    text(val.toLocaleString(), x, lineY + 20);
  }
  
  // Minor tick marks every 10 units
  strokeWeight(1);
  for(let val = minVal; val <= maxVal; val += 10) {
    let x = map(val, minVal, maxVal, startX, endX);
    line(x, lineY - 8, x, lineY + 8);
  }
  
  // Plot 67,500 as reference point
  let refNum = 67500;
  let refX = map(refNum, minVal, maxVal, startX, endX);
  
  fill(0);
  stroke(0);
  strokeWeight(3);
  rect(refX - 6, lineY - 6, 12, 12);
  textAlign(CENTER, BOTTOM);
  textSize(16);
  text("67,500", refX, lineY - 20);
  
  // Plot the four option numbers
  let numbers = [67423, 67538, 67467, 67591];
  let colors = [[255, 0, 0], [0, 150, 0], [0, 0, 255], [200, 100, 0]];
  
  for(let i = 0; i < numbers.length; i++) {
    let x = map(numbers[i], minVal, maxVal, startX, endX);
    
    fill(colors[i][0], colors[i][1], colors[i][2]);
    stroke(colors[i][0], colors[i][1], colors[i][2]);
    strokeWeight(2);
    circle(x, lineY, 10);
    
    textAlign(CENTER, TOP);
    textSize(14);
    text(numbers[i].toLocaleString(), x, lineY + 25);
  }
  
  noLoop();
}
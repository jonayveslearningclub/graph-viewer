function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  textSize(16);
  fill(0);
  text("Order these five-digit numbers from least to greatest:", 20, 30);
  text("63,541    63,145    63,451    63,514", 20, 55);
  
  // Number line from 63,000 to 64,000
  let lineY = 120;
  let lineStartX = 80;
  let lineEndX = 720;
  
  // Draw main number line
  stroke(0);
  strokeWeight(2);
  line(lineStartX, lineY, lineEndX, lineY);
  
  // Draw tick marks and labels for thousands
  textAlign(CENTER);
  textSize(12);
  for (let i = 0; i <= 10; i++) {
    let x = lineStartX + (i * (lineEndX - lineStartX) / 10);
    let value = 63000 + (i * 100);
    
    // Major tick marks
    line(x, lineY - 8, x, lineY + 8);
    
    // Labels every 200
    if (i % 2 === 0) {
      text(value, x, lineY + 25);
    }
  }
  
  // Mark the four numbers on the line
  let numbers = [63541, 63145, 63451, 63514];
  let colors = [[255, 0, 0], [0, 255, 0], [0, 0, 255], [255, 0, 255]];
  
  for (let i = 0; i < numbers.length; i++) {
    let pos = lineStartX + ((numbers[i] - 63000) / 1000) * (lineEndX - lineStartX);
    
    fill(colors[i][0], colors[i][1], colors[i][2]);
    noStroke();
    ellipse(pos, lineY, 10, 10);
    
    // Label above the point
    textAlign(CENTER);
    textSize(12);
    text(numbers[i].toLocaleString(), pos, lineY - 15);
  }
  
  // Base-10 blocks representation section
  fill(0);
  textAlign(LEFT);
  textSize(14);
  text("Show 63,145 using base-10 blocks:", 20, 180);
  
  // Draw base-10 blocks representation areas
  text("Ten thousands:", 20, 210);
  text("Thousands:", 20, 280);
  text("Hundreds:", 400, 210);
  text("Tens:", 400, 280);
  text("Ones:", 20, 350);
  
  // Empty boxes for student work
  stroke(0);
  strokeWeight(1);
  fill(255);
  
  // Ten thousands area
  rect(120, 190, 200, 50);
  
  // Thousands area  
  rect(120, 260, 200, 50);
  
  // Hundreds area
  rect(480, 190, 150, 50);
  
  // Tens area
  rect(480, 260, 150, 50);
  
  // Ones area
  rect(120, 330, 100, 40);
  
  // Comparison exercise
  fill(0);
  textSize(14);
  text("Compare using <, >, or =:", 20, 400);
  text("63,541 _____ 63,451", 20, 430);
  text("63,145 _____ 63,514", 20, 460);
  text("63,514 _____ 63,541", 20, 490);
  
  // Ordering exercise
  text("Write in order from least to greatest:", 20, 530);
  text("_____ < _____ < _____ < _____", 20, 560);
  
  noLoop();
}
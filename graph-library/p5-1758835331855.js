function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("1. What five-digit number is represented by the expanded form below?", 50, 30);
  text("30,000 + 7,000 + 200 + 80 + 5", 50, 60);
  
  // Number line from 36,000 to 39,000
  stroke(0);
  strokeWeight(2);
  line(100, 400, 700, 400);
  
  // Mark major intervals
  for (let i = 0; i <= 6; i++) {
    let x = 100 + i * 100;
    let num = 36000 + i * 500;
    line(x, 390, x, 410);
    fill(0);
    textAlign(CENTER);
    textSize(12);
    text(num.toLocaleString(), x, 430);
  }
  
  // Mark smaller intervals (hundreds)
  stroke(100);
  strokeWeight(1);
  for (let i = 0; i <= 30; i++) {
    let x = 100 + i * 20;
    line(x, 395, x, 405);
  }
  
  // Arrow pointing to approximate location (no answer shown)
  fill(255, 0, 0);
  noStroke();
  triangle(280, 370, 290, 370, 285, 380);
  
  // Place value chart
  fill(0);
  stroke(0);
  strokeWeight(1);
  rect(100, 150, 500, 180);
  
  // Headers
  textAlign(CENTER);
  textSize(14);
  text("Ten Thousands", 150, 170);
  text("Thousands", 250, 170);
  text("Hundreds", 350, 170);
  text("Tens", 450, 170);
  text("Ones", 550, 170);
  
  // Draw lines for place value chart
  line(100, 185, 600, 185);
  line(200, 150, 200, 330);
  line(300, 150, 300, 330);
  line(400, 150, 400, 330);
  line(500, 150, 500, 330);
  
  // Question parts
  textSize(12);
  textAlign(LEFT);
  text("a) Write the number in standard form: _____________", 50, 500);
  text("b) Write the number in word form: _____________", 50, 530);
  text("c) Mark the exact location of this number on the number line above", 50, 560);
  
  noLoop();
}
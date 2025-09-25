function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("2. Compare these representations of five-digit numbers:", 50, 30);
  
  // First representation - standard form
  fill(100, 150, 255);
  rect(50, 80, 200, 60);
  fill(0);
  textAlign(CENTER);
  textSize(18);
  text("52,461", 150, 115);
  
  // Second representation - expanded form
  fill(255, 150, 100);
  rect(300, 80, 250, 60);
  fill(0);
  textSize(14);
  text("40,000 + 9,000 + 700", 425, 105);
  text("+ 30 + 8", 425, 125);
  
  // Third representation - word form
  fill(150, 255, 150);
  rect(50, 180, 500, 80);
  fill(0);
  textAlign(CENTER);
  textSize(14);
  text("Sixty-three thousand, two hundred ninety-four", 300, 215);
  text("63,294", 300, 240);
  
  // Number line from 40,000 to 70,000
  stroke(0);
  strokeWeight(2);
  line(100, 350, 700, 350);
  
  // Mark major intervals every 5,000
  for (let i = 0; i <= 6; i++) {
    let x = 100 + i * 100;
    let num = 40000 + i * 5000;
    line(x, 340, x, 360);
    fill(0);
    textAlign(CENTER);
    textSize(11);
    text(num.toLocaleString(), x, 380);
  }
  
  // Mark smaller intervals (thousands)
  stroke(150);
  strokeWeight(1);
  for (let i = 0; i <= 30; i++) {
    let x = 100 + i * 20;
    line(x, 345, x, 355);
  }
  
  // Questions
  fill(0);
  textAlign(LEFT);
  textSize(14);
  text("a) Which number is the greatest? _____________", 50, 450);
  text("b) Which number is the smallest? _____________", 50, 480);
  text("c) Order all three numbers from least to greatest: _____________", 50, 510);
  text("d) Mark all three numbers on the number line above", 50, 540);
  
  noLoop();
}
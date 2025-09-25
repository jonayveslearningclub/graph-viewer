function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("3. Use the place value chart to answer the questions about 84,629:", 50, 30);
  
  // Place value chart
  fill(0);
  stroke(0);
  strokeWeight(2);
  rect(100, 80, 600, 120);
  
  // Column headers
  textAlign(CENTER);
  textSize(14);
  text("Ten", 150, 100);
  text("Thousands", 150, 115);
  text("Thousands", 250, 100);
  text("Hundreds", 350, 100);
  text("Tens", 450, 100);
  text("Ones", 550, 100);
  text("(Units)", 550, 115);
  
  // Draw vertical lines
  line(200, 80, 200, 200);
  line(300, 80, 300, 200);
  line(400, 80, 400, 200);
  line(500, 80, 500, 200);
  line(600, 80, 600, 200);
  
  // Draw horizontal line separating headers from digits
  line(100, 130, 700, 130);
  
  // The digits (showing the number)
  textSize(20);
  text("8", 150, 170);
  text("4", 250, 170);
  text("6", 350, 170);
  text("2", 450, 170);
  text("9", 550, 170);
  
  // Number line from 80,000 to 90,000
  stroke(0);
  strokeWeight(2);
  line(100, 300, 700, 300);
  
  // Mark major intervals every 2,000
  for (let i = 0; i <= 5; i++) {
    let x = 100 + i * 120;
    let num = 80000 + i * 2000;
    line(x, 290, x, 310);
    fill(0);
    textAlign(CENTER);
    textSize(11);
    text(num.toLocaleString(), x, 330);
  }
  
  // Mark smaller intervals (500s)
  stroke(150);
  strokeWeight(1);
  for (let i = 0; i <= 20; i++) {
    let x = 100 + i * 30;
    line(x, 295, x, 305);
  }
  
  // Questions
  fill(0);
  textAlign(LEFT);
  textSize(14);
  text("a) What digit is in the hundreds place? _______", 50, 380);
  text("b) What is the value of the 4 in this number? _____________", 50, 410);
  text("c) Round 84,629 to the nearest thousand: _____________", 50, 440);
  text("d) Write this number in expanded form: _____________", 50, 470);
  text("e) Mark the location of 84,629 on the number line above", 50, 500);
  
  noLoop();
}
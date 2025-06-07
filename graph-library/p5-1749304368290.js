function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  textSize(18);
  fill(0);
  text("Sarah starts with three $5 bills. She spends $7 on a book.", 20, 30);
  text("How many dollars does she have remaining?", 20, 55);
  
  // Draw three $5 bills
  fill(200, 150, 200);
  stroke(0);
  strokeWeight(2);
  
  // First $5 bill
  rect(100, 100, 120, 60);
  fill(0);
  textAlign(CENTER);
  textSize(20);
  text("$5", 160, 135);
  
  // Second $5 bill
  fill(200, 150, 200);
  rect(240, 100, 120, 60);
  fill(0);
  text("$5", 300, 135);
  
  // Third $5 bill
  fill(200, 150, 200);
  rect(380, 100, 120, 60);
  fill(0);
  text("$5", 440, 135);
  
  // Plus signs
  textSize(24);
  text("+", 200, 125);
  text("+", 340, 125);
  text("=", 520, 125);
  text("$15", 580, 135);
  
  // Draw book
  fill(100, 100, 200);
  rect(200, 220, 80, 100);
  fill(0);
  textAlign(CENTER);
  textSize(16);
  text("Book", 240, 275);
  text("$7", 240, 295);
  
  // Subtraction equation
  fill(0);
  textAlign(LEFT);
  textSize(22);
  text("$15 - $7 = ?", 350, 270);
  
  // Question mark for answer
  fill(255, 200, 100);
  stroke(0);
  strokeWeight(2);
  rect(450, 320, 100, 60);
  fill(0);
  textAlign(CENTER);
  textSize(28);
  text("?", 500, 355);
  
  noLoop();
}
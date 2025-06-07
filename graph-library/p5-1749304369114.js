function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  textSize(18);
  fill(0);
  text("Jake has two $10 bills and one $1 bill. He buys a toy for $12.", 20, 30);
  text("How much change should he receive?", 20, 55);
  
  // Draw two $10 bills
  fill(150, 200, 150);
  stroke(0);
  strokeWeight(2);
  
  // First $10 bill
  rect(80, 100, 140, 70);
  fill(0);
  textAlign(CENTER);
  textSize(20);
  text("$10", 150, 140);
  
  // Second $10 bill
  fill(150, 200, 150);
  rect(240, 100, 140, 70);
  fill(0);
  text("$10", 310, 140);
  
  // Draw $1 bill
  fill(200, 200, 150);
  rect(400, 100, 100, 70);
  fill(0);
  text("$1", 450, 140);
  
  // Addition to show total
  textSize(24);
  text("+", 200, 125);
  text("+", 360, 125);
  text("=", 520, 125);
  text("$21", 580, 140);
  
  // Draw toy
  fill(200, 100, 100);
  ellipse(200, 250, 100, 80);
  fill(0);
  textAlign(CENTER);
  textSize(16);
  text("Toy", 200, 255);
  text("$12", 200, 275);
  
  // Change calculation
  fill(0);
  textAlign(LEFT);
  textSize(22);
  text("$21 - $12 = ?", 350, 250);
  
  // Question mark for change
  fill(255, 255, 150);
  stroke(0);
  strokeWeight(2);
  rect(450, 300, 120, 70);
  fill(0);
  textAlign(CENTER);
  textSize(24);
  text("Change", 510, 330);
  text("?", 510, 350);
  
  noLoop();
}
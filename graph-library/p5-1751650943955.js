function setup() {
  createCanvas(800, 600);
  background(240);
}

function draw() {
  // Question text
  fill(0);
  textSize(16);
  text("3. Emma has 2 five-dollar bills, 5 loonies, and 12 quarters.", 20, 30);
  text("Does she have enough money to buy a toy that costs $23?", 20, 50);
  
  // Draw $5 bills (2 of them)
  fill(100, 100, 200);
  stroke(0);
  strokeWeight(2);
  rect(80, 90, 120, 60);
  rect(220, 90, 120, 60);
  fill(255);
  textSize(18);
  text("$5", 130, 125);
  text("$5", 270, 125);
  fill(0);
  textSize(12);
  text("Five Dollar Bills", 150, 170);
  
  // Draw loonies (5 of them)
  fill(255, 215, 0);
  stroke(0);
  strokeWeight(2);
  for(let i = 0; i < 5; i++) {
    circle(90 + i * 50, 220, 35);
    fill(0);
    textSize(10);
    text("$1", 82 + i * 50, 225);
    fill(255, 215, 0);
  }
  fill(0);
  textSize(12);
  text("Loonies", 90, 245);
  
  // Draw quarters (12 of them, arranged in 2 rows)
  fill(192, 192, 192);
  stroke(0);
  strokeWeight(2);
  for(let i = 0; i < 6; i++) {
    circle(70 + i * 35, 290, 25);
    fill(0);
    textSize(8);
    text("25¢", 62 + i * 35, 295);
    fill(192, 192, 192);
  }
  for(let i = 0; i < 6; i++) {
    circle(70 + i * 35, 330, 25);
    fill(0);
    textSize(8);
    text("25¢", 62 + i * 35, 335);
    fill(192, 192, 192);
  }
  fill(0);
  textSize(12);
  text("Quarters", 70, 355);
  
  // Toy price
  fill(255, 100, 100);
  stroke(0);
  strokeWeight(2);
  rect(450, 200, 100, 80);
  fill(0);
  textSize(16);
  text("TOY", 480, 230);
  text("$23", 480, 250);
  
  // Question prompt
  fill(0);
  textSize(14);
  text("Calculate Emma's total money and compare to $23", 80, 400);
  
  noLoop();
}
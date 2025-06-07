function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  textSize(18);
  fill(0);
  text("1. Count the total value of these coins:", 50, 40);
  
  // Draw coins - quarters, dimes, nickels, pennies
  // 3 quarters
  fill(200, 200, 200);
  stroke(0);
  strokeWeight(2);
  ellipse(150, 120, 60, 60);
  ellipse(230, 120, 60, 60);
  ellipse(310, 120, 60, 60);
  
  fill(0);
  textSize(14);
  textAlign(CENTER);
  text("25¢", 150, 125);
  text("25¢", 230, 125);
  text("25¢", 310, 125);
  
  // 4 dimes
  fill(220, 220, 220);
  ellipse(120, 220, 45, 45);
  ellipse(190, 220, 45, 45);
  ellipse(260, 220, 45, 45);
  ellipse(330, 220, 45, 45);
  
  fill(0);
  textSize(12);
  text("10¢", 120, 225);
  text("10¢", 190, 225);
  text("10¢", 260, 225);
  text("10¢", 330, 225);
  
  // 2 nickels
  fill(210, 210, 210);
  ellipse(180, 320, 50, 50);
  ellipse(270, 320, 50, 50);
  
  fill(0);
  textSize(13);
  text("5¢", 180, 325);
  text("5¢", 270, 325);
  
  // 6 pennies
  fill(180, 120, 80);
  ellipse(100, 420, 40, 40);
  ellipse(160, 420, 40, 40);
  ellipse(220, 420, 40, 40);
  ellipse(280, 420, 40, 40);
  ellipse(340, 420, 40, 40);
  ellipse(400, 420, 40, 40);
  
  fill(0);
  textSize(11);
  text("1¢", 100, 425);
  text("1¢", 160, 425);
  text("1¢", 220, 425);
  text("1¢", 280, 425);
  text("1¢", 340, 425);
  text("1¢", 400, 425);
  
  // Labels
  textAlign(LEFT);
  textSize(16);
  text("Quarters:", 50, 110);
  text("Dimes:", 50, 210);
  text("Nickels:", 50, 310);
  text("Pennies:", 50, 410);
  
  textSize(18);
  text("Total Value = _______", 50, 520);
  
  noLoop();
}
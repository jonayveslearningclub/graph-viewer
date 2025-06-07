function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  textSize(18);
  fill(0);
  text("3. Calculate the total value of these coins and bills:", 50, 40);
  
  // Draw money
  // 1 five dollar bill
  fill(150, 100, 150);
  stroke(0);
  strokeWeight(2);
  rect(150, 80, 140, 60);
  
  fill(0);
  textSize(20);
  textAlign(CENTER);
  text("$5", 220, 115);
  
  // 7 quarters
  fill(200, 200, 200);
  ellipse(80, 200, 52, 52);
  ellipse(140, 200, 52, 52);
  ellipse(200, 200, 52, 52);
  ellipse(260, 200, 52, 52);
  ellipse(320, 200, 52, 52);
  ellipse(380, 200, 52, 52);
  ellipse(440, 200, 52, 52);
  
  fill(0);
  textSize(12);
  text("25¢", 80, 205);
  text("25¢", 140, 205);
  text("25¢", 200, 205);
  text("25¢", 260, 205);
  text("25¢", 320, 205);
  text("25¢", 380, 205);
  text("25¢", 440, 205);
  
  // 1 nickel
  fill(210, 210, 210);
  ellipse(200, 300, 48, 48);
  
  fill(0);
  textSize(13);
  text("5¢", 200, 305);
  
  // 9 pennies
  fill(180, 120, 80);
  ellipse(80, 400, 36, 36);
  ellipse(130, 400, 36, 36);
  ellipse(180, 400, 36, 36);
  ellipse(230, 400, 36, 36);
  ellipse(280, 400, 36, 36);
  ellipse(330, 400, 36, 36);
  ellipse(380, 400, 36, 36);
  ellipse(430, 400, 36, 36);
  ellipse(480, 400, 36, 36);
  
  fill(0);
  textSize(10);
  text("1¢", 80, 405);
  text("1¢", 130, 405);
  text("1¢", 180, 405);
  text("1¢", 230, 405);
  text("1¢", 280, 405);
  text("1¢", 330, 405);
  text("1¢", 380, 405);
  text("1¢", 430, 405);
  text("1¢", 480, 405);
  
  // Labels
  textAlign(LEFT);
  textSize(16);
  text("Five Dollar Bill:", 50, 75);
  text("Quarters:", 50, 190);
  text("Nickel:", 50, 290);
  text("Pennies:", 50, 390);
  
  textSize(18);
  text("Total Value = $ _______", 50, 500);
  
  noLoop();
}
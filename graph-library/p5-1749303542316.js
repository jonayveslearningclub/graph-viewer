function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  textSize(18);
  fill(0);
  text("2. What is the total value of this money?", 50, 40);
  
  // Draw paper money and coins
  // 2 dollar bills
  fill(100, 180, 100);
  stroke(0);
  strokeWeight(2);
  rect(100, 80, 120, 50);
  rect(250, 80, 120, 50);
  
  fill(0);
  textSize(16);
  textAlign(CENTER);
  text("$1", 160, 110);
  text("$1", 310, 110);
  
  // 5 quarters
  fill(200, 200, 200);
  ellipse(120, 200, 55, 55);
  ellipse(200, 200, 55, 55);
  ellipse(280, 200, 55, 55);
  ellipse(360, 200, 55, 55);
  ellipse(440, 200, 55, 55);
  
  fill(0);
  textSize(13);
  text("25¢", 120, 205);
  text("25¢", 200, 205);
  text("25¢", 280, 205);
  text("25¢", 360, 205);
  text("25¢", 440, 205);
  
  // 3 dimes
  fill(220, 220, 220);
  ellipse(160, 300, 42, 42);
  ellipse(240, 300, 42, 42);
  ellipse(320, 300, 42, 42);
  
  fill(0);
  textSize(12);
  text("10¢", 160, 305);
  text("10¢", 240, 305);
  text("10¢", 320, 305);
  
  // 8 pennies
  fill(180, 120, 80);
  ellipse(100, 400, 38, 38);
  ellipse(150, 400, 38, 38);
  ellipse(200, 400, 38, 38);
  ellipse(250, 400, 38, 38);
  ellipse(300, 400, 38, 38);
  ellipse(350, 400, 38, 38);
  ellipse(400, 400, 38, 38);
  ellipse(450, 400, 38, 38);
  
  fill(0);
  textSize(10);
  text("1¢", 100, 405);
  text("1¢", 150, 405);
  text("1¢", 200, 405);
  text("1¢", 250, 405);
  text("1¢", 300, 405);
  text("1¢", 350, 405);
  text("1¢", 400, 405);
  text("1¢", 450, 405);
  
  // Labels
  textAlign(LEFT);
  textSize(16);
  text("Dollar Bills:", 50, 75);
  text("Quarters:", 50, 190);
  text("Dimes:", 50, 290);
  text("Pennies:", 50, 390);
  
  textSize(18);
  text("Total Amount = $ _______", 50, 480);
  
  noLoop();
}
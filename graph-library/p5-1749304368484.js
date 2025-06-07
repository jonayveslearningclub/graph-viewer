function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  textSize(18);
  fill(0);
  text("Marcus has a $20 bill. He buys a sandwich for $8 and a drink for $3.", 20, 30);
  text("How much money does he have left?", 20, 55);
  
  // Draw the $20 bill
  fill(150, 200, 150);
  stroke(0);
  strokeWeight(2);
  rect(150, 100, 200, 80);
  fill(0);
  textAlign(CENTER);
  textSize(24);
  text("$20", 250, 145);
  
  // Draw sandwich
  fill(200, 150, 100);
  ellipse(150, 250, 80, 60);
  fill(0);
  textAlign(CENTER);
  textSize(16);
  text("Sandwich", 150, 280);
  text("$8", 150, 295);
  
  // Draw drink
  fill(100, 150, 200);
  rect(220, 220, 40, 60);
  fill(0);
  text("Drink", 240, 295);
  text("$3", 240, 310);
  
  // Money equation visual
  fill(0);
  textAlign(LEFT);
  textSize(20);
  text("$20 - $8 - $3 = ?", 350, 250);
  
  // Draw remaining money as question marks
  fill(255, 255, 100);
  stroke(0);
  strokeWeight(2);
  rect(450, 300, 100, 60);
  fill(0);
  textAlign(CENTER);
  textSize(24);
  text("?", 500, 335);
  
  noLoop();
}
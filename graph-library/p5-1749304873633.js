function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("Sarah bought lunch with a $10 bill. She spent $7 on food.", 20, 30);
  text("How much change should she receive?", 20, 50);
  
  // Draw the $10 bill
  fill(180, 220, 180);
  stroke(0);
  strokeWeight(2);
  rect(200, 100, 160, 70);
  
  // Bill details
  fill(0);
  textSize(20);
  textAlign(CENTER);
  text("$10", 280, 135);
  textSize(10);
  text("TEN DOLLARS", 280, 148);
  
  // Draw food item
  fill(200, 150, 100);
  stroke(0);
  ellipse(500, 135, 80, 80);
  
  // Food price tag
  fill(255, 255, 100);
  rect(460, 90, 40, 25);
  fill(0);
  textSize(12);
  textAlign(CENTER);
  text("$7", 480, 105);
  
  // Labels
  fill(0);
  textSize(14);
  textAlign(CENTER);
  text("Sarah pays with:", 280, 90);
  text("Food costs:", 500, 200);
  
  noLoop();
}
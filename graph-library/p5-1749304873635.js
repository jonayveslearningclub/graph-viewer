function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("Jake has a $50 bill and wants to buy 2 video games for $15 each.", 20, 30);
  text("How much money will he have remaining?", 20, 50);
  
  // Draw the $50 bill
  fill(220, 180, 200);
  stroke(0);
  strokeWeight(2);
  rect(120, 120, 240, 100);
  
  // Bill details
  fill(0);
  textSize(28);
  textAlign(CENTER);
  text("$50", 240, 170);
  textSize(14);
  text("FIFTY DOLLARS", 240, 190);
  
  // Draw video games
  for(let i = 0; i < 2; i++) {
    fill(80, 80, 150);
    rect(450 + i * 90, 140, 70, 60);
    
    // Game price
    fill(255, 255, 0);
    rect(455 + i * 90, 120, 30, 20);
    fill(0);
    textSize(12);
    textAlign(CENTER);
    text("$15", 470 + i * 90, 133);
  }
  
  // Labels
  fill(0);
  textSize(14);
  textAlign(CENTER);
  text("Jake has:", 240, 110);
  text("Video games:", 520, 230);
  
  noLoop();
}
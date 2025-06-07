function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("Marcus has a $20 bill and needs to buy 3 notebooks that cost $4 each.", 20, 30);
  text("How much money will he have left?", 20, 50);
  
  // Draw the $20 bill
  fill(150, 200, 150);
  stroke(0);
  strokeWeight(2);
  rect(150, 100, 200, 80);
  
  // Bill details
  fill(0);
  textSize(24);
  textAlign(CENTER);
  text("$20", 250, 140);
  textSize(12);
  text("TWENTY DOLLARS", 250, 155);
  
  // Draw notebooks
  for(let i = 0; i < 3; i++) {
    fill(100, 150, 200);
    rect(450 + i * 80, 120, 60, 40);
    fill(0);
    textSize(14);
    textAlign(CENTER);
    text("$4", 480 + i * 80, 145);
  }
  
  // Labels
  fill(0);
  textSize(14);
  textAlign(CENTER);
  text("Marcus has:", 250, 90);
  text("Notebooks needed:", 560, 110);
  
  noLoop();
}
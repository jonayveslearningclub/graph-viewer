function setup() {
  createCanvas(800, 600);
  background(255);
  textAlign(CENTER);
  textSize(16);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(18);
  text("Find all the prime factors of 84", width/2, 30);
  
  // Create factor tree visualization
  textSize(14);
  
  // Level 1 - starting number
  fill(200, 200, 255);
  rect(width/2 - 20, 60, 40, 30);
  fill(0);
  text("84", width/2, 80);
  
  // Lines to level 2
  line(width/2 - 10, 90, width/2 - 60, 130);
  line(width/2 + 10, 90, width/2 + 60, 130);
  
  // Level 2
  fill(200, 200, 255);
  rect(width/2 - 80, 130, 40, 30);
  rect(width/2 + 40, 130, 40, 30);
  fill(0);
  text("4", width/2 - 60, 150);
  text("21", width/2 + 60, 150);
  
  // Lines from 4
  line(width/2 - 70, 160, width/2 - 100, 200);
  line(width/2 - 50, 160, width/2 - 20, 200);
  
  // Lines from 21
  line(width/2 + 50, 160, width/2 + 20, 200);
  line(width/2 + 70, 160, width/2 + 100, 200);
  
  // Level 3
  fill(200, 255, 200);
  rect(width/2 - 120, 200, 40, 30);
  rect(width/2 - 40, 200, 40, 30);
  rect(width/2, 200, 40, 30);
  rect(width/2 + 80, 200, 40, 30);
  
  fill(0);
  text("2", width/2 - 100, 220);
  text("2", width/2 - 20, 220);
  text("3", width/2 + 20, 220);
  text("7", width/2 + 100, 220);
  
  // Instructions
  textSize(14);
  text("Continue breaking down composite numbers until all factors are prime", width/2, 270);
  text("Circle the prime numbers when you find them", width/2, 290);
  
  noLoop();
}
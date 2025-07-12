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
  text("Which numbers from 15 to 25 are prime numbers?", width/2, 30);
  
  // Create number grid
  textSize(14);
  text("Test each number for prime or composite:", width/2, 70);
  
  // Draw grid of numbers 15-25
  let startX = 150;
  let startY = 100;
  let boxSize = 50;
  let spacing = 60;
  
  for(let i = 15; i <= 25; i++) {
    let col = (i - 15) % 6;
    let row = Math.floor((i - 15) / 6);
    
    let x = startX + col * spacing;
    let y = startY + row * spacing;
    
    // Draw box
    fill(255);
    stroke(0);
    strokeWeight(2);
    rect(x, y, boxSize, boxSize);
    
    // Draw number
    fill(0);
    noStroke();
    text(i, x + boxSize/2, y + boxSize/2 + 5);
  }
  
  // Instructions
  textSize(14);
  text("For each number, check if it has exactly two factors: 1 and itself", width/2, 250);
  text("If yes, it's prime. If it has more factors, it's composite.", width/2, 270);
  
  // Example work area
  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(100, 320, 600, 200);
  
  fill(0);
  noStroke();
  textAlign(LEFT);
  textSize(12);
  text("Show your work here:", 120, 340);
  text("15: factors are _______________", 120, 360);
  text("16: factors are _______________", 120, 380);
  text("17: factors are _______________", 120, 400);
  text("Continue for all numbers...", 120, 420);
  
  textAlign(CENTER);
  text("Prime numbers from 15 to 25: ________________", width/2, 550);
  
  noLoop();
}
function setup() {
  createCanvas(800, 600);
  background(255);
  noLoop();
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("What is the total value of these coins?", 50, 40);
  
  // Draw coins in groups
  let startX = 80;
  let startY = 100;
  
  // 2 half dollars
  for (let i = 0; i < 2; i++) {
    fill(180, 180, 180);
    stroke(0);
    strokeWeight(3);
    ellipse(startX + i * 100, startY, 90, 90);
    fill(0);
    textAlign(CENTER);
    textSize(14);
    text("50¢", startX + i * 100, startY + 5);
  }
  
  // 5 quarters
  startY = 220;
  for (let i = 0; i < 5; i++) {
    fill(192, 192, 192);
    stroke(0);
    strokeWeight(2);
    ellipse(startX + i * 90, startY, 75, 75);
    fill(0);
    textAlign(CENTER);
    textSize(13);
    text("25¢", startX + i * 90, startY + 4);
  }
  
  // 3 dimes
  startY = 330;
  for (let i = 0; i < 3; i++) {
    fill(220, 220, 220);
    stroke(0);
    strokeWeight(2);
    ellipse(startX + i * 100, startY, 60, 60);
    fill(0);
    textAlign(CENTER);
    textSize(12);
    text("10¢", startX + i * 100, startY + 4);
  }
  
  // 7 pennies
  startY = 440;
  for (let i = 0; i < 7; i++) {
    fill(205, 127, 50);
    stroke(0);
    strokeWeight(2);
    ellipse(startX + i * 80, startY, 50, 50);
    fill(0);
    textAlign(CENTER);
    textSize(10);
    text("1¢", startX + i * 80, startY + 3);
  }
  
  // Count labels
  fill(0);
  textAlign(LEFT);
  textSize(16);
  text("2 half dollars", 50, 520);
  text("5 quarters", 200, 520);
  text("3 dimes", 350, 520);
  text("7 pennies", 450, 520);
}
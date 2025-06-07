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
  text("Find the total value of this set of coins:", 50, 40);
  
  // Draw coins
  let coinX = 100;
  let coinY = 100;
  let spacing = 120;
  
  // 3 quarters
  for (let i = 0; i < 3; i++) {
    fill(192, 192, 192);
    stroke(0);
    strokeWeight(2);
    ellipse(coinX + i * spacing, coinY, 80, 80);
    fill(0);
    textAlign(CENTER);
    textSize(14);
    text("25¢", coinX + i * spacing, coinY + 5);
  }
  
  // 4 dimes
  coinY = 220;
  for (let i = 0; i < 4; i++) {
    fill(220, 220, 220);
    stroke(0);
    strokeWeight(2);
    ellipse(coinX + i * spacing, coinY, 60, 60);
    fill(0);
    textAlign(CENTER);
    textSize(12);
    text("10¢", coinX + i * spacing, coinY + 4);
  }
  
  // 6 nickels
  coinY = 330;
  for (let i = 0; i < 6; i++) {
    fill(200, 200, 200);
    stroke(0);
    strokeWeight(2);
    ellipse(coinX + i * 90, coinY, 55, 55);
    fill(0);
    textAlign(CENTER);
    textSize(11);
    text("5¢", coinX + i * 90, coinY + 4);
  }
  
  // 8 pennies
  coinY = 440;
  for (let i = 0; i < 8; i++) {
    fill(205, 127, 50);
    stroke(0);
    strokeWeight(2);
    ellipse(coinX + i * 80, coinY, 50, 50);
    fill(0);
    textAlign(CENTER);
    textSize(10);
    text("1¢", coinX + i * 80, coinY + 3);
  }
  
  // Labels
  fill(0);
  textAlign(LEFT);
  textSize(16);
  text("3 quarters", 50, 550);
  text("4 dimes", 200, 550);
  text("6 nickels", 350, 550);
  text("8 pennies", 500, 550);
}
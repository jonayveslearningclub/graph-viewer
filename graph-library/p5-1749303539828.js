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
  text("Calculate the total amount of money shown:", 50, 40);
  
  // Draw coin collections
  let coinX = 90;
  let coinY = 100;
  
  // 4 quarters
  for (let i = 0; i < 4; i++) {
    fill(192, 192, 192);
    stroke(0);
    strokeWeight(2);
    ellipse(coinX + i * 85, coinY, 75, 75);
    fill(0);
    textAlign(CENTER);
    textSize(13);
    text("25¢", coinX + i * 85, coinY + 4);
  }
  
  // 6 dimes
  coinY = 210;
  for (let i = 0; i < 6; i++) {
    fill(220, 220, 220);
    stroke(0);
    strokeWeight(2);
    ellipse(coinX + i * 75, coinY, 60, 60);
    fill(0);
    textAlign(CENTER);
    textSize(12);
    text("10¢", coinX + i * 75, coinY + 4);
  }
  
  // 9 nickels
  coinY = 310;
  for (let i = 0; i < 9; i++) {
    if (i < 5) {
      fill(200, 200, 200);
      stroke(0);
      strokeWeight(2);
      ellipse(coinX + i * 70, coinY, 55, 55);
      fill(0);
      textAlign(CENTER);
      textSize(11);
      text("5¢", coinX + i * 70, coinY + 4);
    } else {
      fill(200, 200, 200);
      stroke(0);
      strokeWeight(2);
      ellipse(coinX + (i-5) * 70, coinY + 70, 55, 55);
      fill(0);
      textAlign(CENTER);
      textSize(11);
      text("5¢", coinX + (i-5) * 70, coinY + 74);
    }
  }
  
  // 12 pennies
  coinY = 460;
  for (let i = 0; i < 12; i++) {
    if (i < 6) {
      fill(205, 127, 50);
      stroke(0);
      strokeWeight(2);
      ellipse(coinX + i * 65, coinY, 50, 50);
      fill(0);
      textAlign(CENTER);
      textSize(10);
      text("1¢", coinX + i * 65, coinY + 3);
    } else {
      fill(205, 127, 50);
      stroke(0);
      strokeWeight(2);
      ellipse(coinX + (i-6) * 65, coinY + 60, 50, 50);
      fill(0);
      textAlign(CENTER);
      textSize(10);
      text("1¢", coinX + (i-6) * 65, coinY + 63);
    }
  }
  
  // Labels
  fill(0);
  textAlign(LEFT);
  textSize(16);
  text("4 quarters, 6 dimes, 9 nickels, 12 pennies", 50, 570);
}
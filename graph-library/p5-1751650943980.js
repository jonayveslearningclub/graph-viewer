function setup() {
  createCanvas(800, 600);
  background(240);
}

function draw() {
  // Question text
  fill(0);
  textSize(16);
  text("1. Sarah has 3 toonies, 4 loonies, 6 quarters, and 8 dimes. How much money does she have in total?", 20, 30);
  
  // Draw Canadian coins and bills
  
  // Toonies (3 of them)
  fill(200, 180, 140);
  stroke(0);
  strokeWeight(2);
  for(let i = 0; i < 3; i++) {
    circle(80 + i * 60, 80, 40);
    fill(0);
    textSize(10);
    text("$2", 72 + i * 60, 85);
    fill(200, 180, 140);
  }
  fill(0);
  textSize(12);
  text("Toonies", 80, 110);
  
  // Loonies (4 of them)
  fill(255, 215, 0);
  stroke(0);
  strokeWeight(2);
  for(let i = 0; i < 4; i++) {
    circle(80 + i * 50, 160, 35);
    fill(0);
    textSize(10);
    text("$1", 72 + i * 50, 165);
    fill(255, 215, 0);
  }
  fill(0);
  textSize(12);
  text("Loonies", 80, 185);
  
  // Quarters (6 of them)
  fill(192, 192, 192);
  stroke(0);
  strokeWeight(2);
  for(let i = 0; i < 6; i++) {
    circle(70 + i * 40, 230, 25);
    fill(0);
    textSize(8);
    text("25¢", 62 + i * 40, 235);
    fill(192, 192, 192);
  }
  fill(0);
  textSize(12);
  text("Quarters", 70, 250);
  
  // Dimes (8 of them)
  fill(169, 169, 169);
  stroke(0);
  strokeWeight(2);
  for(let i = 0; i < 8; i++) {
    circle(65 + i * 35, 290, 20);
    fill(0);
    textSize(7);
    text("10¢", 59 + i * 35, 295);
    fill(169, 169, 169);
  }
  fill(0);
  textSize(12);
  text("Dimes", 65, 310);
  
  // Value labels
  fill(0);
  textSize(14);
  text("Count the total value of all coins:", 50, 350);
  
  noLoop();
}
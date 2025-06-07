function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("1. Sarah counted her coins and made this chart. How many more pennies than dimes does she have?", 20, 30);
  
  // Create bar chart
  let startX = 100;
  let startY = height - 100;
  let barWidth = 60;
  let spacing = 80;
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(startX - 20, startY, startX + 320, startY); // x-axis
  line(startX - 20, startY, startX - 20, startY - 200); // y-axis
  
  // Y-axis labels
  textAlign(RIGHT);
  textSize(12);
  for(let i = 0; i <= 10; i++) {
    let y = startY - (i * 20);
    text(i, startX - 25, y + 5);
    stroke(200);
    strokeWeight(1);
    line(startX - 20, y, startX + 320, y);
  }
  
  // Coin data
  let coins = ["Pennies", "Nickels", "Dimes", "Quarters"];
  let amounts = [8, 5, 3, 6];
  let colors = [color(139, 69, 19), color(192, 192, 192), color(169, 169, 169), color(255, 215, 0)];
  
  // Draw bars
  for(let i = 0; i < coins.length; i++) {
    let x = startX + (i * spacing);
    let barHeight = amounts[i] * 20;
    
    fill(colors[i]);
    stroke(0);
    strokeWeight(1);
    rect(x, startY - barHeight, barWidth, barHeight);
    
    // Bar labels
    fill(0);
    textAlign(CENTER);
    textSize(10);
    text(coins[i], x + barWidth/2, startY + 15);
    
    // Amount on top of bar
    textSize(14);
    text(amounts[i], x + barWidth/2, startY - barHeight - 5);
  }
  
  // Y-axis title
  push();
  translate(30, startY - 100);
  rotate(-PI/2);
  textAlign(CENTER);
  textSize(14);
  text("Number of Coins", 0, 0);
  pop();
  
  // X-axis title
  textAlign(CENTER);
  textSize(14);
  text("Types of Coins", startX + 160, startY + 40);
  
  noLoop();
}
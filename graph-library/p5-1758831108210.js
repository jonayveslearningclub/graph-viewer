function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Title
  fill(0);
  textSize(18);
  text("2. Compare these five-digit numbers using <, >, or =", 10, 30);
  
  // First comparison
  textSize(24);
  fill(50, 50, 200);
  text("67,842", 100, 120);
  
  fill(0);
  text("____", 220, 120);
  
  fill(200, 50, 50);
  text("67,824", 300, 120);
  
  // Second comparison
  fill(50, 200, 50);
  text("53,176", 100, 180);
  
  fill(0);
  text("____", 220, 180);
  
  fill(150, 75, 200);
  text("53,716", 300, 180);
  
  // Third comparison
  fill(200, 150, 50);
  text("91,403", 100, 240);
  
  fill(0);
  text("____", 220, 240);
  
  fill(75, 150, 150);
  text("91,403", 300, 240);
  
  // Number line for reference
  fill(0);
  textSize(16);
  text("Use the number line below to help:", 50, 320);
  
  stroke(0);
  strokeWeight(2);
  line(50, 380, 750, 380);
  
  // Major tick marks
  for (let i = 0; i <= 10; i++) {
    let x = 50 + i * 70;
    line(x, 370, x, 390);
    textAlign(CENTER);
    textSize(12);
    fill(0);
    text((50000 + i * 5000).toString(), x, 410);
  }
  
  // Minor tick marks
  stroke(150);
  strokeWeight(1);
  for (let i = 0; i <= 50; i++) {
    let x = 50 + i * 14;
    line(x, 375, x, 385);
  }
  
  noLoop();
}
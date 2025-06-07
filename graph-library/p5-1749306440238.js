function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  fill(0);
  textSize(18);
  text("3. Find the value of n when 2n + 9 = 25", 50, 40);
  
  // Show equation
  textSize(24);
  text("2n + 9 = 25", 300, 100);
  
  // Visual blocks representation
  fill(150, 200, 255);
  // Two n blocks
  rect(100, 200, 80, 60);
  rect(190, 200, 80, 60);
  
  fill(0);
  textAlign(CENTER);
  textSize(20);
  text("n", 140, 235);
  text("n", 230, 235);
  
  // Plus sign
  textSize(30);
  text("+", 300, 235);
  
  // Nine unit blocks (3x3 grid)
  fill(255, 200, 150);
  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
      rect(340 + i*25, 200 + j*20, 20, 15);
    }
  }
  
  // Equals sign
  fill(0);
  textSize(30);
  text("=", 450, 235);
  
  // 25 unit blocks (5x5 grid)
  fill(255, 180, 180);
  for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 5; j++) {
      rect(500 + i*20, 190 + j*16, 15, 12);
    }
  }
  
  textAlign(LEFT);
  textSize(16);
  text("Each small square = 1 unit", 50, 350);
  text("Solve by isolating n", 50, 380);
  
  noLoop();
}
function setup() {
  createCanvas(800, 600);
  background(240);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  text("2. Find all the factors of 48", 20, 30);
  
  // Create factor tree structure
  stroke(0);
  strokeWeight(2);
  
  // Draw circles for factor pairs
  let factorPairs = [[1, 48], [2, 24], [3, 16], [4, 12], [6, 8]];
  let yPos = 80;
  
  for (let i = 0; i < factorPairs.length; i++) {
    let x1 = 150;
    let x2 = 650;
    let y = yPos + i * 80;
    
    // Draw connecting line
    stroke(100);
    line(x1 + 30, y + 15, x2 - 30, y + 15);
    
    // Draw factor circles
    fill(150, 200, 255);
    stroke(0);
    strokeWeight(2);
    circle(x1, y, 50);
    circle(x2, y, 50);
    
    // Add factor numbers
    fill(0);
    textAlign(CENTER);
    textSize(16);
    text(factorPairs[i][0].toString(), x1, y + 5);
    text(factorPairs[i][1].toString(), x2, y + 5);
    
    // Show multiplication
    textAlign(LEFT);
    textSize(14);
    text(factorPairs[i][0] + " × " + factorPairs[i][1] + " = 48", 320, y + 5);
  }
  
  // Instructions
  fill(0);
  textAlign(LEFT);
  textSize(16);
  text("Find all factor pairs of 48:", 50, 60);
  text("Two numbers that multiply to give 48", 50, 500);
  
  // Visual array representation
  fill(100, 255, 100);
  stroke(0);
  strokeWeight(1);
  
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 8; col++) {
      rect(450 + col * 15, 450 + row * 15, 12, 12);
    }
  }
  
  text("48 squares arranged in 6 × 8", 450, 540);
  
  noLoop();
}
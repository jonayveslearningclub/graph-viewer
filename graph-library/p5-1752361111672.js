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
  text("List all factors of 36", width/2, 30);
  
  // Create factor pairs visualization
  textSize(16);
  text("Factor pairs of 36:", width/2, 70);
  
  // Draw boxes for factor pairs
  let startY = 100;
  let spacing = 60;
  
  // Box outlines for factor pairs
  fill(255);
  stroke(0);
  strokeWeight(2);
  
  for(let i = 0; i < 5; i++) {
    rect(width/2 - 120, startY + i * spacing, 80, 40);
    rect(width/2 + 40, startY + i * spacing, 80, 40);
    
    // Multiplication symbol
    fill(0);
    noStroke();
    text("×", width/2, startY + i * spacing + 25);
    text("= 36", width/2 + 150, startY + i * spacing + 25);
  }
  
  // First factor pair as example
  fill(0);
  text("1", width/2 - 80, startY + 25);
  text("36", width/2 + 80, startY + 25);
  
  // Instructions
  textSize(14);
  text("Find all number pairs that multiply to give 36", width/2, 450);
  text("Then list all unique factors in order from smallest to largest", width/2, 470);
  
  // Space for final answer
  fill(255);
  stroke(0);
  strokeWeight(2);
  rect(width/2 - 200, 500, 400, 40);
  fill(0);
  noStroke();
  text("All factors of 36: ________________", width/2, 525);
  
  noLoop();
}
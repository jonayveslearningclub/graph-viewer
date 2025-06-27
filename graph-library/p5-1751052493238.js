function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("Create a bar graph showing students' favorite sports. Each box = 1 vote.", 20, 30);
  text("Basketball = 6 boxes, Soccer = 4 boxes, Tennis = 3 boxes, Baseball = 5 boxes", 20, 55);
  text("Label and color your bars to match each sport!", 20, 80);
  
  // Draw grid for bar graph
  let startX = 100;
  let startY = 500;
  let boxSize = 25;
  let spacing = 120;
  
  // Grid lines (horizontal)
  stroke(200);
  for(let i = 0; i <= 8; i++) {
    line(50, startY - i * boxSize, 650, startY - i * boxSize);
  }
  
  // Y-axis labels
  fill(0);
  textSize(14);
  textAlign(RIGHT);
  for(let i = 0; i <= 8; i++) {
    text(i, 45, startY - i * boxSize + 5);
  }
  
  // Sport labels
  textAlign(CENTER);
  text("Basketball", startX, startY + 25);
  text("Soccer", startX + spacing, startY + 25);
  text("Tennis", startX + spacing * 2, startY + 25);
  text("Baseball", startX + spacing * 3, startY + 25);
  
  // Draw empty boxes for students to fill
  stroke(0);
  fill(255);
  
  // Basketball boxes (6)
  for(let i = 0; i < 6; i++) {
    rect(startX - 15, startY - (i + 1) * boxSize, boxSize, boxSize);
  }
  
  // Soccer boxes (4)
  for(let i = 0; i < 4; i++) {
    rect(startX + spacing - 15, startY - (i + 1) * boxSize, boxSize, boxSize);
  }
  
  // Tennis boxes (3)
  for(let i = 0; i < 3; i++) {
    rect(startX + spacing * 2 - 15, startY - (i + 1) * boxSize, boxSize, boxSize);
  }
  
  // Baseball boxes (5)
  for(let i = 0; i < 5; i++) {
    rect(startX + spacing * 3 - 15, startY - (i + 1) * boxSize, boxSize, boxSize);
  }
  
  // Axes
  stroke(0);
  strokeWeight(2);
  line(50, startY, 650, startY); // x-axis
  line(50, startY, 50, 300); // y-axis
  
  noLoop();
}
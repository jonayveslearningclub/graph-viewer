function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("Fill in the missing products in the 4 times table:", 20, 25);
  
  // Draw the multiplication table
  let startX = 100;
  let startY = 80;
  let cellSize = 60;
  
  // Table headers
  fill(150, 150, 255);
  noStroke();
  rect(startX, startY, cellSize * 2, cellSize);
  rect(startX + cellSize * 3, startY, cellSize * 2, cellSize);
  
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(16);
  text("4 × ?", startX + cellSize, startY + cellSize/2);
  text("= ?", startX + cellSize * 4, startY + cellSize/2);
  
  // Draw table rows
  let problems = [
    {mult: "4 × 3", answer: "", show: false},
    {mult: "4 × 5", answer: "20", show: true},
    {mult: "4 × 7", answer: "", show: false},
    {mult: "4 × 9", answer: "36", show: true},
    {mult: "4 × 12", answer: "", show: false}
  ];
  
  for (let i = 0; i < problems.length; i++) {
    let y = startY + (i + 1) * cellSize;
    
    // Problem cell
    fill(255, 200, 200);
    noStroke();
    rect(startX, y, cellSize * 2, cellSize);
    
    fill(0);
    text(problems[i].mult, startX + cellSize, y + cellSize/2);
    
    // Equals sign
    fill(200);
    noStroke();
    rect(startX + cellSize * 2, y, cellSize, cellSize);
    
    fill(0);
    text("=", startX + cellSize * 2.5, y + cellSize/2);
    
    // Answer cell
    if (problems[i].show) {
      fill(200, 255, 200);
      noStroke();
      rect(startX + cellSize * 3, y, cellSize * 2, cellSize);
      
      fill(0);
      text(problems[i].answer, startX + cellSize * 4, y + cellSize/2);
    } else {
      fill(255, 255, 150);
      noStroke();
      rect(startX + cellSize * 3, y, cellSize * 2, cellSize);
      
      stroke(0);
      strokeWeight(2);
      noFill();
      rect(startX + cellSize * 3, y, cellSize * 2, cellSize);
    }
  }
  
  noLoop();
}
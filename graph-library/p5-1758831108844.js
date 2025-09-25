function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Title
  fill(0);
  textSize(18);
  text("1. Write the five-digit number shown on the number line in expanded form.", 10, 30);
  
  // Number line
  stroke(0);
  strokeWeight(2);
  line(50, 300, 750, 300);
  
  // Major tick marks for thousands
  for (let i = 0; i <= 10; i++) {
    let x = 50 + i * 70;
    line(x, 290, x, 310);
    textAlign(CENTER);
    textSize(14);
    fill(0);
    text((30000 + i * 1000).toString(), x, 330);
  }
  
  // Minor tick marks for hundreds
  stroke(100);
  strokeWeight(1);
  for (let i = 0; i <= 50; i++) {
    let x = 50 + i * 14;
    line(x, 295, x, 305);
  }
  
  // Arrow pointing to specific number
  fill(255, 0, 0);
  stroke(255, 0, 0);
  strokeWeight(3);
  let arrowX = 50 + 4.7 * 70; // Points to 34700
  line(arrowX, 250, arrowX, 280);
  triangle(arrowX - 8, 280, arrowX + 8, 280, arrowX, 290);
  
  // Label for the arrow
  fill(255, 0, 0);
  textAlign(CENTER);
  textSize(16);
  text("This number", arrowX, 240);
  
  noLoop();
}
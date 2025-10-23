function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(18);
  text("2. What decimal value is represented by point B on the number line?", 50, 30);
  
  // Draw number line
  stroke(0);
  strokeWeight(3);
  line(100, 300, 700, 300);
  
  // Mark intervals from 4.0 to 5.0
  for (let i = 0; i <= 10; i++) {
    let x = 100 + (i * 60);
    line(x, 290, x, 310);
    
    // Label major marks
    if (i === 0) {
      fill(0);
      textSize(14);
      textAlign(CENTER);
      text("4.0", x, 330);
    } else if (i === 10) {
      text("5.0", x, 330);
    } else if (i === 5) {
      text("4.5", x, 330);
    }
  }
  
  // Mark point B at 4.7
  let pointBx = 100 + (7 * 60);
  fill(0, 0, 255);
  noStroke();
  ellipse(pointBx, 300, 12, 12);
  
  // Label point B
  fill(0);
  textSize(16);
  textAlign(CENTER);
  text("B", pointBx, 280);
  
  noLoop();
}
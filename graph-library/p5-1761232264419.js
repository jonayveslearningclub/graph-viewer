function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(18);
  text("1. What decimal value is represented by point A on the number line?", 50, 30);
  
  // Draw number line
  stroke(0);
  strokeWeight(3);
  line(100, 200, 700, 200);
  
  // Mark intervals from 2.0 to 3.0
  for (let i = 0; i <= 10; i++) {
    let x = 100 + (i * 60);
    line(x, 190, x, 210);
    
    // Label major marks
    if (i === 0) {
      fill(0);
      textSize(14);
      textAlign(CENTER);
      text("2.0", x, 230);
    } else if (i === 10) {
      text("3.0", x, 230);
    } else if (i === 5) {
      text("2.5", x, 230);
    }
  }
  
  // Mark point A at 2.3
  let pointAx = 100 + (3 * 60);
  fill(255, 0, 0);
  noStroke();
  ellipse(pointAx, 200, 12, 12);
  
  // Label point A
  fill(0);
  textSize(16);
  textAlign(CENTER);
  text("A", pointAx, 180);
  
  noLoop();
}
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(18);
  text("3. What decimal value is represented by point C on the number line?", 50, 30);
  
  // Draw number line
  stroke(0);
  strokeWeight(3);
  line(100, 350, 700, 350);
  
  // Mark intervals from 1.0 to 2.0
  for (let i = 0; i <= 10; i++) {
    let x = 100 + (i * 60);
    line(x, 340, x, 360);
    
    // Label major marks
    if (i === 0) {
      fill(0);
      textSize(14);
      textAlign(CENTER);
      text("1.0", x, 380);
    } else if (i === 10) {
      text("2.0", x, 380);
    } else if (i === 5) {
      text("1.5", x, 380);
    }
  }
  
  // Mark point C at 1.6
  let pointCx = 100 + (6 * 60);
  fill(0, 150, 0);
  noStroke();
  ellipse(pointCx, 350, 12, 12);
  
  // Label point C
  fill(0);
  textSize(16);
  textAlign(CENTER);
  text("C", pointCx, 330);
  
  noLoop();
}
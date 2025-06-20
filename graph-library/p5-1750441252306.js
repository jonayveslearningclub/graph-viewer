function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(18);
  text("Complete the pattern:", 50, 40);
  
  // Pattern: red, blue, red, red, blue, red, red, blue, red, ?
  let colors = ['red', 'blue', 'red', 'red', 'blue', 'red', 'red', 'blue', 'red'];
  let x = 70;
  let y = 150;
  
  for (let i = 0; i < colors.length; i++) {
    if (colors[i] === 'red') {
      fill(200, 50, 50);
    } else {
      fill(50, 50, 200);
    }
    
    stroke(0);
    strokeWeight(2);
    ellipse(x, y, 45, 45);
    
    x += 60;
  }
  
  // Question mark for the missing pattern element
  fill(255);
  stroke(0);
  strokeWeight(3);
  ellipse(x, y, 45, 45);
  fill(100, 200, 100);
  textSize(28);
  textAlign(CENTER);
  text("?", x, y + 8);
  
  // Numbers under each circle
  fill(0);
  textSize(14);
  textAlign(CENTER);
  let labelX = 70;
  for (let i = 0; i < colors.length + 1; i++) {
    text(i + 1, labelX, y + 40);
    labelX += 60;
  }
  
  noLoop();
}
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(18);
  text("What shape comes next?", 50, 40);
  
  // Pattern: big star, small star, big star, small star, small star, big star, small star, small star, ?
  let pattern = ['big', 'small', 'big', 'small', 'small', 'big', 'small', 'small'];
  let x = 80;
  let y = 150;
  
  for (let i = 0; i < pattern.length; i++) {
    fill(255, 200, 100);
    stroke(0);
    strokeWeight(2);
    
    if (pattern[i] === 'big') {
      drawStar(x, y, 25, 15);
    } else {
      drawStar(x, y, 15, 8);
    }
    
    x += 70;
  }
  
  // Question mark for the missing pattern element
  fill(255);
  stroke(0);
  strokeWeight(3);
  rect(x - 25, y - 25, 50, 50);
  fill(150, 100, 200);
  textSize(32);
  textAlign(CENTER);
  text("?", x, y + 8);
  
  // Position numbers
  fill(0);
  textSize(12);
  textAlign(CENTER);
  let labelX = 80;
  for (let i = 0; i < pattern.length + 1; i++) {
    text(i + 1, labelX, y + 50);
    labelX += 70;
  }
  
  noLoop();
}

function drawStar(x, y, outerRadius, innerRadius) {
  let angle = -PI / 2;
  beginShape();
  for (let i = 0; i < 10; i++) {
    let radius = (i % 2 === 0) ? outerRadius : innerRadius;
    let xPos = x + cos(angle) * radius;
    let yPos = y + sin(angle) * radius;
    vertex(xPos, yPos);
    angle += PI / 5;
  }
  endShape(CLOSE);
}
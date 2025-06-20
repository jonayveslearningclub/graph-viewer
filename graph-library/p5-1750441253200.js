function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(18);
  text("What comes next in this pattern?", 50, 40);
  
  // Pattern: circle, square, triangle, circle, square, triangle, circle, square, ?
  let shapes = ['circle', 'square', 'triangle', 'circle', 'square', 'triangle', 'circle', 'square'];
  let x = 80;
  let y = 120;
  
  for (let i = 0; i < shapes.length; i++) {
    fill(100, 150, 200);
    stroke(0);
    strokeWeight(2);
    
    if (shapes[i] === 'circle') {
      ellipse(x, y, 40, 40);
    } else if (shapes[i] === 'square') {
      rect(x - 20, y - 20, 40, 40);
    } else if (shapes[i] === 'triangle') {
      triangle(x, y - 20, x - 20, y + 20, x + 20, y + 20);
    }
    
    x += 70;
  }
  
  // Question mark for the missing pattern element
  fill(255);
  stroke(0);
  strokeWeight(3);
  rect(x - 25, y - 25, 50, 50);
  fill(255, 100, 100);
  textSize(36);
  textAlign(CENTER);
  text("?", x, y + 10);
  
  // Labels under each shape
  fill(0);
  textSize(12);
  textAlign(CENTER);
  let labelX = 80;
  for (let i = 0; i < shapes.length + 1; i++) {
    text(i + 1, labelX, y + 50);
    labelX += 70;
  }
  
  noLoop();
}
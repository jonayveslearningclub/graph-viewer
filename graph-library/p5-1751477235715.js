function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(18);
  text("Create a Venn diagram. Left circle: numbers less than 8", 50, 30);
  text("Right circle: even numbers. Use numbers 1-12.", 50, 55);
  
  // Draw left circle (numbers less than 8)
  noFill();
  stroke(0);
  strokeWeight(3);
  ellipse(300, 300, 200, 200);
  
  // Draw right circle (even numbers)
  ellipse(500, 300, 200, 200);
  
  // Label the circles
  fill(0);
  textSize(16);
  text("Numbers", 220, 180);
  text("less than 8", 220, 200);
  
  text("Even", 520, 180);
  text("Numbers", 520, 200);
  
  // Draw rectangle around both circles
  noFill();
  stroke(0);
  strokeWeight(2);
  rect(150, 150, 400, 300);
  
  noLoop();
}
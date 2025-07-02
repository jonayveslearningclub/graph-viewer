function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(18);
  text("Create a Venn diagram. Left circle: multiples of 3", 50, 30);
  text("Right circle: numbers greater than 15. Use numbers 1-25.", 50, 55);
  
  // Draw left circle (multiples of 3)
  noFill();
  stroke(0);
  strokeWeight(3);
  ellipse(280, 320, 220, 220);
  
  // Draw right circle (numbers greater than 15)
  ellipse(520, 320, 220, 220);
  
  // Label the circles
  fill(0);
  textSize(16);
  text("Multiples", 200, 180);
  text("of 3", 200, 200);
  
  text("Numbers", 560, 180);
  text("greater", 560, 200);
  text("than 15", 560, 220);
  
  // Draw rectangle around both circles
  noFill();
  stroke(0);
  strokeWeight(2);
  rect(130, 170, 450, 320);
  
  noLoop();
}
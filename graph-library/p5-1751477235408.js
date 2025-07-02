function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(18);
  text("Create a Venn diagram. Left circle: numbers divisible by 4", 50, 30);
  text("Right circle: numbers less than 20. Use numbers 1-30.", 50, 55);
  
  // Draw left circle (numbers divisible by 4)
  noFill();
  stroke(0);
  strokeWeight(3);
  ellipse(290, 310, 210, 210);
  
  // Draw right circle (numbers less than 20)
  ellipse(510, 310, 210, 210);
  
  // Label the circles
  fill(0);
  textSize(16);
  text("Numbers", 210, 170);
  text("divisible", 210, 190);
  text("by 4", 210, 210);
  
  text("Numbers", 550, 170);
  text("less than", 550, 190);
  text("20", 550, 210);
  
  // Draw rectangle around both circles
  noFill();
  stroke(0);
  strokeWeight(2);
  rect(140, 160, 420, 330);
  
  noLoop();
}
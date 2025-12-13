function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  textSize(16);
  fill(0);
  text("Students measured plant heights (cm) and hours of sunlight per day:", 50, 30);
  text("Plant A: 12cm, 3 hours  Plant B: 18cm, 5 hours  Plant C: 24cm, 7 hours", 50, 50);
  text("Which graph would best show if there is a relationship between these variables?", 50, 70);
  text("A) Circle graph  B) Scatter plot  C) Bar graph  D) Line plot", 50, 90);
  
  // Data organization
  textSize(14);
  text("Data pairs (Height, Sunlight):", 100, 140);
  text("(12, 3)  (18, 5)  (24, 7)", 100, 160);
  
  // Graph selection hints
  textSize(12);
  text("Consider:", 100, 200);
  text("• Do we have two different measurements for each plant?", 120, 220);
  text("• Are we looking for a pattern or relationship?", 120, 240);
  text("• Do we want to see if one variable affects the other?", 120, 260);
  
  // Sample graph frameworks
  stroke(0);
  strokeWeight(1);
  
  // Framework 1
  noFill();
  rect(80, 320, 120, 100);
  text("Two-variable", 90, 310);
  text("comparison", 90, 435);
  
  // Framework 2  
  rect(250, 320, 120, 100);
  text("Category", 270, 310);
  text("totals", 270, 435);
  
  // Framework 3
  circle(450, 370, 80);
  text("Part-to-whole", 410, 450);
  
  // Framework 4
  rect(550, 320, 120, 100);
  text("Frequency", 570, 310);
  text("count", 570, 435);
  
  noLoop();
}
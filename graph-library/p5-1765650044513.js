function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  textSize(16);
  fill(0);
  text("A teacher recorded test scores over 6 weeks: 78, 82, 85, 83, 87, 90", 50, 30);
  text("Which graph would best show the trend in test scores over time?", 50, 50);
  text("A) Bar graph  B) Histogram  C) Line graph  D) Box plot", 50, 70);
  
  // Data table
  textSize(14);
  text("Week:  1   2   3   4   5   6", 100, 120);
  text("Score: 78  82  85  83  87  90", 100, 140);
  
  // Graph type considerations
  textSize(12);
  text("Think about:", 100, 180);
  text("• Does this data show change over time?", 120, 200);
  text("• Are we comparing categories or showing trends?", 120, 220);
  text("• What pattern might we want to see?", 120, 240);
  
  // Visual reminder boxes
  stroke(0);
  strokeWeight(1);
  noFill();
  rect(100, 300, 150, 80);
  text("Shows trends", 110, 320);
  text("over time", 110, 340);
  
  rect(300, 300, 150, 80);
  text("Compares", 310, 320);
  text("categories", 310, 340);
  
  rect(500, 300, 150, 80);
  text("Shows", 510, 320);
  text("distribution", 510, 340);
  
  noLoop();
}
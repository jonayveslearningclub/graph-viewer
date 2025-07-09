function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  // Question text
  fill(0);
  textSize(20);
  text("1. Calculate the volume of a cylinder with radius 4 units and height 9 units.", 50, 40);
  
  // Draw cylinder
  fill(200, 220, 255);
  stroke(0);
  strokeWeight(2);
  
  // Main cylinder body
  rect(width/2 - 80, height/2 - 60, 160, 120);
  
  // Top ellipse
  ellipse(width/2, height/2 - 60, 160, 40);
  
  // Bottom ellipse (visible part)
  arc(width/2, height/2 + 60, 160, 40, 0, PI);
  
  // Dashed lines for hidden bottom
  stroke(100);
  strokeWeight(1);
  drawingContext.setLineDash([5, 5]);
  arc(width/2, height/2 + 60, 160, 40, PI, TWO_PI);
  drawingContext.setLineDash([]);
  
  // Labels
  fill(0);
  textSize(16);
  text("r = 4", width/2 + 90, height/2 - 50);
  text("h = 9", width/2 - 120, height/2);
  
  // Dimension lines
  stroke(0);
  strokeWeight(1);
  line(width/2, height/2 - 60, width/2 + 80, height/2 - 60);
  line(width/2 + 80, height/2 - 60, width/2 + 80, height/2 - 50);
  
  line(width/2 - 80, height/2 - 60, width/2 - 80, height/2 + 60);
  line(width/2 - 80, height/2 + 60, width/2 - 90, height/2 + 60);
  
  // Formula reminder
  textSize(14);
  text("Volume = &#960;r&#178;h", 50, height - 50);
  
  noLoop();
}
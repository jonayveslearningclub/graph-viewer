function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  // Question text
  fill(0);
  textSize(20);
  text("3. Calculate the volume of a cone with radius 5 units and height 12 units.", 50, 40);
  
  // Draw cone
  fill(255, 220, 200);
  stroke(0);
  strokeWeight(2);
  
  let coneBase = 200;
  let coneHeight = 180;
  let baseY = height/2 + 80;
  let tipY = baseY - coneHeight;
  
  // Cone body (triangle)
  triangle(width/2 - coneBase/2, baseY,
           width/2 + coneBase/2, baseY,
           width/2, tipY);
  
  // Base ellipse (visible part)
  arc(width/2, baseY, coneBase, 50, 0, PI);
  
  // Hidden base edge
  stroke(100);
  strokeWeight(1);
  drawingContext.setLineDash([5, 5]);
  arc(width/2, baseY, coneBase, 50, PI, TWO_PI);
  drawingContext.setLineDash([]);
  
  // Labels and dimension lines
  stroke(0);
  strokeWeight(1);
  
  // Radius line
  line(width/2, baseY, width/2 + coneBase/2, baseY);
  
  // Height line
  line(width/2, tipY, width/2, baseY);
  line(width/2, tipY, width/2 - 20, tipY);
  
  // Labels
  fill(0);
  textSize(16);
  text("r = 5", width/2 + coneBase/4, baseY - 10);
  text("h = 12", width/2 - 40, tipY + coneHeight/2);
  
  // Formula reminder
  textSize(14);
  text("Volume = (1/3)&#960;r&#178;h", 50, height - 50);
  
  noLoop();
}
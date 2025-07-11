function setup() {
  createCanvas(800, 600);
  background(240);
}

function draw() {
  // Title
  fill(0);
  textSize(16);
  text("Which net will fold to make a triangular prism?", 20, 30);
  
  stroke(0);
  strokeWeight(2);
  
  // Net A label
  fill(0);
  textSize(14);
  text("Net A", 100, 70);
  
  // Draw Net A - correct triangular prism net
  fill(255);
  // Central rectangle
  rect(100, 80, 120, 60);
  // Top triangle
  triangle(130, 80, 160, 50, 190, 80);
  // Bottom triangle  
  triangle(130, 140, 160, 170, 190, 140);
  // Side rectangles
  rect(100, 200, 120, 40);
  rect(100, 250, 120, 40);
  
  // Net B label
  fill(0);
  text("Net B", 350, 70);
  
  // Draw Net B - incorrect arrangement
  fill(255);
  // Rectangle base
  rect(350, 80, 100, 50);
  // Triangles on sides
  triangle(320, 80, 350, 105, 320, 130);
  triangle(450, 80, 480, 105, 450, 130);
  // Additional rectangle
  rect(350, 140, 100, 30);
  
  // Net C label
  fill(0);
  text("Net C", 550, 70);
  
  // Draw Net C - another incorrect arrangement  
  fill(255);
  // Central triangle
  triangle(580, 80, 610, 50, 640, 80);
  // Rectangles around triangle
  rect(550, 80, 30, 60);
  rect(580, 80, 60, 30);
  rect(610, 80, 30, 60);
  // Bottom rectangle
  rect(580, 150, 60, 40);
  
  // Add fold lines as dashed lines
  stroke(150);
  strokeWeight(1);
  drawingContext.setLineDash([5, 5]);
  
  // Net A fold lines
  line(130, 80, 190, 80);
  line(130, 140, 190, 140);
  line(100, 140, 220, 140);
  line(100, 200, 220, 200);
  line(100, 250, 220, 250);
  
  // Net B fold lines
  line(350, 80, 350, 130);
  line(450, 80, 450, 130);
  line(350, 130, 450, 130);
  line(350, 140, 450, 140);
  
  // Net C fold lines
  line(580, 80, 610, 50);
  line(610, 50, 640, 80);
  line(580, 80, 580, 110);
  line(640, 80, 640, 110);
  line(580, 110, 640, 110);
  
  drawingContext.setLineDash([]);
  
  noLoop();
}
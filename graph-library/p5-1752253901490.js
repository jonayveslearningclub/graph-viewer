function setup() {
  createCanvas(800, 600);
  background(240);
}

function draw() {
  // Title
  fill(0);
  textSize(16);
  text("Which net will fold to make a square pyramid?", 20, 30);
  
  stroke(0);
  strokeWeight(2);
  
  // Net A label
  fill(0);
  textSize(14);
  text("Net A", 120, 70);
  
  // Draw Net A - square with triangles on opposite sides (incorrect)
  fill(255);
  // Central square
  rect(120, 120, 80, 80);
  // Triangles on opposite sides only
  triangle(160, 120, 120, 90, 200, 90);
  triangle(160, 200, 120, 230, 200, 230);
  
  // Net B label
  fill(0);
  text("Net B", 350, 70);
  
  // Draw Net B - correct square pyramid net
  fill(255);
  // Central square
  rect(350, 120, 80, 80);
  // Four triangles on all sides
  triangle(390, 120, 350, 90, 430, 90);
  triangle(430, 160, 460, 120, 460, 200);
  triangle(390, 200, 350, 230, 430, 230);
  triangle(350, 160, 320, 120, 320, 200);
  
  // Net C label
  fill(0);
  text("Net C", 580, 70);
  
  // Draw Net C - triangles in line formation (incorrect)
  fill(255);
  // Square base
  rect(580, 150, 60, 60);
  // Triangles in a row
  triangle(550, 150, 580, 120, 580, 180);
  triangle(580, 120, 610, 90, 610, 150);
  triangle(610, 90, 640, 120, 670, 90);
  triangle(640, 120, 670, 150, 640, 180);
  
  // Add fold lines as dashed lines
  stroke(150);
  strokeWeight(1);
  drawingContext.setLineDash([5, 5]);
  
  // Net A fold lines
  line(120, 120, 200, 120);
  line(120, 200, 200, 200);
  line(160, 90, 160, 120);
  line(160, 200, 160, 230);
  
  // Net B fold lines
  line(350, 120, 430, 120);
  line(350, 200, 430, 200);
  line(350, 120, 350, 200);
  line(430, 120, 430, 200);
  line(390, 90, 390, 120);
  line(390, 200, 390, 230);
  line(320, 160, 350, 160);
  line(430, 160, 460, 160);
  
  // Net C fold lines
  line(580, 120, 610, 120);
  line(610, 90, 640, 120);
  line(580, 150, 580, 180);
  line(610, 120, 610, 150);
  line(640, 120, 640, 180);
  
  drawingContext.setLineDash([]);
  
  noLoop();
}
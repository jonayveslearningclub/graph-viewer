function setup() {
  createCanvas(800, 600);
  background(240);
}

function draw() {
  // Title
  fill(0);
  textSize(16);
  text("Which net will fold to make a cube?", 20, 30);
  
  // Net A - Cross shape (correct cube net)
  fill(255);
  stroke(0);
  strokeWeight(2);
  
  // Net A label
  fill(0);
  textSize(14);
  text("Net A", 120, 70);
  
  // Draw Net A - cross pattern
  fill(255);
  let squareSize = 40;
  // Vertical part
  rect(120, 80, squareSize, squareSize);
  rect(120, 120, squareSize, squareSize);
  rect(120, 160, squareSize, squareSize);
  rect(120, 200, squareSize, squareSize);
  // Horizontal parts
  rect(80, 120, squareSize, squareSize);
  rect(160, 120, squareSize, squareSize);
  
  // Net B label
  fill(0);
  text("Net B", 320, 70);
  
  // Draw Net B - L shape (not a cube net)
  fill(255);
  rect(320, 80, squareSize, squareSize);
  rect(320, 120, squareSize, squareSize);
  rect(320, 160, squareSize, squareSize);
  rect(360, 160, squareSize, squareSize);
  rect(400, 160, squareSize, squareSize);
  
  // Net C label
  fill(0);
  text("Net C", 520, 70);
  
  // Draw Net C - zigzag pattern (not a cube net)
  fill(255);
  rect(520, 80, squareSize, squareSize);
  rect(560, 80, squareSize, squareSize);
  rect(560, 120, squareSize, squareSize);
  rect(600, 120, squareSize, squareSize);
  rect(600, 160, squareSize, squareSize);
  rect(640, 160, squareSize, squareSize);
  
  // Add fold lines as dashed lines
  stroke(150);
  strokeWeight(1);
  drawingContext.setLineDash([5, 5]);
  
  // Net A fold lines
  line(120, 120, 200, 120);
  line(120, 160, 200, 160);
  line(120, 200, 160, 200);
  line(80, 120, 80, 160);
  line(160, 120, 160, 160);
  
  // Net B fold lines  
  line(320, 120, 320, 200);
  line(320, 160, 440, 160);
  line(360, 160, 360, 200);
  line(400, 160, 400, 200);
  
  // Net C fold lines
  line(520, 80, 600, 80);
  line(560, 80, 560, 120);
  line(560, 120, 640, 120);
  line(600, 120, 600, 160);
  line(600, 160, 680, 160);
  
  drawingContext.setLineDash([]);
  
  noLoop();
}
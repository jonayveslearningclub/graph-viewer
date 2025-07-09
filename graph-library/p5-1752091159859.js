function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  // Question text
  fill(0);
  textSize(20);
  text("2. Find the surface area of a cube with side length 6 units.", 50, 40);
  
  // Draw cube in 3D perspective
  fill(220, 240, 255);
  stroke(0);
  strokeWeight(2);
  
  let cubeSize = 120;
  let offsetX = 30;
  let offsetY = -30;
  
  // Front face
  rect(width/2 - cubeSize/2, height/2 - cubeSize/2, cubeSize, cubeSize);
  
  // Top face (parallelogram)
  quad(width/2 - cubeSize/2, height/2 - cubeSize/2,
       width/2 - cubeSize/2 + offsetX, height/2 - cubeSize/2 + offsetY,
       width/2 + cubeSize/2 + offsetX, height/2 - cubeSize/2 + offsetY,
       width/2 + cubeSize/2, height/2 - cubeSize/2);
  
  // Right face
  quad(width/2 + cubeSize/2, height/2 - cubeSize/2,
       width/2 + cubeSize/2 + offsetX, height/2 - cubeSize/2 + offsetY,
       width/2 + cubeSize/2 + offsetX, height/2 + cubeSize/2 + offsetY,
       width/2 + cubeSize/2, height/2 + cubeSize/2);
  
  // Hidden edges as dashed lines
  stroke(100);
  strokeWeight(1);
  drawingContext.setLineDash([5, 5]);
  
  // Back edges
  line(width/2 - cubeSize/2 + offsetX, height/2 - cubeSize/2 + offsetY,
       width/2 - cubeSize/2 + offsetX, height/2 + cubeSize/2 + offsetY);
  line(width/2 - cubeSize/2 + offsetX, height/2 + cubeSize/2 + offsetY,
       width/2 + cubeSize/2 + offsetX, height/2 + cubeSize/2 + offsetY);
  line(width/2 - cubeSize/2 + offsetX, height/2 + cubeSize/2 + offsetY,
       width/2 - cubeSize/2, height/2 + cubeSize/2);
  
  drawingContext.setLineDash([]);
  
  // Labels
  fill(0);
  textSize(16);
  text("6", width/2 - 10, height/2 + cubeSize/2 + 25);
  text("6", width/2 + cubeSize/2 + 15, height/2 + 10);
  text("6", width/2 + 10, height/2 - cubeSize/2 - 10);
  
  // Formula reminder
  textSize(14);
  text("Surface Area = 6s&#178;", 50, height - 50);
  
  noLoop();
}
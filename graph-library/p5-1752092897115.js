function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("1. Which net will fold into a cube?", 20, 30);
  
  // Net A - Cross shape (cube net)
  fill(220);
  stroke(0);
  strokeWeight(2);
  
  // Net A
  textSize(16);
  fill(0);
  text("Net A", 80, 80);
  
  fill(220);
  // Cross pattern
  rect(100, 100, 40, 40); // top
  rect(60, 140, 40, 40);  // left
  rect(100, 140, 40, 40); // center
  rect(140, 140, 40, 40); // right
  rect(100, 180, 40, 40); // bottom
  rect(100, 220, 40, 40); // bottom extension
  
  // Net B - L shape (not a cube)
  fill(0);
  text("Net B", 280, 80);
  
  fill(200);
  rect(300, 100, 40, 40);
  rect(300, 140, 40, 40);
  rect(300, 180, 40, 40);
  rect(340, 180, 40, 40);
  rect(380, 180, 40, 40);
  
  // Net C - T shape with extension (not a cube)
  fill(0);
  text("Net C", 480, 80);
  
  fill(180);
  rect(500, 100, 40, 40); // top
  rect(460, 140, 40, 40); // left
  rect(500, 140, 40, 40); // center
  rect(540, 140, 40, 40); // right
  rect(500, 180, 40, 40); // bottom
  rect(540, 180, 40, 40); // extra square
  
  noLoop();
}
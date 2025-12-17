function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  textSize(18);
  fill(0);
  text("Find the area and perimeter of parallelogram EFGH with base 9 units and height 6 units.", 50, 30);
  
  // Draw parallelogram
  stroke(0);
  strokeWeight(2);
  fill(220, 255, 220);
  quad(150, 300, 420, 300, 480, 180, 210, 180); // Parallelogram shape
  
  // Label vertices
  textSize(16);
  fill(255, 0, 0);
  text("E", 140, 315);
  text("F", 425, 315);
  text("G", 485, 165);
  text("H", 200, 165);
  
  // Base label
  fill(0);
  textSize(14);
  text("9 units", 270, 325);
  
  // Height label and line
  text("6 units", 105, 240);
  stroke(150);
  strokeWeight(1);
  line(120, 180, 120, 300);
  
  // Height indicator arrows
  line(115, 185, 120, 180);
  line(125, 185, 120, 180);
  line(115, 295, 120, 300);
  line(125, 295, 120, 300);
  
  // Base arrows
  line(150, 320, 420, 320);
  line(155, 315, 150, 320);
  line(155, 325, 150, 320);
  line(415, 315, 420, 320);
  line(415, 325, 420, 320);
  
  // Side length indication
  textSize(12);
  text("Side length needed", 500, 240);
  text("for perimeter", 500, 255);
  
  // Formulas
  textSize(16);
  fill(0, 0, 150);
  text("Area = base × height", 100, 450);
  text("Perimeter = 2(base + side length)", 100, 480);
  
  noLoop();
}
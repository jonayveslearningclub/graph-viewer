function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  textSize(16);
  fill(0);
  text("2. Quadrilateral DEFG is translated 4 units left and 3 units up.", 10, 25);
  text("What are the coordinates of the translated quadrilateral D'E'F'G'?", 10, 45);
  
  // Set up coordinate system
  translate(400, 300);
  
  // Draw grid
  stroke(200);
  strokeWeight(1);
  for (let i = -10; i <= 10; i++) {
    line(i * 30, -300, i * 30, 300);
    line(-300, i * 30, 300, i * 30);
  }
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(-300, 0, 300, 0);
  line(0, -300, 0, 300);
  
  // Label axes
  fill(0);
  textSize(12);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, i * 30 - 3, 15);
      text(i, -15, -i * 30 + 3);
    }
  }
  text("0", -8, 15);
  
  // Draw original quadrilateral DEFG
  stroke(0, 0, 255);
  strokeWeight(2);
  fill(0, 0, 255, 100);
  quad(7 * 30, -2 * 30, 9 * 30, -2 * 30, 8 * 30, -5 * 30, 6 * 30, -4 * 30);
  
  // Label original quadrilateral vertices
  fill(0, 0, 255);
  textSize(14);
  text("D(7, 2)", 7 * 30 + 5, -2 * 30 - 5);
  text("E(9, 2)", 9 * 30 + 5, -2 * 30 - 5);
  text("F(8, 5)", 8 * 30 + 5, -5 * 30 - 5);
  text("G(6, 4)", 6 * 30 - 25, -4 * 30 - 5);
  
  // Draw points
  fill(0, 0, 255);
  ellipse(7 * 30, -2 * 30, 8, 8);
  ellipse(9 * 30, -2 * 30, 8, 8);
  ellipse(8 * 30, -5 * 30, 8, 8);
  ellipse(6 * 30, -4 * 30, 8, 8);
  
  noLoop();
}
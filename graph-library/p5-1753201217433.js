function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  fill(0);
  textSize(16);
  text("Find the coordinates of point C after reflecting triangle ABC across the y-axis.", 10, 25);
  text("Given: A(3, 2), B(5, 7), C(8, 4)", 10, 45);
  
  // Set up coordinate system
  translate(width/2, height/2);
  
  // Draw grid
  stroke(220);
  for (let i = -10; i <= 10; i++) {
    line(i * 20, -200, i * 20, 200);
    line(-200, i * 20, 200, i * 20);
  }
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(-200, 0, 200, 0); // x-axis
  line(0, -200, 0, 200); // y-axis
  
  // Label axes
  fill(0);
  textSize(12);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, i * 20 - 3, 15); // x-axis labels
      text(i, -15, -i * 20 + 3); // y-axis labels (negative because y increases downward)
    }
  }
  text("0", -8, 15);
  
  // Original triangle ABC
  fill(100, 150, 255);
  stroke(0);
  strokeWeight(2);
  let Ax = 3 * 20, Ay = -2 * 20;
  let Bx = 5 * 20, By = -7 * 20;
  let Cx = 8 * 20, Cy = -4 * 20;
  
  triangle(Ax, Ay, Bx, By, Cx, Cy);
  
  // Label original points
  fill(0);
  textSize(14);
  text("A(3, 2)", Ax + 5, Ay - 5);
  text("B(5, 7)", Bx + 5, By - 5);
  text("C(8, 4)", Cx + 5, Cy - 5);
  
  // Draw y-axis reflection line in red
  stroke(255, 0, 0);
  strokeWeight(3);
  line(0, -200, 0, 200);
  fill(255, 0, 0);
  text("y-axis", 5, -180);
  
  noLoop();
}
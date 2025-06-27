function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("Triangle ABC has vertices at A(2, 4), B(6, 1), and C(3, 7).", 20, 30);
  text("Plot the triangle on the coordinate plane and label each vertex.", 20, 55);
  
  // Set up coordinate system
  let centerX = width / 2;
  let centerY = height / 2;
  let scale = 20;
  
  // Draw grid
  stroke(220);
  strokeWeight(1);
  for(let i = -10; i <= 10; i++) {
    line(centerX + i * scale, centerY - 10 * scale, centerX + i * scale, centerY + 10 * scale);
    line(centerX - 10 * scale, centerY + i * scale, centerX + 10 * scale, centerY + i * scale);
  }
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(centerX - 10 * scale, centerY, centerX + 10 * scale, centerY); // x-axis
  line(centerX, centerY - 10 * scale, centerX, centerY + 10 * scale); // y-axis
  
  // Label axes
  fill(0);
  textAlign(CENTER);
  textSize(12);
  for(let i = -10; i <= 10; i++) {
    if(i !== 0) {
      text(i, centerX + i * scale, centerY + 15);
      text(i, centerX - 15, centerY - i * scale + 5);
    }
  }
  text("0", centerX - 10, centerY + 15);
  
  // Plot points
  fill(255, 0, 0);
  stroke(0);
  strokeWeight(1);
  
  // Point A(2, 4)
  let pointAx = centerX + 2 * scale;
  let pointAy = centerY - 4 * scale;
  circle(pointAx, pointAy, 8);
  
  // Point B(6, 1)
  let pointBx = centerX + 6 * scale;
  let pointBy = centerY - 1 * scale;
  circle(pointBx, pointBy, 8);
  
  // Point C(3, 7)
  let pointCx = centerX + 3 * scale;
  let pointCy = centerY - 7 * scale;
  circle(pointCx, pointCy, 8);
  
  // Draw triangle
  stroke(0);
  strokeWeight(2);
  noFill();
  beginShape();
  vertex(pointAx, pointAy);
  vertex(pointBx, pointBy);
  vertex(pointCx, pointCy);
  vertex(pointAx, pointAy);
  endShape();
  
  // Label points
  fill(0);
  textAlign(CENTER);
  textSize(14);
  text("A", pointAx - 15, pointAy - 10);
  text("B", pointBx + 15, pointBy - 10);
  text("C", pointCx - 15, pointCy + 20);
  
  noLoop();
}
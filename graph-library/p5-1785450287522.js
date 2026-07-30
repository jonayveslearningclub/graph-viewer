function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop();
}

function draw() {
  background(255);

  let margin = 60;
  let graphSize = min(width, height) * 0.65;
  let originX = width / 2;
  let originY = height * 0.58;
  let step = graphSize / 20;

  // Question text
  textAlign(LEFT, TOP);
  textSize(16);
  fill(0);
  text("Plot triangle PQR with vertices P(2, 3), Q(5, 3), and R(5, 7).", 20, 18);
  text("Then reflect triangle PQR across the y-axis and label the new vertices P', Q', R'.", 20, 40);

  // Grid
  stroke(220);
  strokeWeight(1);
  for (let i = -10; i <= 10; i++) {
    let x = originX + i * step;
    let y = originY + i * step;
    line(x, originY - 10 * step, x, originY + 10 * step);
    line(originX - 10 * step, y, originX + 10 * step, y);
  }

  // Axes
  stroke(0);
  strokeWeight(2);
  line(originX - 10 * step, originY, originX + 10 * step, originY);
  line(originX, originY - 10 * step, originX, originY + 10 * step);

  // Axis labels
  textSize(11);
  fill(80);
  noStroke();
  textAlign(CENTER, TOP);
  for (let i = -10; i <= 10; i++) {
    if (i === 0) continue;
    let x = originX + i * step;
    text(i, x, originY + 4);
  }
  textAlign(RIGHT, CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i === 0) continue;
    let y = originY - i * step;
    text(i, originX - 4, y);
  }
  textAlign(CENTER, CENTER);
  fill(0);
  textSize(13);
  text("x", originX + 10 * step + 16, originY);
  text("y", originX, originY - 10 * step - 16);

  // Original triangle PQR
  let P = [2, 3], Q = [5, 3], R = [5, 7];
  stroke(0, 100, 200);
  strokeWeight(2);
  noFill();
  beginShape();
  vertex(originX + P[0]*step, originY - P[1]*step);
  vertex(originX + Q[0]*step, originY - Q[1]*step);
  vertex(originX + R[0]*step, originY - R[1]*step);
  endShape(CLOSE);

  fill(0, 100, 200);
  noStroke();
  textSize(13);
  textAlign(LEFT, CENTER);
  text("P(2,3)", originX + P[0]*step + 5, originY - P[1]*step);
  textAlign(LEFT, CENTER);
  text("Q(5,3)", originX + Q[0]*step + 5, originY - Q[1]*step);
  text("R(5,7)", originX + R[0]*step + 5, originY - R[1]*step);

  fill(0, 100, 200);
  noStroke();
  ellipse(originX + P[0]*step, originY - P[1]*step, 7, 7);
  ellipse(originX + Q[0]*step, originY - Q[1]*step, 7, 7);
  ellipse(originX + R[0]*step, originY - R[1]*step, 7, 7);

  // Reflected triangle P'Q'R'
  let Pr = [-2, 3], Qr = [-5, 3], Rr = [-5, 7];
  stroke(220, 60, 60);
  strokeWeight(2);
  noFill();
  beginShape();
  vertex(originX + Pr[0]*step, originY - Pr[1]*step);
  vertex(originX + Qr[0]*step, originY - Qr[1]*step);
  vertex(originX + Rr[0]*step, originY - Rr[1]*step);
  endShape(CLOSE);

  fill(220, 60, 60);
  noStroke();
  textSize(13);
  textAlign(RIGHT, CENTER);
  text("P'(-2,3)", originX + Pr[0]*step - 5, originY - Pr[1]*step);
  text("Q'(-5,3)", originX + Qr[0]*step - 5, originY - Qr[1]*step);
  text("R'(-5,7)", originX + Rr[0]*step - 5, originY - Rr[1]*step);

  fill(220, 60, 60);
  noStroke();
  ellipse(originX + Pr[0]*step, originY - Pr[1]*step, 7, 7);
  ellipse(originX + Qr[0]*step, originY - Qr[1]*step, 7, 7);
  ellipse(originX + Rr[0]*step, originY - Rr[1]*step, 7, 7);

  // Legend
  fill(0, 100, 200);
  noStroke();
  textSize(13);
  textAlign(LEFT, TOP);
  text("Blue = Original Triangle PQR", 20, height - 60);
  fill(220, 60, 60);
  text("Red = Reflected Triangle P'Q'R' (your task)", 20, height - 40);

  noLoop();
}
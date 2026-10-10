function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop();
}

function draw() {
  background(255);

  // Question text
  fill(0);
  textSize(15);
  textAlign(LEFT, TOP);
  text("Reflect triangle PQR across the y-axis.", 10, 10);
  text("P = (2, 5), Q = (4, 1), R = (1, 3)", 10, 30);
  text("Plot the reflected triangle and label the new vertices P', Q', R'.", 10, 50);

  // Grid setup
  let margin = 80;
  let gridSize = min(windowWidth, windowHeight) - margin * 2;
  let step = gridSize / 20;
  let originX = windowWidth / 2;
  let originY = windowHeight / 2 + 30;

  // Draw grid
  stroke(220);
  strokeWeight(1);
  for (let i = -10; i <= 10; i++) {
    line(originX + i * step, originY - 10 * step, originX + i * step, originY + 10 * step);
    line(originX - 10 * step, originY + i * step, originX + 10 * step, originY + i * step);
  }

  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(originX - 10 * step, originY, originX + 10 * step, originY);
  line(originX, originY - 10 * step, originX, originY + 10 * step);

  // Axis labels
  fill(0);
  noStroke();
  textSize(11);
  textAlign(CENTER, TOP);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, originX + i * step, originY + 4);
    }
  }
  textAlign(RIGHT, CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, originX - 4, originY - i * step);
    }
  }

  // Axis name labels
  textSize(13);
  textAlign(CENTER, TOP);
  text("x", originX + 10 * step + 15, originY - 6);
  textAlign(LEFT, CENTER);
  text("y", originX + 4, originY - 10 * step - 15);

  // Original triangle PQR
  let P = [2, 5];
  let Q = [4, 1];
  let R = [1, 3];

  function toCanvas(coord) {
    return [originX + coord[0] * step, originY - coord[1] * step];
  }

  let Pc = toCanvas(P);
  let Qc = toCanvas(Q);
  let Rc = toCanvas(R);

  stroke(0, 0, 200);
  strokeWeight(2);
  fill(180, 200, 255, 120);
  triangle(Pc[0], Pc[1], Qc[0], Qc[1], Rc[0], Rc[1]);

  fill(0, 0, 200);
  noStroke();
  textSize(13);
  textAlign(LEFT, CENTER);
  text("P(2,5)", Pc[0] + 5, Pc[1]);
  text("Q(4,1)", Qc[0] + 5, Qc[1]);
  text("R(1,3)", Rc[0] + 5, Rc[1]);

  fill(0, 0, 200);
  noStroke();
  ellipse(Pc[0], Pc[1], 7, 7);
  ellipse(Qc[0], Qc[1], 7, 7);
  ellipse(Rc[0], Rc[1], 7, 7);

  noLoop();
}
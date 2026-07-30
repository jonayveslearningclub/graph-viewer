function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop();
}

function draw() {
  background(255);

  let margin = 60;
  let graphSize = min(width, height) - 180;
  let originX = width / 2;
  let originY = height / 2 + 30;
  let step = graphSize / 20;

  textFont('Arial');
  textSize(15);
  fill(0);
  textAlign(CENTER, CENTER);
  text("1. Triangle ABC has vertices at A(2, 3), B(6, 3), and C(4, 7).", width / 2, 22);
  text("Reflect triangle ABC across the y-axis and label the new vertices A', B', and C'.", width / 2, 44);

  stroke(220);
  strokeWeight(1);
  for (let i = -10; i <= 10; i++) {
    let x = originX + i * step;
    let y = originY + i * step;
    line(x, originY - 10 * step, x, originY + 10 * step);
    line(originX - 10 * step, y, originX + 10 * step, y);
  }

  stroke(0);
  strokeWeight(2);
  line(originX - 10 * step, originY, originX + 10 * step, originY);
  line(originX, originY - 10 * step, originX, originY + 10 * step);

  fill(0);
  noStroke();
  textSize(12);
  textAlign(CENTER, CENTER);
  for (let i = -10; i <= 10; i++) {
    if (i === 0) continue;
    let x = originX + i * step;
    let y = originY + i * step;
    text(i, x, originY + 16);
    text(-i, originX - 16, y);
  }

  text("0", originX - 14, originY + 14);

  let A = [2, 3];
  let B = [6, 3];
  let C = [4, 7];

  function toCanvas(px, py) {
    return [originX + px * step, originY - py * step];
  }

  stroke(30, 100, 200);
  strokeWeight(2);
  fill(100, 160, 255, 80);
  let [ax, ay] = toCanvas(A[0], A[1]);
  let [bx, by] = toCanvas(B[0], B[1]);
  let [cx, cy] = toCanvas(C[0], C[1]);
  triangle(ax, ay, bx, by, cx, cy);

  fill(30, 100, 200);
  noStroke();
  textSize(13);
  textAlign(LEFT, CENTER);
  ellipse(ax, ay, 7, 7);
  text("A(2,3)", ax + 6, ay - 10);
  ellipse(bx, by, 7, 7);
  text("B(6,3)", bx + 6, by - 10);
  ellipse(cx, cy, 7, 7);
  text("C(4,7)", cx + 6, cy - 10);

  stroke(200, 60, 60);
  strokeWeight(1.5);
  setLineDash([6, 4]);
  line(originX, originY - 10 * step, originX, originY + 10 * step);
  setLineDash([]);

  noLoop();
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}
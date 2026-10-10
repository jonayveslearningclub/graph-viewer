function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop();
}

function draw() {
  background(255);

  let margin = 60;
  let questionHeight = 80;
  let gridSize = min(windowWidth, windowHeight - questionHeight) - margin * 2;
  let step = gridSize / 20;
  let originX = windowWidth / 2;
  let originY = questionHeight + margin + gridSize / 2;

  // Question text
  fill(0);
  noStroke();
  textSize(15);
  textAlign(LEFT, TOP);
  text("Plot triangle ABC with vertices A(2, 5), B(6, 5), and C(6, 1).", 20, 12);
  text("Then reflect triangle ABC across the y-axis and label the new vertices A', B', C'.", 20, 38);

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
  fill(0);
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

  // Axis arrows
  stroke(0);
  strokeWeight(2);
  fill(0);
  // x-axis arrow right
  triangle(originX + 10 * step, originY, originX + 10 * step - 8, originY - 4, originX + 10 * step - 8, originY + 4);
  // y-axis arrow up
  triangle(originX, originY - 10 * step, originX - 4, originY - 10 * step + 8, originX + 4, originY - 10 * step + 8);

  // Original triangle ABC
  let A = [2, 5], B = [6, 5], C = [6, 1];
  let Apx = originX + A[0] * step, Apy = originY - A[1] * step;
  let Bpx = originX + B[0] * step, Bpy = originY - B[1] * step;
  let Cpx = originX + C[0] * step, Cpy = originY - C[1] * step;

  stroke(30, 100, 220);
  strokeWeight(2);
  fill(100, 160, 255, 80);
  triangle(Apx, Apy, Bpx, Bpy, Cpx, Cpy);

  fill(30, 100, 220);
  noStroke();
  ellipse(Apx, Apy, 7, 7);
  ellipse(Bpx, Bpy, 7, 7);
  ellipse(Cpx, Cpy, 7, 7);

  textSize(13);
  textAlign(RIGHT, BOTTOM);
  text("A(2,5)", Apx - 4, Apy - 4);
  textAlign(LEFT, BOTTOM);
  text("B(6,5)", Bpx + 4, Bpy - 4);
  textAlign(LEFT, TOP);
  text("C(6,1)", Cpx + 4, Cpy + 4);

  // Reflected triangle A'B'C' across y-axis: x -> -x
  let Ar = [-2, 5], Br = [-6, 5], Cr = [-6, 1];
  let Arpx = originX + Ar[0] * step, Arpy = originY - Ar[1] * step;
  let Brpx = originX + Br[0] * step, Brpy = originY - Br[1] * step;
  let Crpx = originX + Cr[0] * step, Crpy = originY - Cr[1] * step;

  stroke(220, 60, 60);
  strokeWeight(2);
  fill(255, 120, 120, 80);
  triangle(Arpx, Arpy, Brpx, Brpy, Crpx, Crpy);

  fill(220, 60, 60);
  noStroke();
  ellipse(Arpx, Arpy, 7, 7);
  ellipse(Brpx, Brpy, 7, 7);
  ellipse(Crpx, Crpy, 7, 7);

  textSize(13);
  textAlign(LEFT, BOTTOM);
  text("A'", Arpx + 4, Arpy - 4);
  textAlign(RIGHT, BOTTOM);
  text("B'", Brpx - 4, Brpy - 4);
  textAlign(RIGHT, TOP);
  text("C'", Crpx - 4, Crpy + 4);

  // Legend
  textSize(12);
  fill(30, 100, 220);
  textAlign(LEFT, TOP);
  text("Blue = Original", originX - 10 * step, originY + 10 * step + 8);
  fill(220, 60, 60);
  text("Red = Reflection", originX - 10 * step, originY + 10 * step + 24);

  noLoop();
}
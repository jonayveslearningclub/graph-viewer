function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Question text
  fill(0);
  textSize(18);
  text("What fraction of the rectangle is shaded?", 50, 30);
  
  // Draw rectangle divided into 8 equal parts (2 rows, 4 columns)
  let rectX = 200;
  let rectY = 100;
  let rectWidth = 400;
  let rectHeight = 200;
  let cols = 4;
  let rows = 2;
  let cellWidth = rectWidth / cols;
  let cellHeight = rectHeight / rows;
  
  // Draw and shade parts
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let x = rectX + j * cellWidth;
      let y = rectY + i * cellHeight;
      
      // Shade 3 out of 8 parts
      if ((i == 0 && j < 2) || (i == 1 && j == 0)) {
        fill(100, 150, 255); // Blue shading
      } else {
        fill(255); // White (unshaded)
      }
      
      rect(x, y, cellWidth, cellHeight);
      stroke(0);
      strokeWeight(2);
      noFill();
      rect(x, y, cellWidth, cellHeight);
    }
  }
  
  // Draw outer border
  strokeWeight(3);
  noFill();
  rect(rectX, rectY, rectWidth, rectHeight);
  
  noLoop();
}
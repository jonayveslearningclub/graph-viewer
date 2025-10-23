function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(24);
  text("What decimal value is represented by point A on the number line?", 50, 40);
  
  // Number line setup
  let lineY = height/2;
  let leftX = 150;
  let rightX = width - 150;
  let lineLength = rightX - leftX;
  
  // Draw main number line
  stroke(0);
  strokeWeight(3);
  line(leftX, lineY, rightX, lineY);
  
  // Major tick marks and labels (whole numbers)
  let start = 2;
  let end = 4;
  let numMajorTicks = end - start + 1;
  
  for (let i = 0; i < numMajorTicks; i++) {
    let x = leftX + (i * lineLength / (numMajorTicks - 1));
    let value = start + i;
    
    // Major tick mark
    strokeWeight(3);
    line(x, lineY - 15, x, lineY + 15);
    
    // Label
    fill(0);
    textSize(20);
    textAlign(CENTER);
    text(value.toString(), x, lineY + 40);
  }
  
  // Minor tick marks (tenths)
  strokeWeight(1);
  for (let i = 0; i < numMajorTicks - 1; i++) {
    let startX = leftX + (i * lineLength / (numMajorTicks - 1));
    let endX = leftX + ((i + 1) * lineLength / (numMajorTicks - 1));
    let segmentLength = endX - startX;
    
    for (let j = 1; j < 10; j++) {
      let x = startX + (j * segmentLength / 10);
      line(x, lineY - 8, x, lineY + 8);
    }
  }
  
  // Point A
  let pointAPosition = leftX + (0.7 * lineLength / (numMajorTicks - 1)) + (0.3 * lineLength / (numMajorTicks - 1));
  fill(255, 0, 0);
  noStroke();
  circle(pointAPosition, lineY, 12);
  
  // Label for point A
  fill(255, 0, 0);
  textSize(20);
  textAlign(CENTER);
  text("A", pointAPosition, lineY - 25);
  
  noLoop();
}
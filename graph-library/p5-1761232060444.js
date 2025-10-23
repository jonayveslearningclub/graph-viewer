function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(24);
  text("What decimal values are represented by points B and C on the number line?", 50, 40);
  
  // Number line setup
  let lineY = height/2;
  let leftX = 120;
  let rightX = width - 120;
  let lineLength = rightX - leftX;
  
  // Draw main number line
  stroke(0);
  strokeWeight(3);
  line(leftX, lineY, rightX, lineY);
  
  // Major tick marks and labels (whole numbers)
  let start = 5;
  let end = 8;
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
  
  // Point B (at 5.4)
  let pointBPosition = leftX + (0.4 * lineLength / (numMajorTicks - 1));
  fill(0, 150, 0);
  noStroke();
  circle(pointBPosition, lineY, 12);
  
  // Label for point B
  fill(0, 150, 0);
  textSize(20);
  textAlign(CENTER);
  text("B", pointBPosition, lineY - 25);
  
  // Point C (at 6.8)
  let pointCPosition = leftX + (1 * lineLength / (numMajorTicks - 1)) + (0.8 * lineLength / (numMajorTicks - 1));
  fill(0, 0, 255);
  noStroke();
  circle(pointCPosition, lineY, 12);
  
  // Label for point C
  fill(0, 0, 255);
  textSize(20);
  textAlign(CENTER);
  text("C", pointCPosition, lineY - 25);
  
  noLoop();
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(24);
  text("What decimal value is represented by point D on the number line?", 50, 40);
  
  // Number line setup
  let lineY = height/2;
  let leftX = 100;
  let rightX = width - 100;
  let lineLength = rightX - leftX;
  
  // Draw main number line
  stroke(0);
  strokeWeight(3);
  line(leftX, lineY, rightX, lineY);
  
  // Major tick marks and labels (whole numbers)
  let start = 1;
  let end = 5;
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
  
  // Point D (at 3.6)
  let pointDPosition = leftX + (2 * lineLength / (numMajorTicks - 1)) + (0.6 * lineLength / (numMajorTicks - 1));
  fill(128, 0, 128);
  noStroke();
  circle(pointDPosition, lineY, 12);
  
  // Label for point D
  fill(128, 0, 128);
  textSize(20);
  textAlign(CENTER);
  text("D", pointDPosition, lineY - 25);
  
  noLoop();
}
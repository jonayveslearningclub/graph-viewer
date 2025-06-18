function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Question text
  fill(0);
  textSize(18);
  text("What fraction of the circle is shaded?", 50, 30);
  
  // Draw circle divided into 6 equal parts
  let centerX = 400;
  let centerY = 300;
  let radius = 150;
  
  // Draw circle
  stroke(0);
  strokeWeight(3);
  noFill();
  circle(centerX, centerY, radius * 2);
  
  // Draw 6 equal sections and shade 2 of them
  for (let i = 0; i < 6; i++) {
    let angle1 = i * 60; // 360/6 = 60 degrees per section
    let angle2 = (i + 1) * 60;
    
    // Shade sections 1 and 4 (2 out of 6)
    if (i == 1 || i == 4) {
      fill(255, 150, 150); // Pink shading
    } else {
      fill(255); // White (unshaded)
    }
    
    // Draw pie slice
    stroke(0);
    strokeWeight(2);
    arc(centerX, centerY, radius * 2, radius * 2, radians(angle1), radians(angle2), PIE);
  }
  
  noLoop();
}
function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(16);
  text("3. How many equilateral triangles meet at each vertex in a triangle tessellation?", 20, 30);
  text("Study the pattern below and count the triangles around vertex P.", 20, 55);
  
  // Draw tessellation of equilateral triangles
  let triSize = 40;
  let triHeight = triSize * sqrt(3) / 2;
  
  // Center the tessellation
  let startX = 300;
  let startY = 200;
  
  // Draw triangles in a hexagonal pattern around point P
  
  // Center point P
  fill(255, 0, 0);
  stroke(255, 0, 0);
  strokeWeight(6);
  point(startX, startY);
  
  fill(0);
  textSize(14);
  text("P", startX + 8, startY + 5);
  
  // Draw 6 triangles meeting at P
  for (let i = 0; i < 6; i++) {
    let angle = i * PI / 3;
    
    // Calculate triangle vertices
    let x1 = startX;
    let y1 = startY;
    let x2 = startX + cos(angle) * triSize;
    let y2 = startY + sin(angle) * triSize;
    let x3 = startX + cos(angle + PI/3) * triSize;
    let y3 = startY + sin(angle + PI/3) * triSize;
    
    // Alternate colors for clarity
    if (i % 2 == 0) {
      fill(200, 255, 200);
    } else {
      fill(255, 255, 150);
    }
    
    stroke(0);
    strokeWeight(2);
    triangle(x1, y1, x2, y2, x3, y3);
    
    // Label each triangle with a number
    fill(0);
    textSize(12);
    let labelX = startX + cos(angle + PI/6) * triSize * 0.6;
    let labelY = startY + sin(angle + PI/6) * triSize * 0.6;
    text(i + 1, labelX - 3, labelY + 3);
  }
  
  // Draw additional triangles to show the extended pattern
  for (let i = 0; i < 6; i++) {
    let angle = i * PI / 3;
    let dist = triSize * 1.8;
    
    let centerX = startX + cos(angle) * dist;
    let centerY = startY + sin(angle) * dist;
    
    // Draw partial triangles to show continuation
    fill(240, 240, 240);
    stroke(0);
    strokeWeight(1);
    
    for (let j = 0; j < 3; j++) {
      let triAngle = angle + j * (2 * PI / 3);
      let x1 = centerX;
      let y1 = centerY;
      let x2 = centerX + cos(triAngle) * triSize * 0.7;
      let y2 = centerY + sin(triAngle) * triSize * 0.7;
      let x3 = centerX + cos(triAngle + PI/3) * triSize * 0.7;
      let y3 = centerY + sin(triAngle + PI/3) * triSize * 0.7;
      
      triangle(x1, y1, x2, y2, x3, y3);
    }
  }
  
  // Instructions and questions
  fill(0);
  textSize(14);
  text("Count the triangles that meet at vertex P.", 20, 450);
  text("Interior angle of equilateral triangle = 60°", 20, 475);
  text("How many 60° angles fit around point P?", 20, 500);
  text("Answer: _____ triangles meet at each vertex", 20, 525);
  
  noLoop();
}
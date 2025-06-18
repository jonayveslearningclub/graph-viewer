function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Question text
  fill(0);
  textSize(18);
  text("What fraction of the hexagon is shaded?", 50, 30);
  
  // Draw hexagon divided into 6 equal triangular parts
  let centerX = 400;
  let centerY = 300;
  let size = 120;
  
  // Calculate hexagon vertices
  let vertices = [];
  for (let i = 0; i < 6; i++) {
    let angle = i * 60; // 60 degrees between each vertex
    let x = centerX + cos(radians(angle)) * size;
    let y = centerY + sin(radians(angle)) * size;
    vertices.push({x: x, y: y});
  }
  
  // Draw and shade triangular sections
  for (let i = 0; i < 6; i++) {
    // Shade 4 out of 6 triangular sections
    if (i == 0 || i == 2 || i == 3 || i == 5) {
      fill(150, 255, 150); // Green shading
    } else {
      fill(255); // White (unshaded)
    }
    
    stroke(0);
    strokeWeight(2);
    
    // Draw triangle from center to two adjacent vertices
    triangle(centerX, centerY, 
             vertices[i].x, vertices[i].y,
             vertices[(i + 1) % 6].x, vertices[(i + 1) % 6].y);
  }
  
  // Draw hexagon outline
  strokeWeight(3);
  noFill();
  beginShape();
  for (let i = 0; i < 6; i++) {
    vertex(vertices[i].x, vertices[i].y);
  }
  endShape(CLOSE);
  
  noLoop();
}
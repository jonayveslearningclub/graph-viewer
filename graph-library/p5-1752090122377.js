function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("Find which shapes have the same number of sides as the target shape.", 20, 30);
  
  // Target shape label
  textSize(16);
  text("Target Shape:", 50, 70);
  
  // Draw target shape - hexagon
  fill(255, 200, 200);
  stroke(0);
  strokeWeight(2);
  beginShape();
  let targetX = 150;
  let targetY = 120;
  let targetSize = 40;
  for (let i = 0; i < 6; i++) {
    let angle = (i * 60) * PI / 180;
    let x = targetX + cos(angle) * targetSize;
    let y = targetY + sin(angle) * targetSize;
    vertex(x, y);
  }
  endShape(CLOSE);
  
  // Label target shape
  fill(0);
  textAlign(CENTER);
  text("A", targetX, targetY + 5);
  
  // Draw 6 comparison shapes
  let shapes = [
    {name: "B", type: "triangle", x: 100, y: 250},
    {name: "C", type: "square", x: 250, y: 250},
    {name: "D", type: "pentagon", x: 400, y: 250},
    {name: "E", type: "hexagon", x: 550, y: 250},
    {name: "F", type: "octagon", x: 700, y: 250},
    {name: "G", type: "rectangle", x: 200, y: 400}
  ];
  
  for (let shape of shapes) {
    fill(200, 255, 200);
    stroke(0);
    strokeWeight(2);
    
    if (shape.type === "triangle") {
      triangle(shape.x, shape.y - 30, shape.x - 30, shape.y + 20, shape.x + 30, shape.y + 20);
    } else if (shape.type === "square") {
      rect(shape.x - 25, shape.y - 25, 50, 50);
    } else if (shape.type === "pentagon") {
      beginShape();
      for (let i = 0; i < 5; i++) {
        let angle = (i * 72 - 90) * PI / 180;
        let x = shape.x + cos(angle) * 30;
        let y = shape.y + sin(angle) * 30;
        vertex(x, y);
      }
      endShape(CLOSE);
    } else if (shape.type === "hexagon") {
      beginShape();
      for (let i = 0; i < 6; i++) {
        let angle = (i * 60) * PI / 180;
        let x = shape.x + cos(angle) * 30;
        let y = shape.y + sin(angle) * 30;
        vertex(x, y);
      }
      endShape(CLOSE);
    } else if (shape.type === "octagon") {
      beginShape();
      for (let i = 0; i < 8; i++) {
        let angle = (i * 45) * PI / 180;
        let x = shape.x + cos(angle) * 25;
        let y = shape.y + sin(angle) * 25;
        vertex(x, y);
      }
      endShape(CLOSE);
    } else if (shape.type === "rectangle") {
      rect(shape.x - 35, shape.y - 20, 70, 40);
    }
    
    // Label each shape
    fill(0);
    textAlign(CENTER);
    text(shape.name, shape.x, shape.y + 5);
  }
  
  // Instructions
  fill(0);
  textSize(14);
  textAlign(LEFT);
  text("Circle the letters of all shapes that have the same number of sides as shape A.", 50, 520);
  
  noLoop();
}
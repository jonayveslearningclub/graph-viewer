function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("Which shapes have exactly 4 corners like the target shape?", 20, 30);
  
  // Target shape label
  textSize(16);
  text("Target Shape:", 50, 70);
  
  // Draw target shape - rectangle
  fill(255, 200, 200);
  stroke(0);
  strokeWeight(2);
  rect(120, 90, 80, 50);
  
  // Label target shape
  fill(0);
  textAlign(CENTER);
  text("Target", 160, 120);
  
  // Draw 6 comparison shapes
  let shapes = [
    {name: "H", type: "circle", x: 120, y: 220},
    {name: "J", type: "triangle", x: 280, y: 220},
    {name: "K", type: "diamond", x: 440, y: 220},
    {name: "L", type: "pentagon", x: 600, y: 220},
    {name: "M", type: "hexagon", x: 200, y: 380},
    {name: "N", type: "trapezoid", x: 500, y: 380}
  ];
  
  for (let shape of shapes) {
    fill(200, 255, 200);
    stroke(0);
    strokeWeight(2);
    
    if (shape.type === "circle") {
      ellipse(shape.x, shape.y, 60, 60);
    } else if (shape.type === "triangle") {
      triangle(shape.x, shape.y - 30, shape.x - 30, shape.y + 20, shape.x + 30, shape.y + 20);
    } else if (shape.type === "diamond") {
      quad(shape.x, shape.y - 30, shape.x + 30, shape.y, shape.x, shape.y + 30, shape.x - 30, shape.y);
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
    } else if (shape.type === "trapezoid") {
      quad(shape.x - 35, shape.y + 20, shape.x - 20, shape.y - 20, shape.x + 20, shape.y - 20, shape.x + 35, shape.y + 20);
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
  text("Write the letters of all shapes that have the same number of corners as the target shape.", 50, 520);
  
  noLoop();
}
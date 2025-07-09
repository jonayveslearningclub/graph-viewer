function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("Find all shapes that are round like the target shape.", 20, 30);
  
  // Target shape label
  textSize(16);
  text("Target Shape:", 50, 70);
  
  // Draw target shape - circle
  fill(255, 200, 200);
  stroke(0);
  strokeWeight(2);
  ellipse(150, 120, 70, 70);
  
  // Label target shape
  fill(0);
  textAlign(CENTER);
  text("Target", 150, 125);
  
  // Draw 6 comparison shapes
  let shapes = [
    {name: "P", type: "square", x: 100, y: 250},
    {name: "Q", type: "oval", x: 250, y: 250},
    {name: "R", type: "triangle", x: 400, y: 250},
    {name: "S", type: "circle", x: 550, y: 250},
    {name: "T", type: "hexagon", x: 180, y: 380},
    {name: "U", type: "circle2", x: 450, y: 380}
  ];
  
  for (let shape of shapes) {
    fill(200, 255, 200);
    stroke(0);
    strokeWeight(2);
    
    if (shape.type === "square") {
      rect(shape.x - 25, shape.y - 25, 50, 50);
    } else if (shape.type === "oval") {
      ellipse(shape.x, shape.y, 60, 40);
    } else if (shape.type === "triangle") {
      triangle(shape.x, shape.y - 30, shape.x - 30, shape.y + 20, shape.x + 30, shape.y + 20);
    } else if (shape.type === "circle" || shape.type === "circle2") {
      ellipse(shape.x, shape.y, 55, 55);
    } else if (shape.type === "hexagon") {
      beginShape();
      for (let i = 0; i < 6; i++) {
        let angle = (i * 60) * PI / 180;
        let x = shape.x + cos(angle) * 30;
        let y = shape.y + sin(angle) * 30;
        vertex(x, y);
      }
      endShape(CLOSE);
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
  text("Circle the letters of all shapes that are round like the target shape.", 50, 520);
  
  noLoop();
}
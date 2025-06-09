function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("1. Triangle ABC is congruent to triangle DEF. If angle A = 65° and angle B = 48°, what is angle F?", 20, 30);
  
  // Draw first triangle ABC
  stroke(0);
  strokeWeight(2);
  fill(200, 220, 255);
  triangle(150, 150, 280, 150, 215, 80);
  
  // Label triangle ABC
  fill(0);
  textSize(14);
  text("A", 210, 70);
  text("B", 140, 165);
  text("C", 285, 165);
  text("65°", 195, 95);
  text("48°", 160, 145);
  
  // Draw second triangle DEF
  stroke(0);
  strokeWeight(2);
  fill(255, 220, 200);
  triangle(450, 150, 580, 150, 515, 80);
  
  // Label triangle DEF
  fill(0);
  textSize(14);
  text("D", 510, 70);
  text("E", 440, 165);
  text("F", 585, 165);
  text("?", 575, 145);
  
  // Congruence notation
  textSize(16);
  text("△ABC ≅ △DEF", 350, 300);
  
  noLoop();
}
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  textSize(16);
  fill(0);
  text("1. Find the perimeter of a rectangle with length 8 units and width 5 units.", 20, 30);
  
  // Draw rectangle
  stroke(0);
  strokeWeight(2);
  noFill();
  rect(200, 100, 320, 200); // 8:5 ratio scaled up
  
  // Label dimensions
  textSize(14);
  fill(0);
  text("8 units", 330, 90);
  text("5 units", 160, 200);
  
  // Add arrows to show dimensions
  stroke(0);
  strokeWeight(1);
  // Top arrow
  line(200, 80, 520, 80);
  line(195, 75, 205, 85);
  line(515, 75, 525, 85);
  
  // Side arrow
  line(180, 100, 180, 300);
  line(175, 95, 185, 105);
  line(175, 295, 185, 305);
  
  noLoop();
}
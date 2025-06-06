function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Title
  fill(0);
  textSize(16);
  text("Which of these mappings represent functions?", 20, 30);
  
  // Mapping A
  fill(0);
  textSize(14);
  text("A.", 30, 70);
  
  // Domain and range ovals for A
  drawOval(50, 90, 80, 120);
  drawOval(180, 90, 80, 120);
  
  fill(0);
  textSize(12);
  text("Domain", 70, 85);
  text("Range", 205, 85);
  
  // Domain values
  text("2", 85, 110);
  text("4", 85, 130);
  text("6", 85, 150);
  text("8", 85, 170);
  
  // Range values  
  text("1", 215, 110);
  text("3", 215, 130);
  text("5", 215, 150);
  text("7", 215, 170);
  
  // Arrows (one-to-one mapping)
  drawArrow(95, 105, 210, 105);
  drawArrow(95, 125, 210, 125);
  drawArrow(95, 145, 210, 145);
  drawArrow(95, 165, 210, 165);
  
  // Mapping B
  fill(0);
  textSize(14);
  text("B.", 320, 70);
  
  drawOval(340, 90, 80, 120);
  drawOval(470, 90, 80, 120);
  
  fill(0);
  textSize(12);
  text("Domain", 360, 85);
  text("Range", 495, 85);
  
  text("1", 375, 110);
  text("3", 375, 130);
  text("5", 375, 150);
  
  text("2", 505, 110);
  text("4", 505, 130);
  text("6", 505, 150);
  text("8", 505, 170);
  
  // Multiple arrows from one domain element (not a function)
  drawArrow(385, 105, 500, 105);
  drawArrow(385, 105, 500, 125);
  drawArrow(385, 125, 500, 145);
  drawArrow(385, 145, 500, 165);
  
  // Mapping C
  fill(0);
  textSize(14);
  text("C.", 30, 280);
  
  drawOval(50, 300, 80, 140);
  drawOval(180, 300, 80, 140);
  
  fill(0);
  textSize(12);
  text("Domain", 70, 295);
  text("Range", 205, 295);
  
  text("3", 85, 320);
  text("6", 85, 340);
  text("9", 85, 360);
  text("12", 82, 380);
  
  text("1", 215, 330);
  text("2", 215, 350);
  text("4", 215, 370);
  
  // Valid function mapping
  drawArrow(95, 315, 210, 325);
  drawArrow(95, 335, 210, 345);
  drawArrow(95, 355, 210, 365);
  drawArrow(95, 375, 210, 345);
  
  // Mapping D  
  fill(0);
  textSize(14);
  text("D.", 320, 280);
  
  drawOval(340, 300, 80, 140);
  drawOval(470, 300, 80, 140);
  
  fill(0);
  textSize(12);
  text("Domain", 360, 295);
  text("Range", 495, 295);
  
  text("7", 375, 320);
  text("8", 375, 340);
  text("9", 375, 360);
  
  text("14", 502, 320);
  text("16", 502, 340);
  text("18", 502, 360);
  text("20", 502, 380);
  
  // One domain element with two outputs (not a function)
  drawArrow(385, 315, 507, 315);
  drawArrow(385, 335, 507, 335);
  drawArrow(385, 355, 507, 355);
  drawArrow(385, 355, 507, 375);
}

function drawOval(x, y, w, h) {
  noFill();
  stroke(0);
  strokeWeight(2);
  ellipse(x + w/2, y + h/2, w, h);
  noStroke();
}

function drawArrow(x1, y1, x2, y2) {
  stroke(0);
  strokeWeight(1);
  line(x1, y1, x2, y2);
  
  // Arrowhead
  let angle = atan2(y2 - y1, x2 - x1);
  let arrowLength = 8;
  line(x2, y2, x2 - arrowLength * cos(angle - PI/6), y2 - arrowLength * sin(angle - PI/6));
  line(x2, y2, x2 - arrowLength * cos(angle + PI/6), y2 - arrowLength * sin(angle + PI/6));
  
  noStroke();
}
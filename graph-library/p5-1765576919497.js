function setup() {
  createCanvas(800, 650);
}

function draw() {
  background(250);
  
  // Question text
  fill(0);
  textSize(16);
  text("A class collected data on students' heights in centimeters:", 25, 25);
  text("155, 162, 148, 171, 159, 164, 153, 167, 161, 156, 169, 158", 25, 45);
  text("Which graph type would be most appropriate to show the distribution of heights?", 25, 65);
  
  // Display different graph options
  
  // Option 1: Dot Plot
  fill(0);
  textSize(14);
  text("A) Dot Plot", 60, 110);
  
  // Draw dot plot
  stroke(0);
  strokeWeight(1);
  line(60, 200, 350, 200); // baseline
  
  // Height marks
  for(let i = 145; i <= 175; i += 5) {
    line(60 + (i-145)*10, 195, 60 + (i-145)*10, 205);
    fill(0);
    textSize(9);
    text(i, 55 + (i-145)*10, 220);
  }
  
  // Dots for data points
  fill(200, 50, 100);
  noStroke();
  circle(60 + (155-145)*10, 185, 6); // 155
  circle(60 + (162-145)*10, 185, 6); // 162
  circle(60 + (148-145)*10, 185, 6); // 148
  circle(60 + (159-145)*10, 185, 6); // 159
  circle(60 + (153-145)*10, 185, 6); // 153
  circle(60 + (161-145)*10, 185, 6); // 161
  circle(60 + (156-145)*10, 185, 6); // 156
  circle(60 + (158-145)*10, 185, 6); // 158
  
  // Option 2: Circle Graph (Pie Chart)
  fill(0);
  textSize(14);
  text("B) Circle Graph", 480, 110);
  
  let pieX = 550;
  let pieY = 170;
  let pieR = 50;
  
  fill(100, 150, 200);
  arc(pieX, pieY, pieR*2, pieR*2, 0, PI);
  fill(200, 150, 100);
  arc(pieX, pieY, pieR*2, pieR*2, PI, PI * 1.5);
  fill(150, 200, 100);
  arc(pieX, pieY, pieR*2, pieR*2, PI * 1.5, TWO_PI);
  
  // Option 3: Histogram
  fill(0);
  textSize(14);
  text("C) Histogram", 60, 280);
  
  // Draw histogram
  stroke(0);
  strokeWeight(1);
  line(60, 450, 350, 450); // x-axis
  line(60, 450, 60, 350); // y-axis
  
  // Bins
  fill(150, 200, 150);
  rect(80, 430, 40, 20); // 145-150
  rect(120, 420, 40, 30); // 150-155
  rect(160, 400, 40, 50); // 155-160
  rect(200, 410, 40, 40); // 160-165
  rect(240, 420, 40, 30); // 165-170
  rect(280, 440, 40, 10); // 170-175
  
  fill(0);
  textSize(10);
  text("145-150", 85, 470);
  text("155-160", 165, 470);
  text("165-170", 245, 470);
  
  // Option 4: Box Plot
  fill(0);
  textSize(14);
  text("D) Box Plot", 480, 280);
  
  // Draw box plot
  stroke(0);
  strokeWeight(1);
  line(480, 400, 720, 400); // baseline
  
  // Box plot elements
  strokeWeight(2);
  line(500, 385, 500, 415); // min whisker
  rect(520, 385, 80, 30); // box
  line(560, 385, 560, 415); // median line
  line(620, 385, 620, 415); // max whisker
  line(500, 400, 520, 400); // left whisker line
  line(600, 400, 620, 400); // right whisker line
  
  fill(0);
  textSize(9);
  text("148", 495, 430);
  text("155", 515, 430);
  text("159", 555, 430);
  text("164", 595, 430);
  text("171", 615, 430);
  
  noLoop();
}
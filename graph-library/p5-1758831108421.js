function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Title
  fill(0);
  textSize(18);
  text("3. Round each five-digit number to the nearest thousand:", 10, 30);
  
  // First number
  textSize(20);
  fill(200, 50, 100);
  text("48,672 rounded to the nearest thousand = _______", 50, 100);
  
  // Second number
  fill(50, 150, 200);
  text("83,291 rounded to the nearest thousand = _______", 50, 150);
  
  // Third number
  fill(150, 200, 50);
  text("76,508 rounded to the nearest thousand = _______", 50, 200);
  
  // Fourth number
  fill(200, 100, 200);
  text("25,149 rounded to the nearest thousand = _______", 50, 250);
  
  // Number line showing thousands
  fill(0);
  textSize(16);
  text("Number line showing thousands:", 50, 330);
  
  stroke(0);
  strokeWeight(3);
  line(50, 380, 750, 380);
  
  // Major tick marks for every 10,000
  for (let i = 0; i <= 10; i++) {
    let x = 50 + i * 70;
    line(x, 365, x, 395);
    textAlign(CENTER);
    textSize(14);
    fill(0);
    text((20000 + i * 10000).toString(), x, 415);
  }
  
  // Smaller tick marks for thousands
  stroke(100);
  strokeWeight(2);
  for (let i = 0; i <= 100; i++) {
    let x = 50 + i * 7;
    line(x, 372, x, 388);
  }
  
  // Labels for some thousands
  fill(0);
  textSize(10);
  textAlign(CENTER);
  for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
      let x = 50 + i * 35;
      text((25000 + i * 5000).toString(), x, 360);
    }
  }
  
  noLoop();
}
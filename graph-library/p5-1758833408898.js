function setup() {
  createCanvas(900, 700);
}

function draw() {
  background(255);
  
  // Question text
  textSize(16);
  fill(0);
  text("Round these five-digit numbers to the nearest thousand:", 20, 30);
  text("Use the number line to help you.", 20, 55);
  
  // First number line: 84,000 to 85,000
  let line1Y = 100;
  let lineStartX = 80;
  let lineEndX = 820;
  
  stroke(0);
  strokeWeight(2);
  line(lineStartX, line1Y, lineEndX, line1Y);
  
  // Tick marks and labels for first line
  textAlign(CENTER);
  textSize(12);
  for (let i = 0; i <= 10; i++) {
    let x = lineStartX + (i * (lineEndX - lineStartX) / 10);
    let value = 84000 + (i * 100);
    
    line(x, line1Y - 5, x, line1Y + 5);
    
    if (i % 5 === 0) {
      text(value.toLocaleString(), x, line1Y + 20);
    }
  }
  
  // Mark 84,367 on first line
  let pos1 = lineStartX + ((84367 - 84000) / 1000) * (lineEndX - lineStartX);
  fill(255, 0, 0);
  noStroke();
  ellipse(pos1, line1Y, 8, 8);
  textAlign(CENTER);
  text("84,367", pos1, line1Y - 15);
  
  fill(0);
  textAlign(LEFT);
  textSize(14);
  text("84,367 rounded to the nearest thousand = _______", 20, 150);
  
  // Second number line: 52,000 to 53,000
  let line2Y = 220;
  
  stroke(0);
  strokeWeight(2);
  line(lineStartX, line2Y, lineEndX, line2Y);
  
  // Tick marks and labels for second line
  textAlign(CENTER);
  textSize(12);
  for (let i = 0; i <= 10; i++) {
    let x = lineStartX + (i * (lineEndX - lineStartX) / 10);
    let value = 52000 + (i * 100);
    
    line(x, line2Y - 5, x, line2Y + 5);
    
    if (i % 5 === 0) {
      text(value.toLocaleString(), x, line2Y + 20);
    }
  }
  
  // Mark 52,829 on second line
  let pos2 = lineStartX + ((52829 - 52000) / 1000) * (lineEndX - lineStartX);
  fill(0, 0, 255);
  noStroke();
  ellipse(pos2, line2Y, 8, 8);
  textAlign(CENTER);
  text("52,829", pos2, line2Y - 15);
  
  fill(0);
  textAlign(LEFT);
  textSize(14);
  text("52,829 rounded to the nearest thousand = _______", 20, 270);
  
  // Third number line: 76,000 to 77,000
  let line3Y = 340;
  
  stroke(0);
  strokeWeight(2);
  line(lineStartX, line3Y, lineEndX, line3Y);
  
  // Tick marks and labels for third line
  textAlign(CENTER);
  textSize(12);
  for (let i = 0; i <= 10; i++) {
    let x = lineStartX + (i * (lineEndX - lineStartX) / 10);
    let value = 76000 + (i * 100);
    
    line(x, line3Y - 5, x, line3Y + 5);
    
    if (i % 5 === 0) {
      text(value.toLocaleString(), x, line3Y + 20);
    }
  }
  
  // Mark 76,502 on third line
  let pos3 = lineStartX + ((76502 - 76000) / 1000) * (lineEndX - lineStartX);
  fill(0, 150, 0);
  noStroke();
  ellipse(pos3, line3Y, 8, 8);
  textAlign(CENTER);
  text("76,502", pos3, line3Y - 15);
  
  fill(0);
  textAlign(LEFT);
  textSize(14);
  text("76,502 rounded to the nearest thousand = _______", 20, 390);
  
  // Additional rounding practice without number lines
  textSize(14);
  text("Round to the nearest thousand:", 20, 440);
  text("91,256 → _______", 20, 470);
  text("38,741 → _______", 20, 500);
  text("45,499 → _______", 20, 530);
  text("67,500 → _______", 20, 560);
  
  // Place value reminder
  textSize(14);
  text("Remember: Look at the hundreds digit to decide!", 450, 470);
  text("If hundreds digit is 5 or more → round UP", 450, 500);
  text("If hundreds digit is 4 or less → round DOWN", 450, 530);
  
  // Practice with expanded form
  text("Write in expanded form, then round:", 20, 610);
  text("29,683 = _____ + _____ + _____ + _____ + _____", 20, 640);
  text("Rounded to nearest thousand: _______", 20, 670);
  
  noLoop();
}
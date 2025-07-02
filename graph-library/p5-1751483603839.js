function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("What is the probability of spinning red on this spinner?", 20, 30);
  
  // Draw spinner circle
  let centerX = 400;
  let centerY = 320;
  let radius = 120;
  
  // Calculate angles for each section
  let totalSections = 8; // 2 red + 1 yellow + 3 green + 2 purple
  let anglePerSection = 360 / totalSections;
  
  // Draw sections
  let currentAngle = 0;
  
  // 2 red sections
  fill(255, 0, 0);
  for(let i = 0; i < 2; i++) {
    arc(centerX, centerY, radius * 2, radius * 2, 
        radians(currentAngle), radians(currentAngle + anglePerSection));
    currentAngle += anglePerSection;
  }
  
  // 1 yellow section
  fill(255, 255, 0);
  arc(centerX, centerY, radius * 2, radius * 2, 
      radians(currentAngle), radians(currentAngle + anglePerSection));
  currentAngle += anglePerSection;
  
  // 3 green sections
  fill(0, 255, 0);
  for(let i = 0; i < 3; i++) {
    arc(centerX, centerY, radius * 2, radius * 2, 
        radians(currentAngle), radians(currentAngle + anglePerSection));
    currentAngle += anglePerSection;
  }
  
  // 2 purple sections
  fill(128, 0, 128);
  for(let i = 0; i < 2; i++) {
    arc(centerX, centerY, radius * 2, radius * 2, 
        radians(currentAngle), radians(currentAngle + anglePerSection));
    currentAngle += anglePerSection;
  }
  
  // Draw section lines
  stroke(0);
  strokeWeight(2);
  currentAngle = 0;
  for(let i = 0; i < totalSections; i++) {
    let x = centerX + cos(radians(currentAngle)) * radius;
    let y = centerY + sin(radians(currentAngle)) * radius;
    line(centerX, centerY, x, y);
    currentAngle += anglePerSection;
  }
  
  // Draw spinner arrow
  fill(0);
  noStroke();
  triangle(centerX, centerY - radius - 30, centerX - 8, centerY - radius - 15, centerX + 8, centerY - radius - 15);
  
  // Labels
  fill(0);
  textSize(14);
  text("Red: 2 sections", 550, 200);
  text("Yellow: 1 section", 550, 220);
  text("Green: 3 sections", 550, 240);
  text("Purple: 2 sections", 550, 260);
  text("Total: 8 sections", 550, 290);
  
  noLoop();
}
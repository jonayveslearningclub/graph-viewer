function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("Which color is most likely to be spun on this spinner?", 20, 30);
  text("Which color is least likely to be spun?", 20, 50);
  
  // Draw spinner circle
  let centerX = 400;
  let centerY = 320;
  let radius = 110;
  
  // Calculate angles for each section
  let totalSections = 10; // 1 red + 4 orange + 2 green + 3 pink
  let anglePerSection = 360 / totalSections;
  
  // Draw sections
  let currentAngle = 0;
  
  // 1 red section
  fill(255, 0, 0);
  arc(centerX, centerY, radius * 2, radius * 2, 
      radians(currentAngle), radians(currentAngle + anglePerSection));
  currentAngle += anglePerSection;
  
  // 4 orange sections
  fill(255, 165, 0);
  for(let i = 0; i < 4; i++) {
    arc(centerX, centerY, radius * 2, radius * 2, 
        radians(currentAngle), radians(currentAngle + anglePerSection));
    currentAngle += anglePerSection;
  }
  
  // 2 green sections
  fill(0, 200, 0);
  for(let i = 0; i < 2; i++) {
    arc(centerX, centerY, radius * 2, radius * 2, 
        radians(currentAngle), radians(currentAngle + anglePerSection));
    currentAngle += anglePerSection;
  }
  
  // 3 pink sections
  fill(255, 192, 203);
  for(let i = 0; i < 3; i++) {
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
  triangle(centerX, centerY - radius - 28, centerX - 7, centerY - radius - 15, centerX + 7, centerY - radius - 15);
  
  // Labels
  fill(0);
  textSize(14);
  text("Red: 1 section", 550, 190);
  text("Orange: 4 sections", 550, 210);
  text("Green: 2 sections", 550, 230);
  text("Pink: 3 sections", 550, 250);
  text("Total: 10 sections", 550, 280);
  
  noLoop();
}
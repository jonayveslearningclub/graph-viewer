function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("If you spin this spinner 24 times, how many times would you expect to get green?", 20, 30);
  
  // Draw spinner circle
  let centerX = 400;
  let centerY = 320;
  let radius = 100;
  
  // Calculate angles for each section
  let totalSections = 12; // 3 red + 2 yellow + 4 green + 3 blue
  let anglePerSection = 360 / totalSections;
  
  // Draw sections
  let currentAngle = 0;
  
  // 3 red sections
  fill(255, 0, 0);
  for(let i = 0; i < 3; i++) {
    arc(centerX, centerY, radius * 2, radius * 2, 
        radians(currentAngle), radians(currentAngle + anglePerSection));
    currentAngle += anglePerSection;
  }
  
  // 2 yellow sections
  fill(255, 255, 0);
  for(let i = 0; i < 2; i++) {
    arc(centerX, centerY, radius * 2, radius * 2, 
        radians(currentAngle), radians(currentAngle + anglePerSection));
    currentAngle += anglePerSection;
  }
  
  // 4 green sections
  fill(0, 200, 0);
  for(let i = 0; i < 4; i++) {
    arc(centerX, centerY, radius * 2, radius * 2, 
        radians(currentAngle), radians(currentAngle + anglePerSection));
    currentAngle += anglePerSection;
  }
  
  // 3 blue sections
  fill(0, 0, 255);
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
  triangle(centerX, centerY - radius - 25, centerX - 6, centerY - radius - 12, centerX + 6, centerY - radius - 12);
  
  // Labels
  fill(0);
  textSize(14);
  text("Red: 3 sections", 550, 180);
  text("Yellow: 2 sections", 550, 200);
  text("Green: 4 sections", 550, 220);
  text("Blue: 3 sections", 550, 240);
  text("Total: 12 sections", 550, 270);
  text("Number of spins: 24", 550, 300);
  
  noLoop();
}
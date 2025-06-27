function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("Create a pie chart showing how 24 students spend their weekend.", 20, 30);
  text("Playing games: 8 students, Reading: 4 students, Sports: 6 students, Movies: 6 students", 20, 55);
  text("Label each section and use different colors for each activity.", 20, 80);
  
  // Pie chart center and radius
  let centerX = 300;
  let centerY = 350;
  let radius = 120;
  
  // Calculate angles (total = 24 students)
  let totalStudents = 24;
  let gamesAngle = (8 / totalStudents) * 360;
  let readingAngle = (4 / totalStudents) * 360;
  let sportsAngle = (6 / totalStudents) * 360;
  let moviesAngle = (6 / totalStudents) * 360;
  
  // Draw pie slices
  let currentAngle = 0;
  
  // Playing games slice (8 students)
  fill(255, 100, 100);
  stroke(0);
  strokeWeight(2);
  arc(centerX, centerY, radius * 2, radius * 2, radians(currentAngle), radians(currentAngle + gamesAngle));
  currentAngle += gamesAngle;
  
  // Reading slice (4 students)
  fill(100, 255, 100);
  arc(centerX, centerY, radius * 2, radius * 2, radians(currentAngle), radians(currentAngle + readingAngle));
  currentAngle += readingAngle;
  
  // Sports slice (6 students)
  fill(100, 100, 255);
  arc(centerX, centerY, radius * 2, radius * 2, radians(currentAngle), radians(currentAngle + sportsAngle));
  currentAngle += sportsAngle;
  
  // Movies slice (6 students)
  fill(255, 255, 100);
  arc(centerX, centerY, radius * 2, radius * 2, radians(currentAngle), radians(currentAngle + moviesAngle));
  
  // Draw circle outline
  noFill();
  stroke(0);
  strokeWeight(3);
  circle(centerX, centerY, radius * 2);
  
  // Legend
  let legendX = 500;
  let legendY = 200;
  let legendSize = 20;
  let legendSpacing = 40;
  
  fill(0);
  textAlign(LEFT);
  textSize(16);
  text("Legend:", legendX, legendY - 20);
  
  // Playing games
  fill(255, 100, 100);
  rect(legendX, legendY, legendSize, legendSize);
  fill(0);
  text("Playing games (8)", legendX + 30, legendY + 15);
  
  // Reading
  fill(100, 255, 100);
  rect(legendX, legendY + legendSpacing, legendSize, legendSize);
  fill(0);
  text("Reading (4)", legendX + 30, legendY + legendSpacing + 15);
  
  // Sports
  fill(100, 100, 255);
  rect(legendX, legendY + legendSpacing * 2, legendSize, legendSize);
  fill(0);
  text("Sports (6)", legendX + 30, legendY + legendSpacing * 2 + 15);
  
  // Movies
  fill(255, 255, 100);
  rect(legendX, legendY + legendSpacing * 3, legendSize, legendSize);
  fill(0);
  text("Movies (6)", legendX + 30, legendY + legendSpacing * 3 + 15);
  
  noLoop();
}
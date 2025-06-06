function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Title
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("Compare the number of hours spent on activities by Team Red and Team Blue.", 20, 30);
  
  // Set up bar graph parameters
  let barWidth = 45;
  let spacing = 100;
  let startX = 80;
  let baseY = 460;
  let maxHeight = 250;
  
  // Data for Team Red and Team Blue
  let activities = ["Practice", "Games", "Study", "Rest"];
  let teamRedHours = [6, 4, 8, 10];
  let teamBlueHours = [8, 6, 5, 9];
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(60, baseY, 500, baseY); // x-axis
  line(60, baseY, 60, 160); // y-axis
  
  // Y-axis labels
  textAlign(RIGHT);
  textSize(12);
  for (let i = 0; i <= 12; i += 2) {
    let y = baseY - (i * maxHeight / 12);
    text(i, 55, y + 5);
    stroke(200);
    strokeWeight(1);
    line(60, y, 500, y);
  }
  
  // Draw bars and labels
  for (let i = 0; i < activities.length; i++) {
    let x = startX + i * spacing;
    
    // Team Red bars (red)
    fill(220, 80, 80);
    stroke(0);
    strokeWeight(1);
    let heightRed = (teamRedHours[i] / 12) * maxHeight;
    rect(x, baseY - heightRed, barWidth, heightRed);
    
    // Team Blue bars (blue)
    fill(80, 120, 220);
    let heightBlue = (teamBlueHours[i] / 12) * maxHeight;
    rect(x + barWidth + 8, baseY - heightBlue, barWidth, heightBlue);
    
    // Activity labels
    fill(0);
    textAlign(CENTER);
    text(activities[i], x + barWidth + 4, baseY + 20);
  }
  
  // Legend
  fill(220, 80, 80);
  rect(550, 180, 20, 15);
  fill(0);
  textAlign(LEFT);
  text("Team Red", 580, 192);
  
  fill(80, 120, 220);
  rect(550, 200, 20, 15);
  fill(0);
  text("Team Blue", 580, 212);
  
  // Axis labels
  textAlign(CENTER);
  text("Activities", 280, 500);
  
  push();
  translate(25, 310);
  rotate(-PI/2);
  text("Hours", 0, 0);
  pop();
  
  noLoop();
}
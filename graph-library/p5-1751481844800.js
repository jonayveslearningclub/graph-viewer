function setup() {
  createCanvas(windowWidth, windowHeight);
  background(240);
}

function draw() {
  // Question title
  fill(0);
  textSize(20);
  textAlign(LEFT);
  text("Fill in the bar graph showing hours spent on different activities per week", 50, 40);
  
  // Data
  let activities = ["Sleep", "School", "Homework", "Sports", "TV"];
  let hours = [56, 35, 14, 8, 12];
  
  // Graph setup
  let graphX = 150;
  let graphY = 100;
  let graphWidth = 450;
  let graphHeight = 380;
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(graphX, graphY + graphHeight, graphX + graphWidth, graphY + graphHeight); // x-axis
  line(graphX, graphY, graphX, graphY + graphHeight); // y-axis
  
  // Y-axis labels (0 to 60)
  textAlign(RIGHT);
  textSize(14);
  for (let i = 0; i <= 60; i += 10) {
    let y = graphY + graphHeight - (i * graphHeight / 60);
    text(i, graphX - 10, y + 5);
    stroke(200);
    strokeWeight(1);
    line(graphX, y, graphX + graphWidth, y);
  }
  
  // X-axis title
  textAlign(CENTER);
  textSize(16);
  fill(0);
  text("Weekly Activities", graphX + graphWidth/2, graphY + graphHeight + 60);
  
  // Y-axis title
  push();
  translate(graphX - 70, graphY + graphHeight/2);
  rotate(-PI/2);
  text("Hours per Week", 0, 0);
  pop();
  
  // Draw bars
  let barWidth = graphWidth / activities.length * 0.75;
  let barSpacing = graphWidth / activities.length;
  
  for (let i = 0; i < activities.length; i++) {
    let barHeight = (hours[i] / 60) * graphHeight;
    let x = graphX + i * barSpacing + barSpacing * 0.125;
    let y = graphY + graphHeight - barHeight;
    
    // Bar colors - different shade for each
    fill(80 + i * 40, 120 + i * 20, 180 - i * 25);
    stroke(0);
    strokeWeight(1);
    rect(x, y, barWidth, barHeight);
    
    // Activity name
    fill(0);
    textAlign(CENTER);
    textSize(13);
    text(activities[i], x + barWidth/2, graphY + graphHeight + 20);
    
    // Value on top of bar
    textSize(12);
    text(hours[i], x + barWidth/2, y - 10);
  }
  
  noLoop();
}
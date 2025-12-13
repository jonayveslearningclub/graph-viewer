function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  textSize(16);
  fill(0);
  text("Look at this bar graph showing favorite ice cream flavors.", 50, 30);
  text("Which type of graph would be better to show what fraction", 50, 50);
  text("each flavor represents of the total votes?", 50, 70);
  
  // Draw bar graph
  let barWidth = 60;
  let startX = 150;
  let baseY = 500;
  
  // Data
  let flavors = ["Vanilla", "Chocolate", "Strawberry", "Mint"];
  let votes = [25, 40, 15, 20];
  let colors = [color(255, 230, 200), color(139, 69, 19), color(255, 182, 193), color(144, 238, 144)];
  
  // Draw bars
  for (let i = 0; i < flavors.length; i++) {
    fill(colors[i]);
    rect(startX + i * 80, baseY - votes[i] * 8, barWidth, votes[i] * 8);
    
    // Labels
    fill(0);
    textAlign(CENTER);
    text(flavors[i], startX + i * 80 + barWidth/2, baseY + 20);
    text(votes[i], startX + i * 80 + barWidth/2, baseY - votes[i] * 8 - 10);
  }
  
  // Y-axis label
  textAlign(LEFT);
  text("Number of Votes", 50, 300);
  
  // Draw y-axis numbers
  for (let i = 0; i <= 50; i += 10) {
    text(i, 120, baseY - i * 8 + 5);
    stroke(200);
    line(140, baseY - i * 8, startX + 320, baseY - i * 8);
  }
  
  noStroke();
  
  noLoop();
}
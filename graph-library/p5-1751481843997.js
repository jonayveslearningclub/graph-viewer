function setup() {
  createCanvas(windowWidth, windowHeight);
  background(240);
}

function draw() {
  // Question title
  fill(0);
  textSize(20);
  textAlign(LEFT);
  text("Complete the bar graph showing favorite pizza toppings survey results", 50, 40);
  
  // Data
  let toppings = ["Pepperoni", "Mushroom", "Sausage", "Cheese", "Veggie"];
  let votes = [25, 18, 22, 30, 12];
  
  // Graph setup
  let graphX = 120;
  let graphY = 100;
  let graphWidth = 500;
  let graphHeight = 350;
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(graphX, graphY + graphHeight, graphX + graphWidth, graphY + graphHeight); // x-axis
  line(graphX, graphY, graphX, graphY + graphHeight); // y-axis
  
  // Y-axis labels (0 to 35)
  textAlign(RIGHT);
  textSize(14);
  for (let i = 0; i <= 35; i += 5) {
    let y = graphY + graphHeight - (i * graphHeight / 35);
    text(i, graphX - 10, y + 5);
    stroke(200);
    strokeWeight(1);
    line(graphX, y, graphX + graphWidth, y);
  }
  
  // X-axis title
  textAlign(CENTER);
  textSize(16);
  fill(0);
  text("Pizza Toppings", graphX + graphWidth/2, graphY + graphHeight + 70);
  
  // Y-axis title
  push();
  translate(graphX - 80, graphY + graphHeight/2);
  rotate(-PI/2);
  text("Number of Votes", 0, 0);
  pop();
  
  // Draw bars
  let barWidth = graphWidth / toppings.length * 0.7;
  let barSpacing = graphWidth / toppings.length;
  
  for (let i = 0; i < toppings.length; i++) {
    let barHeight = (votes[i] / 35) * graphHeight;
    let x = graphX + i * barSpacing + barSpacing * 0.15;
    let y = graphY + graphHeight - barHeight;
    
    // Bar colors
    let colors = [[255, 100, 100], [100, 255, 100], [100, 100, 255], [255, 255, 100], [255, 100, 255]];
    fill(colors[i][0], colors[i][1], colors[i][2]);
    stroke(0);
    strokeWeight(1);
    rect(x, y, barWidth, barHeight);
    
    // Topping name
    fill(0);
    textAlign(CENTER);
    textSize(11);
    push();
    translate(x + barWidth/2, graphY + graphHeight + 25);
    rotate(-PI/6);
    text(toppings[i], 0, 0);
    pop();
    
    // Value on top of bar
    textAlign(CENTER);
    text(votes[i], x + barWidth/2, y - 8);
  }
  
  noLoop();
}
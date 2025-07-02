function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("Create a bar graph showing favorite pizza toppings from a survey of 30 people", 20, 30);
  
  // Data labels
  textSize(14);
  text("Pepperoni: 11 people", 20, 60);
  text("Cheese: 8 people", 20, 80);
  text("Sausage: 5 people", 20, 100);
  text("Mushroom: 3 people", 20, 120);
  text("Peppers: 3 people", 20, 140);
  
  // Set up bar graph area
  let graphX = 200;
  let graphY = 180;
  let graphWidth = 480;
  let graphHeight = 320;
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(graphX, graphY + graphHeight, graphX + graphWidth, graphY + graphHeight); // x-axis
  line(graphX, graphY, graphX, graphY + graphHeight); // y-axis
  
  // Y-axis labels (number of people)
  textAlign(CENTER);
  textSize(12);
  for(let i = 0; i <= 12; i++) {
    let y = graphY + graphHeight - (i * graphHeight / 12);
    line(graphX - 5, y, graphX, y);
    fill(0);
    text(i, graphX - 15, y + 4);
  }
  
  // Y-axis title
  push();
  translate(graphX - 60, graphY + graphHeight/2);
  rotate(-PI/2);
  textAlign(CENTER);
  text("Number of People", 0, 0);
  pop();
  
  // X-axis title
  textAlign(CENTER);
  text("Pizza Toppings", graphX + graphWidth/2, graphY + graphHeight + 60);
  
  // Topping labels on x-axis
  let toppings = ["Pepperoni", "Cheese", "Sausage", "Mushroom", "Peppers"];
  let barWidth = graphWidth / 5;
  
  for(let i = 0; i < toppings.length; i++) {
    let x = graphX + (i * barWidth) + barWidth/2;
    text(toppings[i], x, graphY + graphHeight + 25);
  }
  
  // Grid lines
  stroke(200);
  strokeWeight(1);
  for(let i = 1; i < 12; i++) {
    let y = graphY + graphHeight - (i * graphHeight / 12);
    line(graphX, y, graphX + graphWidth, y);
  }
  
  noLoop();
}
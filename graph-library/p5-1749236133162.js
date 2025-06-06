function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Title
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("1. A survey was conducted about favorite pizza toppings among", 20, 30);
  text("middle school and high school students. Results are shown below.", 20, 50);
  
  // Graph title
  textSize(14);
  textAlign(CENTER);
  text("Favorite Pizza Topping Survey", 400, 90);
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(100, 450, 700, 450); // x-axis
  line(100, 450, 100, 150); // y-axis
  
  // Y-axis labels and grid lines
  textAlign(RIGHT);
  textSize(12);
  for (let i = 0; i <= 25; i += 5) {
    let y = 450 - (i * 12);
    text(i, 95, y + 4);
    if (i > 0) {
      stroke(200);
      strokeWeight(1);
      line(100, y, 700, y);
    }
  }
  
  // Y-axis title
  push();
  translate(50, 300);
  rotate(-PI/2);
  textAlign(CENTER);
  fill(0);
  text("Number of Students", 0, 0);
  pop();
  
  // X-axis labels
  textAlign(CENTER);
  let toppings = ["Pepperoni", "Cheese", "Sausage", "Vegetarian"];
  let xPositions = [200, 300, 450, 600];
  
  for (let i = 0; i < toppings.length; i++) {
    text(toppings[i], xPositions[i], 470);
  }
  
  // X-axis title
  text("Pizza Topping", 400, 500);
  
  // Data values
  let middleSchoolData = [18, 12, 7, 4];
  let highSchoolData = [14, 8, 15, 9];
  
  // Draw bars
  let barWidth = 30;
  
  for (let i = 0; i < toppings.length; i++) {
    // Middle school bars (light gray)
    fill(150);
    stroke(0);
    strokeWeight(1);
    let middleHeight = middleSchoolData[i] * 12;
    rect(xPositions[i] - 20, 450 - middleHeight, barWidth, middleHeight);
    
    // High school bars (dark gray)
    fill(80);
    let highHeight = highSchoolData[i] * 12;
    rect(xPositions[i] + 15, 450 - highHeight, barWidth, highHeight);
    
    // Add value labels on bars
    fill(0);
    textAlign(CENTER);
    text(middleSchoolData[i], xPositions[i] - 5, 445 - middleHeight);
    text(highSchoolData[i], xPositions[i] + 30, 445 - highHeight);
  }
  
  // Legend
  fill(150);
  rect(520, 120, 20, 15);
  fill(80);
  rect(520, 140, 20, 15);
  
  fill(0);
  textAlign(LEFT);
  text("Middle School", 550, 132);
  text("High School", 550, 152);
  
  // Questions
  textAlign(LEFT);
  text("a. Which topping was chosen most by high school students?", 50, 530);
  text("b. How many more middle school students chose pepperoni than high school students?", 50, 550);
  
  noLoop();
}
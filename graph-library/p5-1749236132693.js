function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Title
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("2. Boys and girls at summer camp were asked about their favorite", 20, 30);
  text("outdoor activity. The results are displayed in the double bar graph.", 20, 50);
  
  // Graph title
  textSize(14);
  textAlign(CENTER);
  text("Favorite Outdoor Activity", 400, 90);
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(100, 450, 700, 450); // x-axis
  line(100, 450, 100, 150); // y-axis
  
  // Y-axis labels and grid lines
  textAlign(RIGHT);
  textSize(12);
  for (let i = 0; i <= 20; i += 4) {
    let y = 450 - (i * 15);
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
  text("Number of Campers", 0, 0);
  pop();
  
  // X-axis labels
  textAlign(CENTER);
  let activities = ["Hiking", "Canoeing", "Fishing", "Rock Climbing"];
  let xPositions = [180, 300, 450, 620];
  
  for (let i = 0; i < activities.length; i++) {
    text(activities[i], xPositions[i], 470);
  }
  
  // X-axis title
  text("Activity Type", 400, 500);
  
  // Data values
  let boysData = [16, 8, 12, 6];
  let girlsData = [10, 14, 4, 18];
  
  // Draw bars
  let barWidth = 30;
  
  for (let i = 0; i < activities.length; i++) {
    // Boys bars (light gray)
    fill(150);
    stroke(0);
    strokeWeight(1);
    let boysHeight = boysData[i] * 15;
    rect(xPositions[i] - 20, 450 - boysHeight, barWidth, boysHeight);
    
    // Girls bars (dark gray)
    fill(80);
    let girlsHeight = girlsData[i] * 15;
    rect(xPositions[i] + 15, 450 - girlsHeight, barWidth, girlsHeight);
    
    // Add value labels on bars
    fill(0);
    textAlign(CENTER);
    text(boysData[i], xPositions[i] - 5, 445 - boysHeight);
    text(girlsData[i], xPositions[i] + 30, 445 - girlsHeight);
  }
  
  // Legend
  fill(150);
  rect(520, 120, 20, 15);
  fill(80);
  rect(520, 140, 20, 15);
  
  fill(0);
  textAlign(LEFT);
  text("Boys", 550, 132);
  text("Girls", 550, 152);
  
  // Questions
  textAlign(LEFT);
  text("a. Which activity was most popular among girls?", 50, 530);
  text("b. What was the total number of campers who chose hiking?", 50, 550);
  
  noLoop();
}
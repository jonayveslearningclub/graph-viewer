function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Question text
  fill(0);
  textSize(16);
  text("Question 3: A survey asked 80 people about their preferred season.", 10, 25);
  text("Results: Spring (24), Summer (28), Fall (16), Winter (12). Which graph", 10, 45);
  text("would best show each season as a portion of the total responses?", 10, 65);
  
  // Current data shown in table format
  textSize(14);
  text("Survey Results:", 50, 110);
  
  let seasons = ["Spring", "Summer", "Fall", "Winter"];
  let votes = [24, 28, 16, 12];
  let colors = [[100, 255, 100], [255, 200, 100], [255, 150, 50], [150, 200, 255]];
  
  // Draw table
  stroke(0);
  fill(240);
  rect(50, 130, 300, 140);
  
  // Table headers
  fill(0);
  textAlign(LEFT);
  text("Season", 60, 150);
  text("Number of People", 180, 150);
  
  line(50, 160, 350, 160);
  
  // Table data
  for (let i = 0; i < seasons.length; i++) {
    fill(colors[i]);
    rect(55, 170 + i * 25, 20, 20);
    fill(0);
    text(seasons[i], 85, 185 + i * 25);
    text(votes[i], 220, 185 + i * 25);
  }
  
  // Show total
  stroke(0);
  line(50, 270, 350, 270);
  fill(0);
  textStyle(BOLD);
  text("Total", 85, 285);
  text("80", 220, 285);
  textStyle(NORMAL);
  
  // Additional context
  textSize(12);
  text("Note: Each response represents one person's preference", 50, 320);
  text("Goal: Show how each season compares to the whole group", 50, 340);
  
  // Visual hint without giving away answer
  textSize(14);
  text("Consider: What shows parts of a whole most clearly?", 50, 380);
  
  noLoop();
}
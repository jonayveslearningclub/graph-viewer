function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Question text
  fill(0);
  textSize(16);
  text("Question 2: The data below shows test scores for 40 students. Which graph", 10, 25);
  text("type would best show how the scores are distributed across different ranges?", 10, 45);
  
  // Data table
  textSize(14);
  text("Test Scores: 67, 72, 85, 91, 78, 88, 76, 82, 95, 89, 73, 86, 92, 79, 84,", 10, 80);
  text("87, 75, 90, 83, 77, 94, 81, 88, 74, 93, 85, 78, 91, 86, 80, 89, 76, 92, 87, 84, 82, 96, 79, 88, 85", 10, 100);
  
  // Show current representation as a simple list
  textSize(12);
  text("Current data format: Individual scores listed", 10, 140);
  
  // Visual representation showing the raw data is hard to interpret
  fill(100);
  textAlign(LEFT);
  text("Raw data is difficult to analyze for patterns and distribution", 10, 170);
  
  // Show score ranges that could be used
  textSize(14);
  fill(0);
  text("Possible score ranges to consider:", 50, 220);
  
  let ranges = ["60-69", "70-79", "80-89", "90-99"];
  let rangeCounts = [1, 12, 19, 8];
  
  textAlign(LEFT);
  for (let i = 0; i < ranges.length; i++) {
    text(ranges[i] + ": " + rangeCounts[i] + " students", 70, 250 + i * 25);
  }
  
  // Simple visual showing data points scattered
  fill(200, 100, 100);
  textSize(10);
  text("Individual data points (hard to see patterns):", 50, 380);
  
  // Scatter some dots to represent difficulty of reading raw data
  for (let i = 0; i < 40; i++) {
    let x = 60 + (i % 20) * 30;
    let y = 400 + Math.floor(i / 20) * 20;
    circle(x, y, 6);
  }
  
  noLoop();
}
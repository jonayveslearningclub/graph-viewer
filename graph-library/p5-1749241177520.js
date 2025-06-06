function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Title
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("Compare the test scores of Class A and Class B for different subjects.", 20, 30);
  
  // Set up bar graph parameters
  let barWidth = 35;
  let spacing = 90;
  let startX = 120;
  let baseY = 480;
  let maxHeight = 280;
  
  // Data for Class A and Class B
  let subjects = ["Math", "Science", "English", "History"];
  let classAScores = [85, 78, 92, 88];
  let classBScores = [80, 84, 87, 90];
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(100, baseY, 520, baseY); // x-axis
  line(100, baseY, 100, 150); // y-axis
  
  // Y-axis labels
  textAlign(RIGHT);
  textSize(12);
  for (let i = 0; i <= 100; i += 10) {
    let y = baseY - (i * maxHeight / 100);
    text(i, 95, y + 5);
    stroke(200);
    strokeWeight(1);
    line(100, y, 520, y);
  }
  
  // Draw bars and labels
  for (let i = 0; i < subjects.length; i++) {
    let x = startX + i * spacing;
    
    // Class A bars (green)
    fill(100, 200, 100);
    stroke(0);
    strokeWeight(1);
    let heightA = (classAScores[i] / 100) * maxHeight;
    rect(x, baseY - heightA, barWidth, heightA);
    
    // Class B bars (orange)
    fill(255, 150, 80);
    let heightB = (classBScores[i] / 100) * maxHeight;
    rect(x + barWidth + 5, baseY - heightB, barWidth, heightB);
    
    // Subject labels
    fill(0);
    textAlign(CENTER);
    text(subjects[i], x + barWidth + 2, baseY + 20);
  }
  
  // Legend
  fill(100, 200, 100);
  rect(580, 180, 20, 15);
  fill(0);
  textAlign(LEFT);
  text("Class A", 610, 192);
  
  fill(255, 150, 80);
  rect(580, 200, 20, 15);
  fill(0);
  text("Class B", 610, 212);
  
  // Axis labels
  textAlign(CENTER);
  text("Subjects", 310, 520);
  
  push();
  translate(40, 315);
  rotate(-PI/2);
  text("Test Scores", 0, 0);
  pop();
  
  noLoop();
}
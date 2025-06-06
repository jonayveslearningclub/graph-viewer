function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Title
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("3. Students and teachers were surveyed about their favorite sport.", 20, 30);
  text("Results are shown in the double bar graph below.", 20, 50);
  
  // Graph title
  textSize(14);
  textAlign(CENTER);
  text("Favorite Sport Survey", 400, 90);
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(100, 450, 700, 450); // x-axis
  line(100, 450, 100, 150); // y-axis
  
  // Y-axis labels and grid lines
  textAlign(RIGHT);
  textSize(12);
  for (let i = 0; i <= 30; i += 5) {
    let y = 450 - (i * 10);
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
  text("Number of People", 0, 0);
  pop();
  
  // X-axis labels
  textAlign(CENTER);
  let sports = ["Soccer", "Basketball", "Tennis", "Swimming"];
  let xPositions = [200, 300, 450, 600];
  
  for (let i = 0; i < sports.length; i++) {
    text(sports[i], xPositions[i], 470);
  }
  
  // X-axis title
  text("Type of Sport", 400, 500);
  
  // Data values
  let studentData = [15, 20, 8, 12];
  let teacherData = [8, 6, 18, 10];
  
  // Draw bars
  let barWidth = 30;
  
  for (let i = 0; i < sports.length; i++) {
    // Student bars (light gray)
    fill(150);
    stroke(0);
    strokeWeight(1);
    let studentHeight = studentData[i] * 10;
    rect(xPositions[i] - 20, 450 - studentHeight, barWidth, studentHeight);
    
    // Teacher bars (dark gray)
    fill(80);
    let teacherHeight = teacherData[i] * 10;
    rect(xPositions[i] + 15, 450 - teacherHeight, barWidth, teacherHeight);
    
    // Add value labels on bars
    fill(0);
    textAlign(CENTER);
    text(studentData[i], xPositions[i] - 5, 445 - studentHeight);
    text(teacherData[i], xPositions[i] + 30, 445 - teacherHeight);
  }
  
  // Legend
  fill(150);
  rect(520, 120, 20, 15);
  fill(80);
  rect(520, 140, 20, 15);
  
  fill(0);
  textAlign(LEFT);
  text("Students", 550, 132);
  text("Teachers", 550, 152);
  
  // Questions
  textAlign(LEFT);
  text("a. What was the most popular sport among students?", 50, 530);
  text("b. Which sport had the smallest difference between student and teacher preferences?", 50, 550);
  
  noLoop();
}
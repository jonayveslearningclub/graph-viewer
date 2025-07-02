function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("Create a bar graph showing the favorite pets of 25 students surveyed", 20, 30);
  
  // Data labels
  textSize(14);
  text("Dogs: 8 students", 20, 60);
  text("Cats: 6 students", 20, 80);
  text("Birds: 4 students", 20, 100);
  text("Fish: 3 students", 20, 120);
  text("Hamsters: 4 students", 20, 140);
  
  // Set up bar graph area
  let graphX = 150;
  let graphY = 200;
  let graphWidth = 500;
  let graphHeight = 300;
  
  // Draw axes
  stroke(0);
  strokeWeight(2);
  line(graphX, graphY + graphHeight, graphX + graphWidth, graphY + graphHeight); // x-axis
  line(graphX, graphY, graphX, graphY + graphHeight); // y-axis
  
  // Y-axis labels (number of students)
  textAlign(CENTER);
  textSize(12);
  for(let i = 0; i <= 10; i++) {
    let y = graphY + graphHeight - (i * graphHeight / 10);
    line(graphX - 5, y, graphX, y);
    fill(0);
    text(i, graphX - 15, y + 4);
  }
  
  // Y-axis title
  push();
  translate(graphX - 60, graphY + graphHeight/2);
  rotate(-PI/2);
  textAlign(CENTER);
  text("Number of Students", 0, 0);
  pop();
  
  // X-axis title
  textAlign(CENTER);
  text("Pet Types", graphX + graphWidth/2, graphY + graphHeight + 60);
  
  // Pet labels on x-axis
  let pets = ["Dogs", "Cats", "Birds", "Fish", "Hamsters"];
  let barWidth = graphWidth / 5;
  
  for(let i = 0; i < pets.length; i++) {
    let x = graphX + (i * barWidth) + barWidth/2;
    text(pets[i], x, graphY + graphHeight + 25);
  }
  
  // Grid lines
  stroke(200);
  strokeWeight(1);
  for(let i = 1; i < 10; i++) {
    let y = graphY + graphHeight - (i * graphHeight / 10);
    line(graphX, y, graphX + graphWidth, y);
  }
  
  noLoop();
}
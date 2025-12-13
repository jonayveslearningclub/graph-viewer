function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  textSize(16);
  fill(0);
  text("This line graph shows temperature changes over 6 hours.", 50, 30);
  text("What type of graph would be most appropriate to show", 50, 50);
  text("how many students prefer each subject in school?", 50, 70);
  
  // Draw coordinate plane
  stroke(0);
  line(100, 450, 700, 450); // x-axis
  line(150, 150, 150, 500); // y-axis
  
  // Grid lines and labels
  stroke(200);
  for (let i = 0; i <= 6; i++) {
    let x = 150 + i * 80;
    line(x, 150, x, 450);
    fill(0);
    textAlign(CENTER);
    text(i, x, 470);
  }
  
  for (let i = 10; i <= 90; i += 10) {
    let y = 450 - (i - 10) * 30;
    stroke(200);
    line(150, y, 630, y);
    fill(0);
    textAlign(RIGHT);
    text(i, 140, y + 5);
  }
  
  // Axis labels
  textAlign(CENTER);
  text("Hours", 400, 520);
  textAlign(LEFT);
  text("Temperature (°F)", 20, 300);
  
  // Plot temperature data
  let temps = [75, 78, 82, 85, 80, 77, 73];
  fill(255, 0, 0);
  noStroke();
  
  for (let i = 0; i < temps.length; i++) {
    let x = 150 + i * 80;
    let y = 450 - (temps[i] - 10) * 30;
    circle(x, y, 8);
  }
  
  // Connect points with lines
  stroke(255, 0, 0);
  strokeWeight(2);
  for (let i = 0; i < temps.length - 1; i++) {
    let x1 = 150 + i * 80;
    let y1 = 450 - (temps[i] - 10) * 30;
    let x2 = 150 + (i + 1) * 80;
    let y2 = 450 - (temps[i + 1] - 10) * 30;
    line(x1, y1, x2, y2);
  }
  
  noLoop();
}
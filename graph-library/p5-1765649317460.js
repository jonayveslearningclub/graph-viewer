function setup() {
  createCanvas(800, 600);
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("2. This line graph shows temperature over 6 hours. What type of graph", 20, 30);
  text("would better show the total rainfall for each of these same 6 hours?", 20, 50);
  
  // Draw coordinate plane
  let centerX = 400;
  let centerY = 350;
  let scale = 25;
  
  // Grid lines
  stroke(220);
  strokeWeight(1);
  for (let i = -10; i <= 10; i++) {
    // Vertical lines
    line(centerX + i * scale, centerY - 250, centerX + i * scale, centerY + 100);
    // Horizontal lines
    line(centerX - 250, centerY + i * scale, centerX + 250, centerY + i * scale);
  }
  
  // Main axes
  stroke(0);
  strokeWeight(2);
  line(centerX - 250, centerY, centerX + 250, centerY); // x-axis
  line(centerX, centerY - 250, centerX, centerY + 100); // y-axis
  
  // Axis labels
  fill(0);
  textAlign(CENTER, TOP);
  textSize(12);
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      text(i, centerX + i * scale, centerY + 5);
    }
  }
  
  textAlign(RIGHT, CENTER);
  for (let i = -4; i <= 10; i++) {
    if (i !== 0) {
      text(i, centerX - 5, centerY - i * scale);
    }
  }
  
  // Plot temperature data points
  let hours = [1, 2, 3, 4, 5, 6];
  let temps = [3, 5, 8, 6, 4, 2];
  
  // Draw line segments
  stroke(200, 100, 100);
  strokeWeight(3);
  for (let i = 0; i < hours.length - 1; i++) {
    let x1 = centerX + hours[i] * scale;
    let y1 = centerY - temps[i] * scale;
    let x2 = centerX + hours[i + 1] * scale;
    let y2 = centerY - temps[i + 1] * scale;
    line(x1, y1, x2, y2);
  }
  
  // Draw points
  fill(200, 50, 50);
  stroke(0);
  strokeWeight(1);
  for (let i = 0; i < hours.length; i++) {
    let x = centerX + hours[i] * scale;
    let y = centerY - temps[i] * scale;
    circle(x, y, 8);
  }
  
  // Labels
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(14);
  text("Temperature (°C)", centerX - 180, 150);
  text("Hours", centerX + 200, centerY + 30);
  
  noLoop();
}

function draw() {
  // Drawing is complete in setup
}
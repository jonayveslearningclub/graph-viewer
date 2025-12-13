function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  textSize(16);
  fill(0);
  text("This pie chart shows how students travel to school.", 50, 30);
  text("If you wanted to compare the exact number of students", 50, 50);
  text("using each transportation method, what graph type would work better?", 50, 70);
  
  // Draw pie chart
  let centerX = 400;
  let centerY = 350;
  let radius = 120;
  
  // Data (in degrees)
  let methods = ["Bus", "Walk", "Car", "Bike"];
  let angles = [180, 90, 72, 18]; // degrees
  let colors = [color(255, 165, 0), color(0, 255, 0), color(0, 0, 255), color(255, 0, 255)];
  
  // Draw pie slices
  let startAngle = 0;
  for (let i = 0; i < methods.length; i++) {
    fill(colors[i]);
    arc(centerX, centerY, radius * 2, radius * 2, radians(startAngle), radians(startAngle + angles[i]));
    
    // Labels
    let labelAngle = startAngle + angles[i] / 2;
    let labelX = centerX + cos(radians(labelAngle)) * (radius + 40);
    let labelY = centerY + sin(radians(labelAngle)) * (radius + 40);
    
    fill(0);
    textAlign(CENTER);
    text(methods[i], labelX, labelY);
    
    startAngle += angles[i];
  }
  
  // Legend
  for (let i = 0; i < methods.length; i++) {
    fill(colors[i]);
    rect(600, 200 + i * 30, 20, 20);
    fill(0);
    textAlign(LEFT);
    text(methods[i], 630, 215 + i * 30);
  }
  
  noLoop();
}
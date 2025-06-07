function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  // Title
  fill(0);
  textSize(18);
  textAlign(LEFT);
  text("3. This pie chart shows how Emma spent her $12 allowance. How much money did she spend on toys?", 20, 30);
  
  // Create pie chart
  let centerX = width/2;
  let centerY = height/2 + 20;
  let radius = 120;
  
  // Data: spending amounts out of $12
  let categories = ["Toys", "Snacks", "Books", "Savings"];
  let amounts = [3, 2, 4, 3]; // dollars
  let colors = [color(255, 100, 100), color(100, 255, 100), color(100, 100, 255), color(255, 255, 100)];
  
  // Calculate angles
  let total = 12;
  let angles = [];
  for(let i = 0; i < amounts.length; i++) {
    angles.push((amounts[i] / total) * TWO_PI);
  }
  
  // Draw pie slices
  let currentAngle = -PI/2; // Start at top
  
  for(let i = 0; i < categories.length; i++) {
    fill(colors[i]);
    stroke(0);
    strokeWeight(2);
    
    arc(centerX, centerY, radius * 2, radius * 2, currentAngle, currentAngle + angles[i]);
    
    // Label each slice
    let labelAngle = currentAngle + angles[i] / 2;
    let labelX = centerX + cos(labelAngle) * (radius * 0.7);
    let labelY = centerY + sin(labelAngle) * (radius * 0.7);
    
    fill(0);
    textAlign(CENTER);
    textSize(12);
    text(categories[i], labelX, labelY);
    text("$" + amounts[i], labelX, labelY + 15);
    
    currentAngle += angles[i];
  }
  
  // Legend
  let legendX = centerX + radius + 50;
  let legendY = centerY - 80;
  
  textAlign(LEFT);
  textSize(14);
  text("Legend:", legendX, legendY);
  
  for(let i = 0; i < categories.length; i++) {
    fill(colors[i]);
    rect(legendX, legendY + 20 + (i * 25), 15, 15);
    
    fill(0);
    text(categories[i] + ": $" + amounts[i], legendX + 20, legendY + 32 + (i * 25));
  }
  
  // Total at bottom
  textAlign(CENTER);
  textSize(14);
  text("Total Allowance: $12", centerX, centerY + radius + 40);
  
  noLoop();
}
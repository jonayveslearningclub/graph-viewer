function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  textSize(16);
  fill(0);
  text("Which type of graph would best display the favorite colors of 25 students?", 50, 30);
  text("A) Line graph  B) Bar graph  C) Scatter plot  D) Circle graph", 50, 50);
  
  // Sample data visualization
  textSize(14);
  text("Survey Data: Red-8, Blue-6, Green-5, Yellow-4, Purple-2", 50, 90);
  
  // Show different graph type examples
  textSize(12);
  text("Consider which graph type works best for categorical data:", 50, 120);
  
  // Bar graph example outline
  stroke(0);
  strokeWeight(2);
  noFill();
  rect(100, 200, 200, 150);
  text("Bar Graph", 160, 190);
  
  // Line graph example outline  
  rect(350, 200, 200, 150);
  text("Line Graph", 410, 190);
  
  // Circle graph example outline
  circle(450, 450, 100);
  text("Circle Graph", 410, 510);
  
  // Scatter plot example outline
  rect(100, 400, 200, 100);
  text("Scatter Plot", 160, 390);
  
  noLoop();
}
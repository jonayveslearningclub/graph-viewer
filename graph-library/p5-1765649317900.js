function setup() {
  createCanvas(800, 600);
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("3. Here is data about students' favorite pizza toppings. Which graph type", 20, 30);
  text("would best show how each topping compares as part of the whole class?", 20, 50);
  
  // Data table
  let toppings = ["Pepperoni", "Cheese", "Sausage", "Mushroom", "Peppers"];
  let students = [12, 8, 6, 4, 10];
  
  // Draw table
  stroke(0);
  strokeWeight(1);
  fill(240);
  rect(200, 100, 400, 200);
  
  // Table headers
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(14);
  text("Pizza Topping", 300, 130);
  text("Number of Students", 500, 130);
  
  // Horizontal line under headers
  line(200, 150, 600, 150);
  
  // Vertical line separating columns
  line(400, 100, 400, 300);
  
  // Fill in data
  textSize(12);
  for (let i = 0; i < toppings.length; i++) {
    let y = 170 + (i * 25);
    text(toppings[i], 300, y);
    text(students[i], 500, y);
    
    // Horizontal lines between rows
    if (i < toppings.length - 1) {
      stroke(180);
      line(200, y + 12, 600, y + 12);
      stroke(0);
    }
  }
  
  // Calculate total
  let total = 0;
  for (let i = 0; i < students.length; i++) {
    total += students[i];
  }
  
  // Total row
  fill(200);
  rect(200, 275, 400, 25);
  fill(0);
  textSize(13);
  text("Total Students", 300, 287);
  text(total, 500, 287);
  
  // Additional instruction
  textAlign(LEFT, CENTER);
  textSize(14);
  text("Total surveyed: " + total + " students", 220, 350);
  
  noLoop();
}

function draw() {
  // Drawing is complete in setup
}
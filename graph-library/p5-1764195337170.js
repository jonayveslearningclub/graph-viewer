function setup() {
  createCanvas(800, 600);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(240);
  
  // Question text
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text("What percentage of students chose Pizza as their favorite food?", 20, 30);
  
  // Chart title
  textAlign(CENTER);
  textSize(14);
  text("Favorite Foods Survey Results", 400, 80);
  
  let centerX = 400;
  let centerY = 300;
  let radius = 120;
  
  // Data: Pizza=15, Burgers=10, Tacos=8, Pasta=7 (Total=40)
  let total = 40;
  let pizza = 15;
  let burgers = 10;
  let tacos = 8;
  let pasta = 7;
  
  let startAngle = 0;
  
  // Pizza slice (15/40 = 37.5% of circle)
  fill(255, 100, 100);
  let pizzaAngle = (pizza / total) * TWO_PI;
  arc(centerX, centerY, radius * 2, radius * 2, startAngle, startAngle + pizzaAngle);
  startAngle += pizzaAngle;
  
  // Burgers slice (10/40 = 25% of circle)
  fill(150, 200, 100);
  let burgersAngle = (burgers / total) * TWO_PI;
  arc(centerX, centerY, radius * 2, radius * 2, startAngle, startAngle + burgersAngle);
  startAngle += burgersAngle;
  
  // Tacos slice (8/40 = 20% of circle)
  fill(255, 200, 100);
  let tacosAngle = (tacos / total) * TWO_PI;
  arc(centerX, centerY, radius * 2, radius * 2, startAngle, startAngle + tacosAngle);
  startAngle += tacosAngle;
  
  // Pasta slice (7/40 = 17.5% of circle)
  fill(150, 150, 255);
  let pastaAngle = (pasta / total) * TWO_PI;
  arc(centerX, centerY, radius * 2, radius * 2, startAngle, startAngle + pastaAngle);
  
  // Labels with counts
  fill(0);
  textSize(12);
  text("Pizza: 15", centerX - 80, centerY - 40);
  text("Burgers: 10", centerX + 80, centerY - 20);
  text("Tacos: 8", centerX + 60, centerY + 60);
  text("Pasta: 7", centerX - 70, centerY + 40);
  
  // Legend
  fill(255, 100, 100);
  rect(550, 150, 20, 15);
  fill(0);
  text("Pizza", 585, 158);
  
  fill(150, 200, 100);
  rect(550, 180, 20, 15);
  fill(0);
  text("Burgers", 590, 188);
  
  fill(255, 200, 100);
  rect(550, 210, 20, 15);
  fill(0);
  text("Tacos", 585, 218);
  
  fill(150, 150, 255);
  rect(550, 240, 20, 15);
  fill(0);
  text("Pasta", 585, 248);
  
  noLoop();
}
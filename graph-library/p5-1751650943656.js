function setup() {
  createCanvas(800, 600);
  background(240);
}

function draw() {
  // Question text
  fill(0);
  textSize(16);
  text("2. Mark bought a sandwich for $7 and a drink for $3. He paid with a $20 bill.", 20, 30);
  text("How much change should he receive?", 20, 50);
  
  // Draw $20 bill
  fill(50, 150, 50);
  stroke(0);
  strokeWeight(2);
  rect(100, 100, 180, 80);
  fill(255);
  textSize(20);
  text("$20", 170, 150);
  fill(0);
  textSize(12);
  text("Twenty Dollar Bill", 130, 195);
  
  // Draw sandwich
  fill(210, 180, 140);
  stroke(0);
  strokeWeight(2);
  rect(400, 120, 80, 40);
  fill(100, 200, 100);
  rect(405, 125, 70, 8);
  fill(200, 50, 50);
  rect(405, 133, 70, 6);
  fill(255, 255, 100);
  rect(405, 139, 70, 6);
  fill(150, 75, 50);
  rect(405, 145, 70, 10);
  fill(0);
  textSize(12);
  text("Sandwich: $7", 400, 180);
  
  // Draw drink
  fill(100, 150, 255);
  stroke(0);
  strokeWeight(2);
  rect(520, 110, 30, 60);
  fill(0);
  textSize(12);
  text("Drink: $3", 510, 185);
  
  // Arrow showing transaction
  stroke(0);
  strokeWeight(3);
  line(300, 140, 380, 140);
  // Arrow head
  line(375, 135, 380, 140);
  line(375, 145, 380, 140);
  
  // Total cost calculation area
  fill(0);
  textSize(14);
  text("Total cost = Sandwich + Drink", 100, 250);
  text("Change = Amount paid - Total cost", 100, 280);
  
  noLoop();
}
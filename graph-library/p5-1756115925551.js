function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("In triangle GHI, side GH = x, side HI = 35, and side GI = 37.", 20, 30);
  text("The altitude from H to GI is 28. Find x to determine the perimeter.", 20, 50);
  
  // Draw triangle GHI
  stroke(0);
  strokeWeight(2);
  fill(255);
  
  // Triangle vertices
  let G = {x: 150, y: 450};
  let H = {x: 280, y: 150};
  let I = {x: 500, y: 450};
  
  // Draw triangle
  triangle(G.x, G.y, H.x, H.y, I.x, I.y);
  
  // Draw altitude from H to GI
  stroke(255, 0, 0);
  strokeWeight(1);
  line(H.x, H.y, H.x, G.y);
  
  // Mark right angle
  stroke(255, 0, 0);
  line(H.x - 8, G.y, H.x - 8, G.y - 8);
  line(H.x - 8, G.y - 8, H.x, G.y - 8);
  
  // Labels
  fill(0);
  textSize(14);
  text("G", G.x - 15, G.y + 15);
  text("H", H.x - 15, H.y - 10);
  text("I", I.x + 5, I.y + 15);
  
  // Side labels
  text("x", (G.x + H.x)/2 - 15, (G.y + H.y)/2);
  text("35", (H.x + I.x)/2 + 5, (H.y + I.y)/2);
  text("37", (G.x + I.x)/2, G.y + 25);
  text("28", H.x + 10, (H.y + G.y)/2);
  
  noLoop();
}
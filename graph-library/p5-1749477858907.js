function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Question text
  fill(0);
  textSize(16);
  text("Which capital letters have exactly one line of symmetry?", 20, 30);
  text("Circle all letters that apply.", 20, 50);
  
  // Draw letters in a grid
  fill(0);
  textSize(60);
  textAlign(CENTER, CENTER);
  
  let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  let x = 120;
  let y = 150;
  
  for (let i = 0; i < 8; i++) {
    if (i == 4) {
      x = 120;
      y = 280;
    }
    text(letters[i], x, y);
    x += 120;
  }
  
  // Second row of letters
  let letters2 = ['I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];
  x = 120;
  y = 410;
  
  for (let i = 0; i < 8; i++) {
    if (i == 4) {
      x = 120;
      y = 540;
    }
    text(letters2[i], x, y);
    x += 120;
  }
  
  noLoop();
}
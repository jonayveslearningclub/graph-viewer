function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240);
  
  // Question text
  fill(0);
  textSize(16);
  text("In triangle PQR, angle P = 35&#176; and angle Q = 70&#176;.", 20, 30);
  text("Find the measure of angle R.", 20, 50);
  
  // Draw triangle
  let P_x = 300;
  let P_y = 400;
  let Q_x = 500;
  let Q_y = 400;
  let R_x = 450;
  let R_y = 250;
  
  stroke(0);
  strokeWeight(2);
  fill(200, 255, 200, 100);
  triangle(P_x, P_y, Q_x, Q_y, R_x, R_y);
  
  // Label vertices
  fill(0);
  textSize(18);
  text("P", P_x - 15, P_y + 5);
  text("Q", Q_x + 10, Q_y + 5);
  text("R", R_x + 5, R_y - 10);
  
  // Label known angles
  textSize(14);
  text("35&#176;", P_x + 15, P_y - 15);
  text("70&#176;", Q_x - 25, Q_y - 15);
  text("?", R_x - 5, R_y + 25);
  
  // Draw angle arcs
  stroke(255, 0, 0);
  strokeWeight(2);
  noFill();
  
  // Angle P arc
  let angleP1 = atan2(Q_y - P_y, Q_x - P_x);
  let angleP2 = atan2(R_y - P_y, R_x - P_x);
  arc(P_x, P_y, 40, 40, angleP1, angleP2);
  
  // Angle Q arc
  let angleQ1 = atan2(P_y - Q_y, P_x - Q_x);
  let angleQ2 = atan2(R_y - Q_y, R_x - Q_x);
  arc(Q_x, Q_y, 40, 40, angleQ2, angleQ1);
  
  // Angle R arc
  let angleR1 = atan2(P_y - R_y, P_x - R_x);
  let angleR2 = atan2(Q_y - R_y, Q_x - R_x);
  arc(R_x, R_y, 40, 40, angleR1, angleR2);
  
  noLoop();
}
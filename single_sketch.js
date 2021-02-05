// Single-sketch example

function setup (){
  createCanvas (600, 400);
}

function draw(){
  background(0);
  fill(255);
  noStroke();
  rectMode(CENTER);
  rect(mouseX, mouseY, 50, 50);

  print('Hello!')
}

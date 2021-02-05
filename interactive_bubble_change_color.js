// Single-sketch example

let bubbles = [];

function setup (){
  createCanvas (600, 400);
  for (let i = 0; i < 30; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10 ,50);
    bubbles[i] = new Bubble(x, y, r);
  }
}

function draw(){
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].show();
    bubbles[i].move();
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].changeBrightnessOnClick(mouseX, mouseY);
  }
}

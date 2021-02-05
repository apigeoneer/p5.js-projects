class Bubble {
    constructor(x, y, r) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.brightness = 0;
    }

    show() {
      stroke(255);
      strokeWeight(4);
      //noFill();
      fill(this.brightness, 125)
      ellipse(this.x, this.y, this.r * 2);
    }

    move() {
      this.x = this.x + random(-4, 4);
      this.y = this.y + random(-4, 4);
    }

    // The global mousePressed func won't work in detecting a click on the bubble,
    // without the condition because it's a predefined global function
    // if you remove the if statement, it'll be called everytime the background is clicked
    clicked(mx, my) {
      // dist. b/w position of the mouse & of the bubble (it's center)
      let d = dist(mx, my, this.x, this.y);
      if (d < this.r) {
          this.brightness = 255;
        //console.log('CLICKED ON BUBBLE!');
      }
    }
}
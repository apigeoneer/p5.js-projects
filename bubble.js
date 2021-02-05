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
      fill(this.brightness, 125);
      ellipse(this.x, this.y, this.r * 2);
    }

    move() {
      this.x = this.x + random(-4, 4);
      this.y = this.y + random(-4, 4);
    }

    /**
     * @param {mouseX} mx 
     * @param {mouseY} my
     *   note: the predefined global mousePressed func alone won't work
     *   since it will be called even on clicks o/s the bubbles
     */
    changeBrightnessOnClick(mx, my) {
      // dist. b/w position of the mouse & of the bubble (it's center)
      let d = dist(mx, my, this.x, this.y);
      if (d < this.r) {
          this.brightness = 255;
        //console.log('CLICKED ON BUBBLE!');
      }
    }
}
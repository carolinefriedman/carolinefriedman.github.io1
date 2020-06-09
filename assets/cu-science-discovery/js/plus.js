function fallingPlus() {
  var sparkle = ["✧", "✚", "°"];
  this.x = random(windowWidth);
  this.y = 0;
  this.speed = random(2, 8);
  this.d = false;
  
  this.show = function() {
    noStroke();
    fill(random(175,200),0,random(225,255));
    textSize(15);
    text(sparkle[1],this.x, this.y);
  }
  
  this.move = function() {
    this.y += this.speed / 2;
        if (this.y > width) {
      this.d = true;
    }
  }
}
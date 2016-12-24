function Bubble() {
  this.pos = createVector(random(width), random(height));
  this.size = floor((random()* 35) + 5);

  this.render = function() {
    push();
    stroke('#7FFFD4');
    strokeWeight(3);
    noFill();
    translate(this.pos.x, this.pos.y);
    ellipse(0, 0, this.size, this.size);
    pop();
  }
}

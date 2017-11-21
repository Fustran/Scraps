var bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 40; i++) {
    bubbles.push(new Bubble());
  }
}

function draw() {
  background(10);
  for (var i in bubbles) {
    if (bubbles[i].size < 180) {
      bubbles[i].size += map(bubbles[i].size, 0, 180, 1, 10);
    } else {
      bubbles.splice(i, 1, new Bubble());
    }
    bubbles[i].render();
  }
}

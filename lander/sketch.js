var lander;
var terrain;
var hit;

function setup() {
    createCanvas(windowWidth, windowHeight);
    lander = new Lander();
    terrain = new Terrain();
}

function draw() {
    background(255)
    lander.update();
    lander.render();
    terrain.render()
    evalInput();
    //this.keyPrint()
    hit = collidePolyPoly(shipWorldShape,vertList, true);
    console.log(hit);
}

this.keyPrint = function() {
    this.offset = 20
    for (var i in keyMap) {
        text(keyMap[i], 20, this.offset)
        this.offset += 30
    }
}

//example adapted from Jeffrey Thompson

/**
var hit = false;
var poly = new Array(8);
var randomPoly = []
function setup() {
    createCanvas(windowWidth,windowHeight);
    collideDebug(true) //enable debug mode

    //generate a uniform sided polygon
  var angle = TWO_PI / poly.length;
  for (var i=0; i<poly.length; i++) {
    var a = angle * i;
    var x = 300 + cos(a) * 100;
    var y = 200 + sin(a) * 100;
    poly[i] = createVector(x,y);
  }

  // create a random polygon
  var a = 0;
  var i = 0;
  while (a < 360) {
    var x = cos(radians(a)) * random(30,50);
    var y = sin(radians(a)) * random(30,50);
    randomPoly[i] = createVector(x,y);
    a += random(15, 40);
    i += 1;
  }
}
function draw() {
    background(255);
     // update random polygon to mouse position
  var mouse = createVector(mouseX, mouseY);
  var diff = mouse.sub(randomPoly[0]);

  for (i=0; i < randomPoly.length; i++) {
    randomPoly[i].add(diff);
  }

    beginShape();
    //draw the polygon from the created Vectors above.
    for(i=0; i < poly.length; i++){
        vertex(poly[i].x,poly[i].y);
    }
    endShape(CLOSE);
    beginShape();
    for(i=0; i < randomPoly.length; i++){
        vertex(randomPoly[i].x,randomPoly[i].y);
    }
    endShape(CLOSE);

    hit = collidePolyPoly(poly,randomPoly,true);
    print("colliding? " + hit);

}
**/

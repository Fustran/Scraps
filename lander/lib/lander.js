var shipShape = [];
var shipWorldShape = [];

function Lander(shipShape) {
    var shipShape = [
        createVector(20, 10),
        createVector(-20, 10),
        createVector(0, -30)
    ];
    this.grav = createVector(0, -0.3);
    this.pos = createVector((width / 2), height * 0.2);
    this.vel = createVector(0, -3);
    this.angVel = 0;
    this.dir = 0;

    this.thrust = function() {
        this.force = p5.Vector.fromAngle(this.dir - PI / 2);
        this.force.mult(0.8);
        this.vel.add(this.force);
    }

    this.rotate = function(r) {
        this.angVel += r;
    }

    this.updatePhys = function() {
        this.vel.y -= this.grav.y;

        if (keyMap.length == 0) {
            this.angVel *= 0.75;
        } else {
            this.angVel *= 0.9;
        }

        //velocity max
        this.vel.x *= 0.98;
        this.vel.y *= 0.98;
        if (this.vel.x > 8) {
            this.vel.x = 8;
        } else if (this.vel.x < -8) {
            this.vel.x = -8;
        }
        if (this.vel.y > 8) {
            this.vel.y = 8;
        } else if (this.vel.y < -8) {
            this.vel.y = -8;
        }
        //add velocities
        this.dir += this.angVel;
        this.pos.add(this.vel);
    }

    this.updateEdge = function() {
        if (this.pos.x > width + 25) {
            this.pos.x = -25;
        } else if (this.pos.x < -25) {
            this.pos.x = width + 25;
        }
    }

    this.shipWorldPos = function() {
        shipWorldShape = []
        for (var i in shipShape) {
            this.vert = p5.Vector.add(createVector(-1 * shipShape[i].x, shipShape[i].y).rotate(this.dir), this.pos);
            shipWorldShape.push(this.vert);
        }
    }

    this.update = function() {
        this.updatePhys();
        this.updateEdge();
        this.shipWorldPos();
    }

    this.render = function() {
        push();
        fill(255);
        stroke(0);
        strokeWeight(5);
        translate(this.pos.x, this.pos.y);
        rotate(this.dir);
        beginShape();

        for (var i in shipShape) {
            vertex(shipShape[i].x, shipShape[i].y)
        }
        endShape(CLOSE);
        pop();
        beginShape();
        for (var i in shipWorldShape) {
            vertex(shipWorldShape[i].x, shipWorldShape[i].y)
        }
        endShape(CLOSE)
    }
}

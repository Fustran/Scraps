var vertList = [];

function Terrain() {
    this.vertDist = 12;

    this.vertCount = function() {
        this.verts = floor((width + this.vertDist * 2) / this.vertDist);
        return this.verts;
    }

    this.genY = function(oldY, change, lowLim, highLim) {
        do {
            this.newY = map(random(), 0, 1, oldY - change, oldY + change);
        } while (!((this.newY > this.highLim) && (this.newY < this.lowLim)));
        return this.newY;
    }

    this.genTerrain = function(change) {
        vertList = []
        this.highLim = height * 0.5;
        this.lowLim = height * 0.98;
        this.vertx = 0 - this.vertDist;
        this.oldY = map(random(), 0, 1, this.lowLim, this.highLim);
        this.verty;
        for (var i = 0; i < this.vertCount(); i++) {
            this.verty = this.genY(this.oldY, change, this.lowLim, this.highLim);
            this.vertLoc = createVector(this.vertx, this.verty);
            vertList.push(this.vertLoc);
            this.vertx += this.vertDist;
            this.oldY = this.verty;
        }

    }

    this.genTerrain(20);

    this.render = function() {
        push();
        stroke(5);
        strokeWeight(5);
        fill(255);
        beginShape();
        for (var i in vertList) {
            vertex(vertList[i].x, vertList[i].y);
        }
        vertex(width + 10, vertList[vertList.length - 1].y);
        vertex(width + 10, height + 10);
        vertex(-10, height + 10);
        endShape(CLOSE);
        pop();
    }

}

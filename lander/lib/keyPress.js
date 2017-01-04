var keyMap = []
this.rotRight = false;
this.rotLeft = false;

function keyReleased() {
  for (var i in keyMap) {
    if (keyMap[i] == keyCode) {
      keyMap.splice(i, 1);
      switch (keyCode) {
        case 65:
          this.rotLeft = false;
          break;
        case 68:
          this.rotRight = false;
          break;
      break;
      }
    }
  }
  return false;
}

function keyPressed() {
  keyMap.push(keyCode);
}

evalInput = function() {

  for (var i in keyMap) {
    switch (keyMap[i]) {
      case 87:
        lander.thrust()
        break;
      case 65:
        if (!this.rotRight) {
          lander.rotate(-0.01);
          this.rotLeft = true;
        }
        break;
      case 68:
        if (!this.rotLeft) {
          lander.rotate(0.01);
          this.rotRight = true;
        }

        break;
    }
  }
}

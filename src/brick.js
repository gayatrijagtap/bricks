class Brick {
  constructor(height, width, top, left, id) {
    this.height = height;
    this.width = width;
    this.top = top;
    this.left = left;
    this.id = id;
  }
}

class Bricks {
  constructor(brickInstances) {
    this.brickInstances = brickInstances;
  }
}

class IdGenerator {
  constructor(initialId) {
    this.id = initialId;
  }

  generateNewId() {
    this.id += 1;
  }
}

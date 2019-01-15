class Brick {
  constructor(height, width, top, left, id) {
    this.height = height;
    this.width = width;
    this.top = top;
    this.left = left;
    this.id = id;
    this.status = "untouched";
  }

  detectCollision(collider) {
    if (this.isColliderTouchesTop(collider)) {
      collider.velocity.makeAbsolute();
      this.status = "touched";
    }
  }

  isColliderTouchesTop(collider) {
    return collider.position.y <= this.top + this.height;
  }
}

class Bricks {
  constructor(brickInstances) {
    this.brickInstances = brickInstances;
  }

  detectCollision(collider) {
    this.brickInstances.forEach(brickInstance => {
      brickInstance.detectCollision(collider);
    });
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

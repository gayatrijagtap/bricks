class LeftWall {
  constructor(height, width, right, bottom) {
    this.height = height;
    this.width = width;
    this.right = right;
    this.bottom = bottom;
  }

  detectCollision(collider) {
    if (this.isColliderTouchesLeft(collider))
      collider.velocity.negateVelocityX();
  }

  isColliderTouchesLeft(collider) {
    return collider.position.x <= this.right;
  }
}

class RightWall {
  constructor(height, width, right, bottom) {
    this.height = height;
    this.width = width;
    this.right = right;
    this.bottom = bottom;
  }
  detectCollision(collider) {
    if (this.isColliderTouchesRight(collider))
      collider.velocity.negateVelocityX();
  }

  isColliderTouchesRight(collider) {
    return collider.position.x > this.width - collider.diameter;
  }
}

class TopWall {
  constructor(height, width, right, bottom) {
    this.height = height;
    this.width = width;
    this.right = right;
    this.bottom = bottom;
  }
  detectCollision(collider) {
    if (this.isColliderTouchesTop(collider))
      collider.velocity.negateVelocityY();
  }

  isColliderTouchesTop(collider) {
    return collider.position.y <= this.bottom;
  }
}

class BottomWall {
  constructor(height, width, right, bottom) {
    this.height = height;
    this.width = width;
    this.right = right;
    this.bottom = bottom;
  }
  detectCollision(collider) {
    if (this.isColliderTouchesBottom(collider))
      collider.velocity.negateVelocityY();
  }

  isColliderTouchesBottom(collider) {
    return collider.position.y > this.height - collider.diameter;
  }
}

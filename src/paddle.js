class Paddle {
  constructor(height, width, left, top, speed = 10) {
    this.height = height;
    this.width = width;
    this.left = left;
    this.top = top;
    this.speed = speed;
  }

  moveLeft() {
    this.left -= this.speed;
  }

  moveRight() {
    this.left += this.speed;
  }

  detectCollision(collider) {
    if (
      this.isColliderTouchesTop(collider) &&
      this.isColliderBetweenRange(collider)
    ) {
      collider.velocity.negateVelocityY();
    }
  }

  isColliderTouchesTop(collider) {
    return collider.position.y > this.top - collider.diameter;
  }

  isColliderBetweenRange(collider) {
    return (
      collider.position.x > this.left &&
      collider.position.x < this.left + this.width
    );
  }
}

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
      collider.velocity.y = -collider.velocity.y;
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

class Screen {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class BallPosition {
  constructor(xPos, yPos) {
    this.x = xPos;
    this.y = yPos;
  }
}

class Velocity {
  constructor(velocityX, velocityY) {
    this.x = velocityX;
    this.y = velocityY;
  }
}

class Ball {
  constructor(diameter, ballPosition, velocity) {
    this.diameter = diameter;
    this.position = ballPosition;
    this.velocity = velocity;
  }

  move() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}

class Game {
  constructor(screen, paddle, ball, wall) {
    this.screen = screen;
    this.paddle = paddle;
    this.ball = ball;
    this.wall = wall;
  }

  moveBall() {
    this.ball.move();
  }

  movePaddleLeft() {
    if (this.paddle.left > this.wall.right) {
      this.paddle.moveLeft();
    }
  }

  movePaddleRight() {
    if (this.paddle.left < this.wall.left - this.paddle.width) {
      this.paddle.moveRight();
    }
  }

  detectBallCollision() {
    this.paddle.detectCollision(this.ball);
    this.wall.detectCollision(this.ball);
  }
}

class Wall {
  constructor(top, bottom, left, right) {
    this.top = top;
    this.bottom = bottom;
    this.left = left;
    this.right = right;
  }

  detectCollision(collider) {
    if (this.isColliderTouchesBottom(collider))
      collider.velocity.y = -collider.velocity.y;
    if (this.isColliderTouchesRight(collider))
      collider.velocity.x = -collider.velocity.x;
    if (this.isColliderTouchesTop(collider))
      collider.velocity.y = -collider.velocity.y;
    if (this.isColliderTouchesLeft(collider))
      collider.velocity.x = -collider.velocity.x;
  }

  isColliderTouchesBottom(collider) {
    return collider.position.y > this.top - collider.diameter;
  }

  isColliderTouchesRight(collider) {
    return collider.position.x > this.left - collider.diameter;
  }

  isColliderTouchesTop(collider) {
    return collider.position.y <= this.bottom;
  }

  isColliderTouchesLeft(collider) {
    return collider.position.x <= this.right;
  }
}

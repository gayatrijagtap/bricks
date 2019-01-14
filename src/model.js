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
  constructor(screen, paddle, ball, topWall, bottomWall, leftWall, rightWall) {
    this.screen = screen;
    this.paddle = paddle;
    this.ball = ball;
    this.topWall = topWall;
    this.bottomWall = bottomWall;
    this.leftWall = leftWall;
    this.rightWall = rightWall;
  }

  moveBall() {
    this.ball.move();
  }

  movePaddleLeft() {
    if (this.paddle.left > this.bottomWall.right) {
      this.paddle.moveLeft();
    }
  }

  movePaddleRight() {
    if (this.paddle.left < this.bottomWall.width - this.paddle.width) {
      this.paddle.moveRight();
    }
  }

  detectBallCollision() {
    this.paddle.detectCollision(this.ball);
    this.topWall.detectCollision(this.ball);
    this.bottomWall.detectCollision(this.ball);
    this.leftWall.detectCollision(this.ball);
    this.rightWall.detectCollision(this.ball);
  }
}

class Brick {
  constructor(height, width, top, left) {
    this.height = height;
    this.width = width;
    this.top = top;
    this.left = left;
  }
}

class LeftWall {
  constructor(height, width, right, bottom) {
    this.height = height;
    this.width = width;
    this.right = right;
    this.bottom = bottom;
  }

  detectCollision(collider) {
    if (this.isColliderTouchesLeft(collider))
      collider.velocity.x = -collider.velocity.x;
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
      collider.velocity.x = -collider.velocity.x;
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
      collider.velocity.y = -collider.velocity.y;
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
      collider.velocity.y = -collider.velocity.y;
  }

  isColliderTouchesBottom(collider) {
    return collider.position.y > this.height - collider.diameter;
  }
}

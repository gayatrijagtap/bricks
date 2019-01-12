class Paddle {
  constructor(height, width, left, bottom, speed = 10) {
    this.height = height;
    this.width = width;
    this.left = left;
    this.bottom = bottom;
    this.speed = speed;
  }

  moveLeft() {
    this.left -= this.speed;
  }

  moveRight() {
    this.left += this.speed;
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
  constructor(screen, paddle, ball) {
    this.screen = screen;
    this.paddle = paddle;
    this.ball = ball;
  }

  moveBall() {
    this.ball.move();
  }

  movePaddleLeft() {
    this.paddle.moveLeft();
  }

  movePaddleRight() {
    this.paddle.moveRight();
  }
}

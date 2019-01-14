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

class Screen {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

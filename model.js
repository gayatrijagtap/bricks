class Paddle {
  constructor(height, width, left, bottom) {
    this.height = height;
    this.width = width;
    this.left = left;
    this.bottom = bottom;
  }

  moveLeft() {
    this.left -= 5;
  }

  moveRight() {
    this.left += 5;
  }
}

class Screen {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Ball {
  constructor(diameter, top, left) {
    this.height = diameter;
    this.width = diameter;
    this.top = top;
    this.left = left;
  }

  moveDown() {
    this.top += 5;
  }
  moveUp() {
    this.top -= 5;
  }
  moveLeft() {
    this.left -= 5;
  }
  moveRight() {
    this.right += 5;
  }
}

class Game {
  constructor(screen, paddle, ball) {
    this.screen = screen;
    this.paddle = paddle;
    this.ball = ball;
  }
}

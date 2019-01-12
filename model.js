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
  constructor(height, width, top, left) {
    this.height = height;
    this.width = width;
    this.top = top;
    this.left = left;
  }

  moveBall() {
    this.top += 5;
  }
}

const ARROW_LEFT = "ArrowLeft";
const ARROW_RIGHT = "ArrowRight";

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

const addPixelSufix = value => value + "px";

const drawPaddle = function(paddle) {
  let paddleDiv = document.getElementById("paddle_1");
  paddleDiv.style.height = addPixelSufix(paddle.height);
  paddleDiv.style.width = addPixelSufix(paddle.width);
  paddleDiv.style.left = addPixelSufix(paddle.left);
  paddleDiv.style.bottom = addPixelSufix(paddle.bottom);
};

const createPaddle = function() {
  let paddleDiv = document.createElement("div");
  paddleDiv.id = "paddle_1";
  paddleDiv.className = "paddle";
  document.getElementById("screen").appendChild(paddleDiv);
  let paddle = new Paddle(20, 200, 380, 5);
  drawPaddle(paddle);
  return paddle;
};

const movePaddle = function(paddle) {
  if (event.key == ARROW_LEFT) {
    paddle.moveLeft();
    drawPaddle(paddle);
  }
  if (event.key == ARROW_RIGHT) {
    paddle.moveRight();
    drawPaddle(paddle);
  }
};

const addKeyListener = function(paddle) {
  let screen = document.getElementById("screen");
  screen.focus();
  screen.onkeydown = movePaddle.bind(null, paddle);
};

const initialize = function() {
  let paddle = createPaddle();
  addKeyListener(paddle);
};

window.onload = initialize;

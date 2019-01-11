const ARROW_LEFT = "ArrowLeft";
const ARROW_RIGHT = "ArrowRight";

const movePaddle = function(paddle) {
  if (event.key == ARROW_LEFT) {
    paddle.moveLeft();
  }
  if (event.key == ARROW_RIGHT) {
    paddle.moveRight();
  }
  drawPaddle(paddle);
};

const addKeyListener = function(paddle) {
  let screen = document.getElementById("screen");
  screen.focus();
  screen.onkeydown = movePaddle.bind(null, paddle);
};

const initialize = function() {
  createScreen();
  let paddle = createPaddle();
  addKeyListener(paddle);
};

window.onload = initialize;

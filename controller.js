const ARROW_LEFT = "ArrowLeft";
const ARROW_RIGHT = "ArrowRight";
const SPACE = " ";

const moveScreenElements = function(paddle, ball) {
  if (event.key == SPACE) {
    setInterval(() => {
      ball.moveBall();
      drawBall(ball);
    }, 10);
  }
  if (event.key == ARROW_LEFT) paddle.moveLeft();
  if (event.key == ARROW_RIGHT) paddle.moveRight();
  drawPaddle(paddle);
};

const addKeyListener = function(paddle, ball) {
  let screen = document.getElementById("screen");
  screen.focus();
  screen.onkeydown = moveScreenElements.bind(null, paddle, ball);
};

const initialize = function() {
  createScreen();
  let paddle = createPaddle();
  let ball = createBall();
  addKeyListener(paddle, ball);
};

window.onload = initialize;

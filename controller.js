const ARROW_LEFT = "ArrowLeft";
const ARROW_RIGHT = "ArrowRight";
const SPACE = " ";

const moveBall = function(ball) {
  setInterval(() => {
    ball.move();
    drawBall(ball);
  }, 10);
};

const moveScreenElements = function(paddle, ball) {
  if (event.key == SPACE) moveBall(ball);
  if (event.key == ARROW_LEFT) paddle.moveLeft();
  if (event.key == ARROW_RIGHT) paddle.moveRight();
  drawPaddle(paddle);
};

const addKeyListener = function(paddle, ball) {
  let screen = document.getElementById("screen");
  screen.focus();
  screen.onkeydown = moveScreenElements.bind(null, paddle, ball);
};

const createGameElements = function(game) {
  createScreen(game.screen);
  createPaddle(game.paddle);
  createBall(game.ball);
};

const createGame = function() {
  let screen = new Screen(600, 960);
  let paddle = new Paddle(20, 200, 380, 5);
  let ballPosition = new BallPosition(0, 0);
  let velocity = new Velocity(5, 5);
  let ball = new Ball(50, ballPosition, velocity);
  let game = new Game(screen, paddle, ball);
  createGameElements(game);
  return game;
};

const initialize = function() {
  let game = createGame();
  addKeyListener(game.paddle, game.ball);
};

window.onload = initialize;

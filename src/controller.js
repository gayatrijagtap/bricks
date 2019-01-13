const ARROW_LEFT = "ArrowLeft";
const ARROW_RIGHT = "ArrowRight";
const SPACE = " ";

const animateBall = function(game) {
  setInterval(() => {
    game.moveBall();
    game.detectBallCollision();
    drawBall(game.ball);
  }, 1);
};

const moveScreenElements = function(game) {
  if (event.key == SPACE) animateBall(game);
  if (event.key == ARROW_LEFT) game.movePaddleLeft();
  if (event.key == ARROW_RIGHT) game.movePaddleRight();
  drawPaddle(game.paddle);
};

const addKeyListener = function(game) {
  let screen = document.getElementById("screen");
  screen.focus();
  screen.onkeydown = moveScreenElements.bind(null, game);
};

const createGameElements = function(game) {
  createScreen(game.screen);
  createPaddle(game.paddle);
  createBall(game.ball);
  createBrick(game.brick);
};

const createGame = function() {
  let screen = new Screen(600, 960);
  let wall = new Wall(600, 0, 960, 0);
  let paddle = new Paddle(20, 200, 380, 575);
  let ballPosition = new BallPosition(0, 0);
  let velocity = new Velocity(1, 1);
  let ball = new Ball(50, ballPosition, velocity);
  let brick = new Brick(30, 70, 0, 0);
  let game = new Game(screen, paddle, ball, wall, brick);
  createGameElements(game);
  return game;
};

const initialize = function() {
  let game = createGame();
  addKeyListener(game);
};

window.onload = initialize;

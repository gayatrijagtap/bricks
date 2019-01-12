const ARROW_LEFT = "ArrowLeft";
const ARROW_RIGHT = "ArrowRight";
const SPACE = " ";

const moveBall = function(game) {
  setInterval(() => {
    game.ball.move();
    if (game.ball.position.y > game.screen.height - game.ball.diameter) {
      game.ball.velocity.y = -game.ball.velocity.y;
    }
    if (game.ball.position.x > game.screen.width - game.ball.diameter) {
      game.ball.velocity.x = -game.ball.velocity.x;
    }
    if (game.ball.position.y <= 0) {
      game.ball.velocity.y = -game.ball.velocity.y;
    }
    if (game.ball.position.x <= 0) {
      game.ball.velocity.x = -game.ball.velocity.x;
    }
    drawBall(game.ball);
  }, 10);
};

const moveScreenElements = function(game) {
  if (event.key == SPACE) moveBall(game);
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
  addKeyListener(game);
};

window.onload = initialize;

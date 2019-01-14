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
  game.bricks.brickInstances.map(createBrick);
};

const createBrickInstances = function() {
  let brickInstances = new Array();
  let brickId = new IdGenerator(1);
  let top = 2;
  let height = 40;
  let width = 118;
  for (let row = 1; row <= 3; row++) {
    let left = 1;
    for (let column = 1; column <= 8; column++) {
      let brick = new Brick(height, width, top, left, brickId.id);
      brickInstances.push(brick);
      left += 120;
      brickId.generateNewId();
    }
    top += 42;
  }
  return brickInstances;
};

const createGame = function() {
  let screen = new Screen(600, 960);
  let topWall = new TopWall(600, 960, 0, 0);
  let bottomWall = new BottomWall(600, 960, 0, 0);
  let leftWall = new LeftWall(600, 960, 0, 0);
  let rightWall = new RightWall(600, 960, 0, 0);
  let paddle = new Paddle(20, 200, 380, 575);
  let position = new Position(0, 0);
  let velocity = new Velocity(1, 1);
  let ball = new Ball(50, position, velocity);
  let brickInstances = createBrickInstances();
  let bricks = new Bricks(brickInstances);
  let game = new Game(
    screen,
    paddle,
    ball,
    topWall,
    bottomWall,
    leftWall,
    rightWall,
    bricks
  );
  createGameElements(game);
  return game;
};

const initialize = function() {
  let game = createGame();
  addKeyListener(game);
};

window.onload = initialize;

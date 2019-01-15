const getPaddleDiv = document => document.getElementById("paddle_1");

const drawPaddle = function(paddle) {
  let paddleDiv = getPaddleDiv(document);
  paddleDiv.style.height = addPixelSufix(paddle.height);
  paddleDiv.style.width = addPixelSufix(paddle.width);
  paddleDiv.style.left = addPixelSufix(paddle.left);
  paddleDiv.style.top = addPixelSufix(paddle.top);
};

const addPixelSufix = value => value + "px";

const getScreen = document => document.getElementById("screen");

const appendTo = (parent, child) => parent.appendChild(child);

const createPaddle = function(paddle) {
  let paddleDiv = document.createElement("div");
  paddleDiv.id = "paddle_1";
  paddleDiv.className = "paddle";
  let screen = getScreen(document);
  appendTo(screen, paddleDiv);
  drawPaddle(paddle);
};

const getBody = document => document.getElementById("body");

const drawScreen = function(screen) {
  let screenDiv = getScreen(document);
  screenDiv.style.height = addPixelSufix(screen.height);
  screenDiv.style.width = addPixelSufix(screen.width);
};

const createScreen = function(screen) {
  let mainScreen = document.createElement("main");
  mainScreen.id = "screen";
  mainScreen.tabIndex = "0";
  let body = getBody(document);
  appendTo(body, mainScreen);
  drawScreen(screen);
};

const getBall = document => document.getElementById("ball_1");

const drawBall = function(ball) {
  let ballDiv = getBall(document);
  ballDiv.style.height = addPixelSufix(ball.diameter);
  ballDiv.style.width = addPixelSufix(ball.diameter);
  ballDiv.style.top = addPixelSufix(ball.position.y);
  ballDiv.style.left = addPixelSufix(ball.position.x);
};

const createBall = function(ball) {
  let ballDiv = document.createElement("div");
  ballDiv.id = "ball_1";
  ballDiv.className = "ball";
  let screen = getScreen(document);
  appendTo(screen, ballDiv);
  drawBall(ball);
};

const getBrick = (document, brickId) => document.getElementById(brickId);

const drawBrick = function(brick) {
  let brickDiv = getBrick(document, "brick_" + brick.id);
  brickDiv.style.height = addPixelSufix(brick.height);
  brickDiv.style.width = addPixelSufix(brick.width);
  brickDiv.style.top = addPixelSufix(brick.top);
  brickDiv.style.left = addPixelSufix(brick.left);
};

const createBrick = function(brick) {
  let brickDiv = document.createElement("div");
  brickDiv.id = "brick_" + brick.id;
  brickDiv.className = "brick";
  let screen = getScreen(document);
  appendTo(screen, brickDiv);
  drawBrick(brick);
};

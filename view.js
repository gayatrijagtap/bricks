const getPaddleDiv = document => document.getElementById("paddle_1");

const drawPaddle = function(paddle) {
  let paddleDiv = getPaddleDiv(document); //extract in one liner
  paddleDiv.style.height = addPixelSufix(paddle.height);
  paddleDiv.style.width = addPixelSufix(paddle.width);
  paddleDiv.style.left = addPixelSufix(paddle.left);
  paddleDiv.style.bottom = addPixelSufix(paddle.bottom);
};

const addPixelSufix = value => value + "px";

const getScreen = document => document.getElementById("screen");

const appendChildTo = (parent, child) => parent.appendChild(child);

const createPaddle = function() {
  let paddleDiv = document.createElement("div");
  paddleDiv.id = "paddle_1";
  paddleDiv.className = "paddle";
  let screen = getScreen(document);
  appendChildTo(screen, paddleDiv);
  let paddle = new Paddle(20, 200, 380, 5);
  drawPaddle(paddle);
  return paddle;
};

const getBody = document => document.getElementById("body");

const drawScreen = function(screen) {
  let screenDiv = getScreen(document);
  screenDiv.style.height = addPixelSufix(screen.height);
  screenDiv.style.width = addPixelSufix(screen.width);
};

const createScreen = function() {
  let mainScreen = document.createElement("main");
  mainScreen.id = "screen";
  mainScreen.tabIndex = "0";
  let body = getBody(document);
  appendChildTo(body, mainScreen);
  let screen = new Screen(600, 960);
  drawScreen(screen);
};

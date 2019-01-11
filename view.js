const drawPaddle = function(paddle) {
  let paddleDiv = document.getElementById("paddle_1"); //extract in one liner
  paddleDiv.style.height = addPixelSufix(paddle.height);
  paddleDiv.style.width = addPixelSufix(paddle.width);
  paddleDiv.style.left = addPixelSufix(paddle.left);
  paddleDiv.style.bottom = addPixelSufix(paddle.bottom);
};

const addPixelSufix = value => value + "px";

const createPaddle = function() {
  let paddleDiv = document.createElement("div");
  paddleDiv.id = "paddle_1";
  paddleDiv.className = "paddle";
  document.getElementById("screen").appendChild(paddleDiv); //getScreen in one liner
  let paddle = new Paddle(20, 200, 380, 5);
  drawPaddle(paddle);
  return paddle;
};

const createScreen = function() {
  let mainScreen = document.createElement("main");
  mainScreen.id = "screen";
  mainScreen.tabIndex = "0";
  let body = document.getElementById("body");
  body.appendChild(mainScreen);
};

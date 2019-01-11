class Paddle {
  constructor(height, width, left, bottom) {
    this.height = height;
    this.width = width;
    this.left = left;
    this.bottom = bottom;
  }
}

const addPixelSufix = value => value + "px";

const drawPaddle = function(paddle) {
  let paddleDiv = document.getElementById("paddle");
  paddleDiv.style.height = addPixelSufix(paddle.height);
  paddleDiv.style.width = addPixelSufix(paddle.width);
  paddleDiv.style.left = addPixelSufix(paddle.left);
  paddleDiv.style.bottom = addPixelSufix(paddle.bottom);
};

const createPaddle = function() {
  let paddleDiv = document.createElement("div");
  paddleDiv.id = "paddle";
  paddleDiv.className = "paddle";
  document.getElementById("screen").appendChild(paddleDiv);
  let paddle = new Paddle(20, 200, 380, 5);
  drawPaddle(paddle);
};

const initialize = function() {
  createPaddle();
};

window.onload = initialize;

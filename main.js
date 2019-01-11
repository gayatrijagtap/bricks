const addPixelSufix = value => value + "px";

const drawPaddle = function() {
  let paddle = document.getElementById("paddle");
  paddle.style.height = addPixelSufix(20);
  paddle.style.width = addPixelSufix(200);
  paddle.style.bottom = addPixelSufix(0);
  paddle.style.left = addPixelSufix(380);
};

const createPaddle = function() {
  let paddle = document.createElement("div");
  paddle.id = "paddle";
  paddle.className = "paddle";
  document.getElementById("screen").appendChild(paddle);
  drawPaddle();
};

const initialize = function() {
  createPaddle();
};

window.onload = initialize;

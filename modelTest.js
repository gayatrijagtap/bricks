describe("Paddle", function() {
  let paddle;
  beforeEach(function() {
    paddle = new Paddle(10, 10, 10, 10);
  });
  describe("moveLeft", function() {
    it("should reduce paddle left by 5 units", function() {
      paddle.moveLeft();
      chai.assert.equal(5, paddle.left);
    });
  });

  describe("moveRight", function() {
    it("should increase paddle left by 5 units", function() {
      paddle.moveRight();
      chai.assert.equal(15, paddle.left);
    });
  });
});

describe("Ball", function() {
  let ballPosition = new BallPosition(0, 0);
  let ballVelocity = new Velocity(5, 5);
  let ball = new Ball(50, ballPosition, ballVelocity);
  describe("move", function() {
    ball.move();
    it("should increase ball x by 5 units", function() {
      chai.assert.equal(5, ball.position.x);
    });
    it("should increase ball y by 5 units", function() {
      chai.assert.equal(5, ball.position.y);
    });
  });
});

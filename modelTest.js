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

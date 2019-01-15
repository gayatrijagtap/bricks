class Position {
  constructor(xPos, yPos) {
    this.x = xPos;
    this.y = yPos;
  }
}

class Velocity {
  constructor(velocityX, velocityY) {
    this.x = velocityX;
    this.y = velocityY;
  }

  negateVelocityX() {
    this.x = -this.x;
  }

  negateVelocityY() {
    this.y = -this.y;
  }

  makeAbsolute() {
    this.x = Math.abs(this.x);
    this.y = Math.abs(this.y);
  }
}

class Ball {
  constructor(diameter, position, velocity) {
    this.diameter = diameter;
    this.position = position;
    this.velocity = velocity;
  }

  move() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}

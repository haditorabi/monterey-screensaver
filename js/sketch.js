let tr;
let mountainsCount = 1;
let mountains = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  tr = new mountain("#ffff00", 100, 100);
}

function draw() {
  background(90);
  tr.setX(780);
  tr.setY(600);
  tr.display();
}
class mountain {
  constructor(color, x, y) {
    this.tlx = 0;
    this.tly = 0;
    this.trxX = width - x;
    this.tryX = 0;
    this.trxY = width;
    this.tryY = 0 + y;
    this.blx = 0;
    this.bly = height;
    this.brx = width;
    this.bry = height;
    this.color = color;
  }
  setX(x) {
    if (x < width) {
      this.trxX = width - x;
    } else if (x < width + height) {
      this.trxX = 0;
      this.tryX = x - width;
      this.tly = height;
    } else {
      this.trxX = 0;
      this.tryX = 0;
      this.tly = 0;
    }
  }
  setY(y) {
    if (y < height) {
      this.tryY = y;
    } else if (y < width + height) {
      this.tryY = height;
      this.trxY = width + height - y;
      this.brx = 0;
    } else {
      this.tryY = height;
      this.trxY = 0;
      this.brx = 0;
    }
  }
  move() {}

  display() {
    noStroke();
    fill(this.color);
    beginShape();
    vertex(this.blx, this.bly);
    vertex(this.brx, this.bry);
    vertex(this.trxY, this.tryY);
    vertex(this.trxX, this.tryX);
    vertex(this.tlx, this.tly);
    endShape(CLOSE);
  }
}

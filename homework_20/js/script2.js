


class Cuboid {
  constructor(length, width, height) {
    Object.assign(this, { length, width, height })
  }
  get surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
  }
  get volume() {
    return this.length * this.width * this.height
  }
}
class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length)
  }
}

let cuboid1 = new Cuboid(10, 12, 5);
console.log(cuboid1.volume);
let cube1 = new Cube(2);
console.log(cube1.volume);
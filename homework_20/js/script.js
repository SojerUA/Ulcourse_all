class God{
  create() {
    return [ new Man('Adam'), new Woman('Eve') ]
  }
}

class Human {
  constructor(name) {
    this.name = name;
  }
}

class Man extends Human {
  constructor(name) {
    super(name);
  }
}

class Woman extends Human {
  constructor(name) {
    super(name);
  }
}

const god = new God();
const firstPeople = god.create();

console.log(firstPeople);



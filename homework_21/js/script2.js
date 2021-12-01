

class Singleton {
  constructor() {
    if(!Singleton.instance) { Singleton.instance = this; }
    return Singleton.instance;
  }
}

let obj1 = new Singleton();
let obj2 = new Singleton();
obj1 === obj2;
obj1.test =1;
console.log(obj2.test);



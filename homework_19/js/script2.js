

function makeClass(...properties) { 
  return function (...args) { 
  properties.forEach((prop, i) => this[prop] = args[i]);
  }; 
}

const Animal = makeClass("name","species","age","health","weight","color");
const Panda = new Animal("Po", "Bear", "10", "great", "150", "wight-black");

console.log(Panda);


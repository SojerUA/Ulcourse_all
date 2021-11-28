
const number = function(array) {
  return array.map((line, index) => `${index + 1}: ${line}`);
}

const numbersArray = ["a", "b", "c", "d"];
console.log(number(numbersArray));
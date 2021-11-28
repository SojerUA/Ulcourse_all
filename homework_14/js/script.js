//Task #1
//You have 2 arrays of integers. Return the total sum of all those integers.



function totalArr(a, b) {
  let result = a.reduce((sum, current) => sum + current, 0) + b.reduce((sum, current) => sum + current, 0);
  return result;
}


let arr1 = [1, 5, 6, 5];
let arr2 = [10, 3, 24, 6];

console.log(arr1);
console.log(arr2);

alert( totalArr(arr1,arr2) );




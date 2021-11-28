
Array.prototype.sortReloaded = function(dir = 'asc') {
  const result = [...this];
  if (dir === 'desc') {
    return result.sort((a, b) => b - a);
  }
  else if (dir === 'asc') {
    return result.sort((a, b) => a - b);
  }
	else {
  return false;
	}
}

let numbers = [1,5,11,34,9,7];
let sort = numbers.sortReloaded('asc');
console.log(sort);

let sort2 = numbers.sortReloaded('desc');
console.log(sort2);




//Task #2
//Write a function that accepts an array of ages and returns an array of ages greater than 18.


const arr = [3,15,18,22,35,9,54];

function getAdultAge(age) {
	const adult = age.filter(item => item >= 18);
	return adult;
}

console.log( getAdultAge(arr) );


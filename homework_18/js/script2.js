


class Person {
	constructor(name) {
		this.name = name;
	}
	greet(secondName) {
		return `Hello ${secondName}, my name is ${this.name}`;
	}
}

const joe = new Person('Joe');

console.log(joe.greet('Kate'));
console.log(joe.name);





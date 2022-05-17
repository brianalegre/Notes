// forEach is a method used  "FOR LOOP"ing

// Array Object
const myObject = [
	{ name: 'Brian', age: 34 },
	{ name: 'Allec', age: 29 },
	{ name: 'Kevin', age: 28 },
];

// Typical For Loop
for (let index = 0; index < myObject.length; index++) {
	console.log(myObject[index]);
}

// Displays:
// 	{ name: 'Brian', age: 34 }
// 	{ name: 'Allec', age: 29 }
// 	{ name: 'Kevin', age: 28 }

// forEach
myObject.forEach((parameterName) => console.log(parameterName));

// Displays:
// 	{ name: 'Brian', age: 34 }
// 	{ name: 'Allec', age: 29 }
// 	{ name: 'Kevin', age: 28 }

// Typical For Loop
for (let i = 0; i < myObject.length; i++) {
	console.log(myObject[i].name, i);
}

// Displays:
// 	Brian 0
// 	Allec 1
// 	Kevin 2

// forEach
myObject.forEach((whateverNameIChoose, index) => {
	console.log(whateverNameIChoose.name, index);
});

// Displays:
// Brian 0
// Allec 1
// Kevin 2

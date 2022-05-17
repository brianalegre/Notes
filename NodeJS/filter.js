// filter is a method used for checking if a condition is TRUE or FALSE

// Array Object
const myObject = [
	{ name: 'Brian', age: 34 },
	{ name: 'Allec', age: 29 },
	{ name: 'Kevin', age: 28 },
];

// Typical Filter
for (i = 0; i < myObject.length; i++) {
	if (myObject[i].age > 30) {
		console.log(myObject[i]);
	}
}

// Displays:
// 	{ name: 'Brian', age: 34 }

// Filter Method
const myObject2 = myObject.filter(function (whateverParam) {
	return whateverParam > 30;
});

// Displays:
// 	{ name: 'Brian', age: 34 }

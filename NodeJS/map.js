// map is method used for creating a shadow copy
// with the shadow copy, you take the value of the original array,
// and mutate it to the new variable name

// Array Object
const myObject = [
	{ name: 'Brian', age: 34 },
	{ name: 'Allec', age: 29 },
	{ name: 'Kevin', age: 28 },
];

// Typical Copying
const newObject = myObject;
console.log(newObject);

// Displays
// [
//     { name: 'Brian', age: 34 },
//     { name: 'Allec', age: 29 },
//     { name: 'Kevin', age: 28 }
//   ]

// Map Shadow Copy
const newObject2 = myObject.map((whateverParam) => {
	console.log(whateverParam);
});

// Displays
// { name: 'Brian', age: 34 }
// { name: 'Allec', age: 29 }
// { name: 'Kevin', age: 28 }

// Apply some condition during the Shadow Copy
const newObject3 = myObject.map((whateverParam) => {
	// This will combine all the objects in the array, into one single array
	const newObject4 = { ...whateverParam };
	// IF TRUE - Add a new Key to the Object
	// isTwentyOne True
	if (whateverParam.age > 21) {
		newObject4.isTwentyOne = true;
		// IF FALSE - Add a new Key to the Object
		// isTwentyOne False
	} else {
		newObject4.isTwentyOne = false;
	}

	return newObject4;
});
console.log('This is newObject3', newObject3);

// Displays
// This is newObject3 [
//     { name: 'Brian', age: 34, isTwentyOne: true },
//     { name: 'Allec', age: 29, isTwentyOne: true },
//     { name: 'Kevin', age: 28, isTwentyOne: true }
//   ]

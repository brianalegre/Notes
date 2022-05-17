// Prototypes when you're adding a new function/property to the object

// Function Object
function myFunction(name, age, strength, hp) {
	this.name = name;
	this.age = age;
	this.strength = strength;
	this.hp = hp;
}

// Add printStats function to myFunction
myFunction.prototype.printStats = function () {
	console.log(`Name: ${this.name}\n
    Age: ${this.age}\n
    Strength: ${this.strength}\n
    HP: ${this.hp}\n`);
	console.log(`\n----------------------\n`);
};

// Assign a variable to Function Object
const brian = new myFunction('brian', 34, 100, 100);

// Call the newly added method/property
brian.printStats();

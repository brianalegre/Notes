// Constructor is a function that give variable properties

// Function that will give a variable properies

function myFunction(name, age) {
	this.name = name;
	this.age = age;
	this.introduction = () => {
		console.log(
			`Hello, my name is ${this.name}.  I am ${this.age} years old`
		);
	};
}

// Assign a variable to the function
// Pass values for the parameters
const brian = new myFunction('brian', '34'); //Instashiation - can't spell

// Invoke Function introduction with the variable brian
brian.introduction();

// What is "new myFunction" ?

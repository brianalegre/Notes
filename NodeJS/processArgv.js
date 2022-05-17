// process.argv
// Gives node the ability to access arguements in the CLI

console.log(process.argv);

// Displays:
// [
//      This is where Node is located, also called process.argv[0]
//     'C:\\Program Files\\nodejs\\node.exe',
//      This is where the script is ran, also called process.argv[1]
//     'C:\\Users\\FRANTIK-PC\\Desktop\\github\\Notes\\NodeJS\\processArgv.js'
//   ]

// We can do a simple comparison of argument values

// Variables
// First Arguement passed
const arg1 = process.argv[2];
// Second Arguement passed
const arg2 = process.argv[3];

if (arg1 === arg2) {
	console.log('Vales are the same');
} else {
	console.log('Vales are different');
}

// In the Terminal Run:
// node processArgv.js brian alegre

// Displays:
// Values are different

// In the Terminal Run:
// node processArgv.js brian brian

// Displays:
// Values are the same

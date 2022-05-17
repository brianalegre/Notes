// Reading and Writing a file using FS

// FS is a built in library to node
// You just need to set it to use it
const fs = require('fs');

// fs.readFile('FILENAME', 'ENCODE TYPE', CALLBACK FUNCTION)
// 	FS is called to read a File
// 	FILENAME - The name of the file you want to create
// 	ENCODE TYPE - Usually set to utf8, for human readable format
// 	CALLBACK FUNCTION - What to do after reading the file

fs.readFile('./fsReadFile.txt', 'utf8', (error, data) =>
	error ? console.log(error) : console.log(data)
);

// Run the script
// Displays:
// 	Text from fsReadWrite.tx
// 	"I was read using fs.readFile"

// fs.writeFile('FILENAME', process.argv[2], CALLBACK FUNCTION)
// 	FS is called to write/create a file
// 	process.argv[2] - What to write in the file
//	CALLBACK FUNCTION - What to do after writing/creating the file

fs.writeFile('./fsWriteFile.txt', process.argv[2], (error) =>
	error ? console.log(error) : console.log('Success! File Written')
);

// Run the command below, in the Terminal:
// 	node fs.js "I wrote to the file"
// 	Creates the file fsWriteFile.txt
//  File has the text: "I wrote to the file"

// fs.appendFile('FILENAME', process.arg[2], CALLBACK FUNCTION)
// 	FS is called to append to an existing file
// 	process.argv[2] - What to append to the file
// 	CALLBACK FUNCTION - What to do after the appending

fs.appendFile('./fsAppendFile.txt', process.argv[2], (error) =>
	error ? console.log(error) : console.log('Successfuly appended file')
);

// Run the command below, in the Terminal:
// 	node fs.js "I am appending"
// 	If the file doesn't exist, the file will be created
// 	File has the text "I am appending"



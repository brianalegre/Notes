// Promises
// const myProm = new Promise((resolve, reject) => {
//   //some promise logic to determine whether the promise will resolve
//   resolve("hhaha promise resolved");
// });

// const anotherAsyncFun = (callback) => {
//   setTimeout(callback, 3000);
// };

// const functionThatTakesSomeTime = (input, callback) => {
//   //some async process, only call callback when done

//   //needs to call another aysnc function first before done
//   anotherAsyncFun(() => {
//     setTimeout(callback, 3000);
//   });
// };

// functionThatTakesSomeTime("", function () {
//   console.log("OMG FINALLY!");
//   //additional processes here ---
// });

// myProm.then((data) => {
//   console.log("PROMISE RESOLVED WIOTH THIS DATA --- ", data);
// });

const myFirstProm = (text = 'OK!') =>
	new Promise((res, rej) => {
		setTimeout(() => res(text.repeat(2)), 500);
	});

myFirstProm()
	.then(myFirstProm)
	.then(myFirstProm)
	.then(myFirstProm)
	.then((data) => console.log(data));

async function myfun() {
	const first = await myFirstProm();
	const second = await myFirstProm(first);
	const third = await myFirstProm(second);
	const last = await myFirstProm(third);
	console.log(last);
}

myfun();

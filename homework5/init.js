let arrayLength;
while(isNaN(arrayLength) || (arrayLength < 5 || arrayLength > 20) ) {
	arrayLength = +prompt('Pls, fill here array length');
}
function fillArray(arrayLength) {
	let newArray = [];
	for(let i = 0; i < arrayLength; i++) {
		while(isNaN(newArray[i])) {
			newArray[i] = +prompt('What number?');
		}
	}
	return newArray;
}

function sortArray(array) {
	array.sort(function(a, b) { 

		return a - b; });

	return array;
}

function showArray(array) {
	console.log(array);
}

let result = fillArray(arrayLength);
let sorted = sortArray(result);


showArray(sorted);
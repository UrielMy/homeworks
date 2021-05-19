function factorial(x) {
	if(x <= 1) {
		return 1
	}
	else {
		return x * Factorial(x - 1);
	}
}

function forFactorial(number) {
	let result = number;
	for(let i = 1; i < number; i++) {
		result = result * i;
	}
	return result;
}

function arraySort(array, number) {
	let elementsBiggerThanNumberOrNot = false;
	for(let i = 0; i < array.length; i++) {
		if(number < array[i]) {
		   elementsBiggerThanNumberOrNot = true;
		   break;
		}
	}	
	if (elementsBiggerThanNumberOrNot) {
		array.unshift(number);
		array.pop();
	}
	else {
		array.shift();
		array.push(number);
	}
	return array;
}



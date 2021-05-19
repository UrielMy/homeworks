let repeat;
let result = [];
do {	
let nameOfOperation = prompt('Введите желаемое вычисление, доступные: "+", "-", "*", "/", "cos", "sin", "pow"');

if(nameOfOperation == 'cos' || nameOfOperation == 'sin') {
	let operandA = prompt('Введите желаемое значение');
	while(isNaN(operandA)) {
		operandA = Number(prompt('Недопустимая единица измерения, повторите ввод'));
	}
	if(nameOfOperation == 'cos') {
		alert(`Косинус числа ${operandA} = ${Math.cos(operandA)}`);
		result.push(`Косинус числа ${operandA} = ${Math.cos(operandA)}`);
	}
	else {
		alert(`Синус числа ${operandA} = ${Math.sin(operandA)}`);
		result.push(`Синус числа ${operandA} = ${Math.sin(operandA)}`);
	}
}
else if(nameOfOperation == '+' || nameOfOperation == '-' || nameOfOperation == '*' || nameOfOperation == '/' ) {
	let firstNumber = Number(prompt('Введите первое число'));
	while(isNaN(firstNumber)) {
		firstNumber = Number(prompt('Недопустимая единица измерения, повторите ввод'));
	}
	let secondNumber = Number(prompt('Введите второе число'));
	while(isNaN(secondNumber)) {
		secondNumber = Number(prompt('Недопустимая единица измерения, повторите ввод'));
	}
	if(nameOfOperation == '+') {
		alert(`Sum: ${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
		result.push(`Sum: ${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
	}
	else if(nameOfOperation == '-') {
		alert(`Diff: ${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
		result.push(`Diff: ${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
	}
	else if(nameOfOperation == '*') {
		alert(`Mult: ${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
		result.push(`Mult: ${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
	}
	else if(nameOfOperation == '/') {
		alert(`Div: ${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
		result.push(`Div: ${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
	}
}
else if(nameOfOperation == 'pow') {
	let firstNumber = prompt('Введите число которое будем возводить в степень');
	while(isNaN(firstNumber)) {
		firstNumber = Number(prompt('Недопустимая единица измерения, повторите ввод'));
	}
	let secondNumber = prompt('Введите степень в которую будем возводить число');
	while(isNaN(secondNumber)) {
		secondNumber = Number(prompt('Недопустимая единица измерения, повторите ввод'));
	}
	alert(`Pow: ${firstNumber} в ${secondNumber} степени = ${Math.pow(firstNumber, secondNumber)}`);
	result.push(`Pow: ${firstNumber} в ${secondNumber} степени = ${Math.pow(firstNumber, secondNumber)}`);
}
repeat = confirm('Желаете повторить расчет?');
}
while(repeat);
console.log(result);
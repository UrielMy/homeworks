

let nameOfOperation = prompt('Введите желаемое вычисление, доступные: "+", "-", "*", "/", "cos", "sin", "pow"');

if(nameOfOperation == 'cos' || nameOfOperation == 'sin') {
	let operandA = prompt('Введите желаемое значение');
	if(nameOfOperation == 'cos') {
		alert(`Косинус числа ${operandA} = ${Math.cos(operandA)}`);
	}
	else {
		alert(`Синус числа ${operandA} = ${Math.sin(operandA)}`);
	}
}
else if(nameOfOperation == '+' || nameOfOperation == '-' || nameOfOperation == '*' || nameOfOperation == '/' ) {
	let firstNumber = Number(prompt('Введите первое число'));
	let secondNumber = Number(prompt('Введите второе число'));
	if(nameOfOperation == '+') {
		alert(`Sum: ${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
	}
	else if(nameOfOperation == '-') {
		alert(`Diff: ${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
	}
	else if(nameOfOperation == '*') {
		alert(`Mult: ${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
	}
	else if(nameOfOperation == '/') {
		alert(`Div: ${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
	}
}
else if(nameOfOperation == 'pow') {
	let firstNumber = prompt('Введите число которое будем возводить в степень');
	let secondNumber = prompt('Введите степень в которую будем возводить число');
	alert(`Pow: ${firstNumber} в ${secondNumber} степени = ${Math.pow(firstNumber, secondNumber)}`);
}

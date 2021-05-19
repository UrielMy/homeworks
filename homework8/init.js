function calc(a) {
	return {
		add: (b) => a = a + b,
		sub: (b) => a = a - b,
		mult: (b) => a = a * b,
		div: (b) => a = a / b,
		getResult: () => a 		
	};
}
const result = calc(12);
console.log(result.add(10)); 
console.log(result.sub(1)); 
console.log(result.mult(4)); 
console.log(result.div(7)); 
console.log(result.getResult());
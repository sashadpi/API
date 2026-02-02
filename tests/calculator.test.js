const { add, divide } = require('../calculator.js');
// test('Test1', () => {
// 	console.log('Hello from Test1');
// });

// test('Test2', () => {
// 	console.log('Hello from Test2');
// });

// test('Expect 1 + 2 = 3', () => {
// 	let num1 = 1;
// 	let num2 = 2;
// 	let result = 5;

// 	expect(num1 + num2).toBe(result);
// });

describe('Add function tests', () => {
	test('Verify add function: 10 + 10 = 20', () => {
		const result = add(10, 10);
		expect(result).toBe(20);
	});

	test.only('Verify add function: -10 + 10 = 0', () => {
		const result = add(-10, 10);
		expect(result).toEqual(0);
	});

	test('Verify add function: 0 + 10 = 10', () => {
		const result = add(0, 10);
		expect(result).toBe(10);
	});
});

describe('Divide function tests', () => {
	test.only('Verify divide function: 100 / 5 = 20', () => {
		let result = divide(100, 5);
		expect(result).toBe(20);
	});

	test.skip('Verify divide function: 100 / 0 returns error', () => {
		let result = divide(100, 0);
		expect(result).toBe('error');
	});

	test('Verify divide function: 5 / 20 = 0.25', () => {
		let result = divide(5, 20);
		expect(result).toBe(0.25);
	});
});

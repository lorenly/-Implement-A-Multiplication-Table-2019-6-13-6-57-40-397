const MultiplicationTable = require('../createMultiplicationTable');

let start, end, result;

it ('should show MultiplicationTable of two numbers', () => {
	start = 2;
	end = 4;
	result = MultiplicationTable.createMultiplicationTable(start, end);
	expectedResult = '2*2=4 \n'+
    				'2*3=6 3*3=9 \n'+
    				'2*4=8 3*4=12 4*4=16 \n'
    expect(result).toBe(expectedResult);
});

it ('should be true when range of start & end numbers is in between 2 to 1000', () => {
	start = 2;
	end = 4;
	result = MultiplicationTable.rangeOfOneToThousand(start, end);
    expect(result).toBe(true);
});

it ('should be false when start number is less than 2', () => {
	start = 1;
	end = 1000;
	result = MultiplicationTable.rangeOfOneToThousand(start, end);
    expect(result).toBe(false);
});

it ('should be false when start number is greater than 1000', () => {
	start = 1001;
	end = 1000;
	result = MultiplicationTable.rangeOfOneToThousand(start, end);
    expect(result).toBe(false);
});

it ('should be false when end number greater than 1000', () => {
    start = 2;
	end = 1001;
	result = MultiplicationTable.rangeOfOneToThousand(start, end);
    expect(result).toBe(false);
});

it ('should be false when end number less than 2', () => {
    start = 2;
	end = 1;
	result = MultiplicationTable.rangeOfOneToThousand(start, end);
    expect(result).toBe(false);
});

it ('should be true when start is not greater than end', () => {
	start = 9;
	end = 10;
	result = MultiplicationTable.startNumNotGreaterThanEnd(start, end);
    expect(result).toBe(true);
});

it ('should be false when start number is greater than end number', () => {
    start = 2;
	end = 1;
	result = MultiplicationTable.startNumNotGreaterThanEnd(start, end);
    expect(result).toBe(false);
});

it ('should be true when all conditions are met', () => {
    start = 2;
	end = 4;
	result = MultiplicationTable.isValid(start, end);
    expect(result).toBe(true);
});

it ('should be null when conditions are not met', () => {
    start = 2;
	end = 1001;
	result = MultiplicationTable.isValid(start, end);
    expect(result).toBe(null);
});








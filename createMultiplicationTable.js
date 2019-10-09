function createMultiplicationTable(start, end) {
	let multiplicationTable = "";

	if(isValid(start,end)){
	    for(let i = start; i <= end; i++){
	    	for(let j = start; j <= i; j++){
	    		let product = i*j;
	    		multiplicationTable += `${j}*${i}=${product} `;
	    	}
	    	multiplicationTable += '\n';

	    }
	    return multiplicationTable;
	}
	return false;
}

function rangeOfOneToThousand(start, end){
	const isStartNumWithInRange = start > 1 && start <= 1000;
	const isEndNumWithInRange = end > 1 && end <= 1000;

	return isStartNumWithInRange && isEndNumWithInRange;
}

function startNumNotGreaterThanEnd(start, end){
	return start <= end;
}

function isValid(start, end){
	const num1IsNotGreaterThanNum2 = startNumNotGreaterThanEnd(start, end);
	const withInRange = rangeOfOneToThousand(start,end);

	if(num1IsNotGreaterThanNum2 && withInRange)
		return true;
	return null;
}

module.exports = {
					createMultiplicationTable: createMultiplicationTable,
					rangeOfOneToThousand: rangeOfOneToThousand,
					startNumNotGreaterThanEnd, startNumNotGreaterThanEnd,
					isValid: isValid		
				};
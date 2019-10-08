function multiply(start, end) {
	let multiplicationTable = "";

	if(rangeOfOneToThousand && isNumerical && startNumNotGreaterThanEnd){
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
	if(start > 0 && end <= 1000)
		return true;
	return false;
}

function isNumerical(start, end){
	if(isNaN(start) || isNaN(end) || start == null || end == null)
		return false;
	return true;
}

function startNumNotGreaterThanEnd(start, end){
	if(start <= end)
		return true;
	return null;

}
module.exports = {
					multiply: multiply,
					rangeOfOneToThousand: rangeOfOneToThousand,
					isNumerical: isNumerical,	
					startNumNotGreaterThanEnd, startNumNotGreaterThanEnd		
				};
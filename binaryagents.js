function makePizza(str) {
  return String.fromCharCode(...str.split(" ").map(function(char){ return parseInt(char, 2); }));
}

/* function binaryAgent(str) {
	var decimalArr = [];
	var charArr = [];
    str = str.split(' ');
	str.forEach(function(char) {
		decimalArr.push(parseInt(char, 2).toString());
	});
	decimalArr.forEach(function(char) {
		charArr.push(String.fromCharCode(char));
	});
	return charArr.join('');
} */
function addTogether(arg1, arg2) {
	var number = true; 
	var sum;
	var arg3;


	function numTest(args) {
		for (var prop in args) {
			if (typeof args[prop] !== 'number' || Array.isArray(args)) {
				number = false;
			}
		}
	}
	//loop for 1
	if (arguments.length === 1) {
		numTest(arguments);
		if (number === false) {
			return undefined;
		}
		return (makeAdder(arg3));
	}
	//loop for 2
	if (arguments.length > 1) {
		numTest(arguments);
		if (number === false) {
			return undefined;
		}
		sum = arg1 + arg2;
		return sum;
	}
	//addition function
	function makeAdder(arg3) {
		return function(arg3) {
			numTest(arg3);
			if (number === false) {
				return undefined;
			}
			return arg1 + arg3;
		};
	}
}
addTogether(2) (3);
//to do: refactor!! 
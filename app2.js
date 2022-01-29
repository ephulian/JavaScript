const sumPairs = (ints, s) => {
	x = [];
	y = [];

	xInd = [];
	yInd = [];

	let i = 0;
	ints.forEach((n) => {
		const newArray = Array.from(ints.slice(i + 1)); //?
		newArray.forEach((num) => {
			if (n + num === s) {
				x.push(n);
				y.push(num);
				n; //?
				yInd.push(newArray.indexOf(n));
			}
		});
		// hello

		i++;
	});

	x; //?
	y; //?

	const xIndexes = x.map((e) => ints.indexOf(e)); //?
	// const yIndexes = y.map((e) => ints.indexOf(e)); //?

	yInd; //?
	ints[xIndexes[0]]; //?
	ints[yIndexes[0]]; //?

	if (x[0] || y[0]) {
		return [ints[xIndexes[0]], ints[yIndexes[0]]];
	} else {
		return undefined;
	}
	// return [x, y];
};

arr1 = [[1, -2, 3, 0, -6, 1], -6];
arr2 = [[1, 4, 8, 7, 3, 15], 8];
arr3 = [[4, -2, 3, 3, 4], 8];
arr4 = [[20, -13, 40], -7];
arr5 = [[1, 2, 3, 4, 1, 0], 2];
arr6 = [[10, 5, 2, 3, 7, 5], 10];

// sumPairs(arr1[0], arr1[1]); //?
// sumPairs(arr2[0], arr2[1]); //?
// sumPairs(arr3[0], arr3[1]); //?
// sumPairs(arr4[0], arr4[1]); //?
// sumPairs(arr5[0], arr5[1]); //?
sumPairs(arr6[0], arr6[1]); //?

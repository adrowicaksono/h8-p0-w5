function deepSum(arr) {
	var hitung = 0;
	if (arr.length === 0) {
		return [];
	} else {
		for (a = 0; a <= arr.length - 1; a++) {
			var hitung2 = 0;
			for (b = 0; b <= arr[a].length - 1; b++) {
				var hitung3 = 0;
				for (c = 0; c <= arr[a][b][c]; c++) {
					hitung3 = hitung3 + arr[a][b][c];
				}
				hitung2 = hitung2 + hitung3;
			}
			hitung = hitung + hitung2;
		}
		return hitung;
	}
}

//TEST CASE
console.log(
	deepSum([
		[[4, 5, 6], [9, 1, 2, 10], [9, 4, 3]],
		[[4, 14, 31], [9, 10, 18, 12, 20], [1, 4, 90]],
		[[2, 5, 10], [3, 4, 5], [2, 4, 5, 10]],
	])
); // 316
console.log(
	deepSum([
		[[20, 10], [15], [1, 1]],
		[[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [2], [9, 11]],
		[[3, 5, 1], [1, 5, 3], [1]],
		[[2]],
	])
); // 156

console.log(deepSum([])); // No number

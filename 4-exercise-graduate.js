function highestScore(students) {
	var result = {};
	result['tidak lulus'] = [];
	//format buat isi property pada object : result.foxes = {}  ;
	//format buat isi nilai pada property object = result.foxes = {name :'', score:0}

	if (students.length === 0) {
		return {};
	} else {
		for (a = 0; a <= students.length - 1; a++) {
			//CONSTRURTOR
			//membuat object baru berdasarkan nama class
			//menggunakan object.hasOwnProperty(variable)
			if (result.hasOwnProperty(students[a].class) === false) {
				//gunakan [] untuk mendampingi properti asli yang diakses menggunakan .(dot)
				// membentuk properti(induk) baru besarta properti-properti(child) didalamnya
				result[students[a].class] = [];
			} //else disini yang belakang tidak masuk
			//jika propertinya ada maka, apakah score lebih besar dari 74
			if (students[a].score >= 75) {
				result[students[a].class].push({
					nama: students[a].name,
					score: students[a].score,
				});
			} else {
				result['tidak lulus'].push({
					nama: students[a].name,
					score: students[a].score,
				});
			}
		}

		return result;
	}
}

// TEST CASE
console.log(
	highestScore([
		{
			name: 'Dimitri',
			score: 90,
			class: 'foxes',
		},
		{
			name: 'Alexei',
			score: 85,
			class: 'wolves',
		},
		{
			name: 'Sergei',
			score: 74,
			class: 'foxes',
		},
		{
			name: 'Anastasia',
			score: 78,
			class: 'wolves',
		},
	])
);

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }

console.log(
	highestScore([
		{
			name: 'Alexander',
			score: 100,
			class: 'foxes',
		},
		{
			name: 'Alisa',
			score: 76,
			class: 'wolves',
		},
		{
			name: 'Vladimir',
			score: 92,
			class: 'foxes',
		},
		{
			name: 'Albert',
			score: 71,
			class: 'wolves',
		},
		{
			name: 'Viktor',
			score: 80,
			class: 'tigers',
		},
	])
);

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }

console.log(highestScore([])); //{}

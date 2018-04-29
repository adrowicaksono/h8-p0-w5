function naikAngkot(arrPenumpang) {
	rute = ['A', 'B', 'C', 'D', 'E', 'F'];
	//your code here
	var penumpang = [];

	function bayarOngkos(penumpang, rute) {
		var dataPenumpang = penumpang;
		var berangkat = 0;
		var tujuan = 0;
		var ongkos = 2000;
		var bayar = 0;

		for (b = 0; b <= rute.length - 1; b++) {
			if (penumpang[1] === rute[b]) {
				berangkat = b;
			}
			if (penumpang[2] === rute[b]) {
				tujuan = b;
			}
		}
		bayar = (tujuan - berangkat) * 2000;
		return bayar;
	}

	for (var a = 0; a <= arrPenumpang.length - 1; a++) {
		penumpang.push({
			nama: arrPenumpang[a][0],
			naikDari: arrPenumpang[a][1],
			tujuan: arrPenumpang[a][2],
			bayar: bayarOngkos(arrPenumpang[a], rute),
		});
	}
	return penumpang;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
